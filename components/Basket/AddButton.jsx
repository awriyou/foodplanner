import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {Ionicons} from '@expo/vector-icons'
import { COLORS, SHADOWS } from "../../constant/styles";

const AddButton = ({setModalVisible}) => {
  return (
    <TouchableOpacity
      style={styles.addBtn}
      onPress={() => setModalVisible(true)}
    >
      {/* <Text style={styles.textBtn}>Add List</Text> */}
      <Ionicons name="bag-add" size={30} color={COLORS.wht} />
    </TouchableOpacity>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  addBtn: {
    paddingHorizontal: 13,
    paddingVertical: 13,
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    ...SHADOWS.medium,
    position: 'absolute',
    bottom: 90,
    right: 20,
  },
  textBtn: {
    marginHorizontal: 10,
    fontFamily: 'bold',
    color: COLORS.wht,
  },
});
