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
import React, { useState } from 'react';
import styles from './listbody.style';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constant/styles';
import AddButton from './AddButton';

const ListBody = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [shopList, setShopList] = useState([
    {
      name: 'Bawang',
      qty: '1 kg',
    },
    {
      name: 'Gula',
      qty: '1 kg',
    },
    {
      name: 'Garam',
      qty: '1 kg',
    },
  ]);
  const [checkedShopList, setCheckedShopList] = useState([
    {
      name: 'Bawang',
      qty: '1 kg',
    },
    {
      name: 'Gula',
      qty: '1 kg',
    },
    {
      name: 'Garam',
      qty: '1 kg',
    },
  ]);
  return (
    <>
      <View style={styles.container}>
        <Modal
          visible={modalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.ModalCenteredView}>
            <View style={styles.modalView}>
              <View style={styles.inputWrapper}>
                <TextInput style={[styles.inputName]} placeholder="things" />
                <TextInput style={styles.inputQty} placeholder="qty" />
              </View>
              <TouchableOpacity
                style={styles.saveListBtn}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Ionicons name="add" size={24} color={COLORS.wht} />
                <Text style={styles.saveListBtnText}> Save   </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Text style={styles.title}>Shopping List</Text>
        <View style={styles.wrapperContainer}>
          <Text style={styles.headText}>UNCHECKED</Text>
          <View style={styles.uncheckedList}>
            {shopList.length > 1 ? (
              <FlatList
                data={shopList}
                renderItem={({ item }) => (
                  <View style={styles.wrapperList}>
                    <View style={styles.textWrapper}>
                      <Text style={styles.qtyText}>{item.qty}</Text>
                      <Text style={styles.nameText}>{item.name}</Text>
                    </View>
                    <TouchableOpacity style={styles.iconWrapper}>
                      <Ionicons
                        name="checkmark-circle-outline"
                        size={24}
                        color={COLORS.gray}
                      />
                    </TouchableOpacity>
                  </View>
                )}
              />
            ) : (
              <Text style={styles.emptyText}>Your Shopping List Is Empty</Text>
            )}
          </View>
        </View>
        <View style={styles.wrapperContainer}>
          <Text style={styles.headText}>CHECKED</Text>
          <View style={styles.uncheckedList}>
            {checkedShopList ? (
              <FlatList
                data={checkedShopList}
                renderItem={({ item }) => (
                  <View style={styles.wrapperList}>
                    <View style={styles.textWrapper}>
                      <Text style={styles.qtyText}>{item.qty}</Text>
                      <Text style={styles.nameText}>{item.name}</Text>
                    </View>
                    <View style={styles.iconWrapper}>
                      <Ionicons
                        name="trash"
                        size={24}
                        color={COLORS.secondary}
                      />
                      <Ionicons
                        name="checkmark-circle"
                        size={24}
                        color={COLORS.secondary}
                      />
                    </View>
                  </View>
                )}
              />
            ) : (
              <View>Checked some item</View>
            )}
          </View>
        </View>
      </View>
      <AddButton setModalVisible={setModalVisible} />
    </>
  );
};

export default ListBody;
