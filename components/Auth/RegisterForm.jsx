import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../constant/styles';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useFetch from '../../hook/useFetch';

const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, 'Username must be at least 3 characters')
    .required('Your username is required'),
  email: Yup.string()
    .email('Provide valid email address')
    .required('Your email address is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Your password is required'),
});

const RegisterForm = ({ navigation }) => {
  const { apiUrl } = useFetch();
  const [obsecureText, setObsecureText] = useState(true);
  const [loader, setLoader] = useState(false);

  const register = async (values, resetForm) => {
    setLoader(true);
    try {
      const endpoint = `${apiUrl}api/users/register`;
      const response = await axios.post(endpoint, values);
      if (response.status === 201) {
        Alert.alert(
          'Registration Successful',
          'You can now login with your credentials',
          [
            {
              text: 'OK',
              onPress: () => {
                resetForm();
                navigation.navigate('Auth', { isLogin: true });
              },
            },
          ]
        );
      } else {
        Alert.alert('Error Registering', 'Please Provide valid credentials', [
          {
            text: 'Try again',
            onPress: () => {},
          },
        ]);
      }
    } catch (error) {
      Alert.alert(
        'Error',
        'Oops, Error registering. try again with correct credentials',
        [
          {
            text: 'Try again',
            onPress: () => {},
          },
        ]
      );
    } finally {
      setLoader(false);
    }
  };

  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        register(values, resetForm);
      }}
    >
      {({
        handleChange,
        handleSubmit,
        values,
        touched,
        errors,
        isValid,
        setFieldTouched,
      }) => (
        <View>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Full Name"
              style={styles.input}
              onFocus={() => {
                setFieldTouched('username');
              }}
              onBlur={() => {
                setFieldTouched('username', '');
              }}
              value={values.username}
              onChangeText={handleChange('username')}
              autoCapitalize="none"
              autoCorrect={false}
            />
            {touched.username && errors.username && (
              <Text style={styles.errorMessage}>{errors.username}</Text>
            )}
          </View>

          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Email"
              style={styles.input}
              onFocus={() => {
                setFieldTouched('email');
              }}
              onBlur={() => {
                setFieldTouched('email', '');
              }}
              value={values.email}
              onChangeText={handleChange('email')}
              autoCapitalize="none"
              autoCorrect={false}
            />
            {touched.email && errors.email && (
              <Text style={styles.errorMessage}>{errors.email}</Text>
            )}
          </View>

          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Password"
              style={[styles.input, { paddingRight: 45 }]}
              secureTextEntry={obsecureText}
              onFocus={() => {
                setFieldTouched('password');
              }}
              onBlur={() => {
                setFieldTouched('password', '');
              }}
              value={values.password}
              onChangeText={handleChange('password')}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <TouchableOpacity
              style={styles.eyeBtn}
              onPress={() => {
                setObsecureText(!obsecureText);
              }}
            >
              <MaterialCommunityIcons
                name={obsecureText ? 'eye-outline' : 'eye-off-outline'}
                size={20}
              />
            </TouchableOpacity>
            {touched.password && errors.password && (
              <Text style={styles.errorMessage}>{errors.password}</Text>
            )}
          </View>

          <View style={{ marginTop: 20 }}>
            {isValid ? (
              <TouchableOpacity
                onPress={handleSubmit}
                style={styles.btnWrapper(COLORS.secondary)}
              >
                {loader === false ? (
                  <Text style={styles.enterBtnText}>S I G N U P</Text>
                ) : (
                  <ActivityIndicator />
                )}
              </TouchableOpacity>
            ) : (
              <View style={styles.btnWrapper(COLORS.gray)}>
                <Text style={styles.enterBtnText}>S I G N U P</Text>
              </View>
            )}
          </View>
        </View>
      )}
    </Formik>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 60,
    backgroundColor: COLORS.gray3,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 8,
    color: COLORS.primary,
    fontFamily: 'semiBold',
    marginBottom: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnWrapper: (backgroundColor) => ({
    backgroundColor: backgroundColor,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  }),
  enterBtnText: {
    fontFamily: 'bold',
    fontSize: SIZES.medium,
    color: COLORS.wht,
  },
  inputWrapper: {
    marginBottom: 13,
  },
  errorMessage: {
    color: 'red',
  },
  eyeBtn: {
    position: 'absolute',
    right: 20,
    top: 20,
  },
});
