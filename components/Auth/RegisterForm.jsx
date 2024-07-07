import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { COLORS, SIZES } from '../../constant/styles';

const RegisterForm = () => {
  return (
    <>
      <View>
        <TextInput placeholder="Fullname" style={styles.input} />
        <TextInput placeholder="Username" style={styles.input} />
        <TextInput placeholder="Password" style={styles.input} />
      </View>

      <TouchableOpacity style={styles.enterBtn}>
        <Text style={styles.enterBtnText}>Enter</Text>
      </TouchableOpacity>
    </>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 60,
    backgroundColor: COLORS.gray3,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    color: COLORS.primary,
    fontFamily: 'semiBold',
    marginBottom: 15,
  },
  enterBtn: {
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    marginTop: 10,
  },
  enterBtnText: {
    fontFamily: 'bold',
    fontSize: SIZES.medium,
    color: COLORS.wht,
  },
});
