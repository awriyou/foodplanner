import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLORS, SHADOWS, SIZES } from '../constant/styles';
import LoginForm from '../components/Auth/LoginForm';
import RegisterForm from '../components/Auth/RegisterForm';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';

const AuthScreen = ({ navigation }) => {
  const [toggle, setToggle] = useState(false);
  const route = useRoute();

  useEffect(() => {
    if (route.params?.isLogin) {
      setToggle(true);
    }
  }, [route.params]);

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Login or create an account</Text>
        <View style={styles.headerNavBtn}>
          <TouchableOpacity
            style={[
              styles.headerBtnLeft,
              { backgroundColor: toggle ? COLORS.secondary : COLORS.wht },
            ]}
            onPress={() => setToggle(true)}
          >
            <Text
              style={[
                styles.headerBtnText,
                {
                  color: toggle ? COLORS.wht : COLORS.primary,
                },
              ]}
            >
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.headerBtnRight,
              { backgroundColor: toggle ? COLORS.wht : COLORS.secondary },
            ]}
            onPress={() => setToggle(false)}
          >
            <Text
              style={[
                styles.headerBtnText,
                {
                  color: toggle ? COLORS.primary : COLORS.wht,
                },
              ]}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
        {toggle ? (
          <LoginForm navigation={navigation} />
        ) : (
          <RegisterForm navigation={navigation} />
        )}
      </View>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.wht,
    paddingHorizontal: 40,
  },

  container: {
    width: '100%',
    // alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'extraBold',
    textAlign: 'center',
    fontSize: SIZES.large,
    color: COLORS.primary,
  },
  headerNavBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 40,
  },
  headerBtnLeft: {
    paddingHorizontal: 25,
    paddingVertical: 8,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    ...SHADOWS.medium,
  },
  headerBtnRight: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    ...SHADOWS.medium,
  },
  headerBtnText: {
    fontFamily: 'semiBold',
    fontSize: SIZES.medium,
  },
  //!=================
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
