import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import {Ionicons} from '@expo/vector-icons'
import { COLORS, SIZES } from "../../constant/styles";

const LoginForm = () => {
  return (
    <>
      <View>
        <TextInput placeholder="Username" style={styles.input} />
        <TextInput placeholder="Password" style={styles.input} />
      </View>
      <View>
        <TouchableOpacity style={styles.enterBtn}>
          <Text style={styles.enterBtnText}>Enter</Text>
        </TouchableOpacity>
        <Text style={styles.or}>OR</Text>
        <TouchableOpacity style={styles.googleBtn}>
          <Text style={styles.enterBtnText}>Continue with google</Text>
          <Ionicons name="logo-google" size={24} color={COLORS.secondary} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default LoginForm;

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
  },
  googleBtn: {
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  enterBtnText: {
    fontFamily: 'bold',
    fontSize: SIZES.medium,
    color: COLORS.wht,
  },
  or: {
    fontFamily: 'bold',
    marginVertical: 10,
    textAlign: 'center',
  },
});
