import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import styles from './listbody.style';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constant/styles';

const ListBody = () => {
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
    <View style={styles.container}>
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
                    <Ionicons name="trash" size={24} color={COLORS.secondary} />
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
  );
};

export default ListBody;
