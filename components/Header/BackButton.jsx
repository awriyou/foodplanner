import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constant/styles";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const BackButton = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="return-up-back" size={40} color={COLORS.wht} />
      </TouchableOpacity>
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    backgroundColor: COLORS.wht,
    
    zIndex: 999,
  },
  backButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    left: 20,
  },
});
