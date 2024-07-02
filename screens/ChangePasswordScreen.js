import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../constant/styles';

const ChangePasswordScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput style={[styles.inputName]} placeholder="Current Password" />
      <TouchableOpacity style={styles.forgotBtn}>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>
      <TextInput style={[styles.inputName]} placeholder="New Password" />
      <TextInput
        style={[styles.inputName]}
        placeholder="Confirm New Password"
      />
      <TouchableOpacity style={styles.confirmBtn} onPress={() => {}}>
        <Text style={styles.confirmText}>Change Password</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangePasswordScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.wht,
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  inputName: {
    height: 60,
    backgroundColor: COLORS.gray3,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    color: COLORS.primary,
    fontFamily: 'semiBold',
    marginBottom: 15,
  },
  forgotText: {
    fontFamily: 'bold',
    color: COLORS.primary,
  },
  forgotBtn: {
    marginBottom: 25,
    marginLeft: 10,
  },
  confirmBtn: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingVertical: 15,
    backgroundColor: COLORS.secondary,
  },
  confirmText:{
    fontFamily: 'bold',
    fontSize: SIZES.large -2,
    color: COLORS.wht,
  },
});
