import {
  Alert,
  FlatList,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './listbody.style';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constant/styles';
import AddButton from './AddButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ListBody = () => {
  const [itemQty, setItemQty] = useState('');
  const [itemName, setItemName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [shopList, setShopList] = useState([]);
  const [checkedShopList, setCheckedShopList] = useState([]);

  useEffect(() => {
    loadShopList();
    loadCheckedShopList();
  }, []);

  const loadShopList = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@shopList');
      if (jsonValue !== null) {
        setShopList(JSON.parse(jsonValue));
      }
    } catch (error) {
      console.error('Error loading shop list:', error);
    }
  };

  const loadCheckedShopList = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@checkedShopList');
      if (jsonValue !== null) {
        setCheckedShopList(JSON.parse(jsonValue));
      }
    } catch (error) {
      console.error('Error loading checked shop list:', error);
    }
  };

  const saveShopList = async (list) => {
    try {
      await AsyncStorage.setItem('@shopList', JSON.stringify(list));
      setShopList(list);
    } catch (error) {
      console.error('Error saving shop list:', error);
    }
  };

  const saveCheckedShopList = async (list) => {
    try {
      await AsyncStorage.setItem('@checkedShopList', JSON.stringify(list));
      setCheckedShopList(list);
    } catch (error) {
      console.error('Error saving checked shop list:', error);
    }
  };

  const addItem = (name, qty) => {
    const newItem = { name, qty };
    const newShopList = [...shopList, newItem];
    saveShopList(newShopList);
    setModalVisible(false);
  };

  const removeItem = (item, listType) => {
    if (listType === 'shopList') {
      const updatedList = shopList.filter((i) => i.name !== item.name);
      saveShopList(updatedList);
    } else if (listType === 'checkedShopList') {
      const updatedList = checkedShopList.filter((i) => i.name !== item.name);
      saveCheckedShopList(updatedList);
    }
  };

  const toggleCheck = (item) => {
    const isInShopList = shopList.find((i) => i.name === item.name);
    if (isInShopList) {
      removeItem(item, 'shopList');
      const newCheckedList = [...checkedShopList, item];
      saveCheckedShopList(newCheckedList);
    } else {
      removeItem(item, 'checkedShopList');
      const newShopList = [...shopList, item];
      saveShopList(newShopList);
    }
  };
  return (
    <>
      <View style={styles.container}>
        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.ModalCenteredView}>
            <View style={styles.modalView}>
              <View style={styles.inputWrapper}>
                <TextInput
                  style={[styles.inputName]}
                  placeholder="Item name"
                  onChangeText={(text) => setItemName(text)}
                />
                <TextInput
                  style={styles.inputQty}
                  placeholder="Quantity"
                  onChangeText={(text) => setItemQty(text)}
                />
              </View>
              <TouchableOpacity
                style={styles.saveListBtn}
                onPress={() => {
                  addItem(itemName, itemQty);
                  setItemName('');
                  setItemQty('');
                }}
              >
                <Ionicons name="add" size={24} color={COLORS.wht} />
                <Text style={styles.saveListBtnText}> Save </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Text style={styles.title}>Shopping List</Text>

        <View style={styles.wrapperContainer}>
          <Text style={styles.headText}>UNCHECKED</Text>
          <View style={styles.uncheckedList}>
            {shopList.length > 0 ? (
              <FlatList
                data={shopList}
                renderItem={({ item }) => (
                  <View style={styles.wrapperList}>
                    <View style={styles.textWrapper}>
                      <Text style={styles.qtyText}>{item.qty}</Text>
                      <Text style={styles.nameText}>{item.name}</Text>
                    </View>
                    <TouchableOpacity
                      style={styles.iconWrapper}
                      onPress={() => toggleCheck(item)}
                    >
                      <Ionicons
                        name="checkmark-circle-outline"
                        size={24}
                        color={COLORS.gray}
                      />
                    </TouchableOpacity>
                  </View>
                )}
                keyExtractor={(item) => item.name}
              />
            ) : (
              <Text style={styles.emptyText}>Your Shopping List Is Empty</Text>
            )}
          </View>
        </View>

        <View style={styles.wrapperContainer}>
          <Text style={styles.headText}>CHECKED</Text>
          <View style={styles.uncheckedList}>
            {checkedShopList.length > 0 ? (
              <FlatList
                data={checkedShopList}
                renderItem={({ item }) => (
                  <View style={styles.wrapperList}>
                    <View style={styles.textWrapper}>
                      <Text style={styles.qtyText}>{item.qty}</Text>
                      <Text style={styles.nameText}>{item.name}</Text>
                    </View>
                    <View style={styles.iconWrapper}>
                      <TouchableOpacity
                        onPress={() => removeItem(item, 'checkedShopList')}
                      >
                        <Ionicons
                          name="trash"
                          size={24}
                          color={COLORS.secondary}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity onPress={() => toggleCheck(item)}>
                        <Ionicons
                          name="checkmark-circle"
                          size={24}
                          color={COLORS.secondary}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
                keyExtractor={(item) => item.name}
              />
            ) : (
              <Text style={styles.emptyText}>No items checked</Text>
            )}
          </View>
        </View>
      </View>
      <AddButton setModalVisible={setModalVisible} />
    </>
  );
};

export default ListBody;
