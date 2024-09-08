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
  email: Yup.string()
    .email('Provide valid email address')
    .required('Your email address'),
  password: Yup.string()
    .min(8, 'Password must be 8 at least characters')
    .required('Your password'),
});

const LoginForm = ({ navigation, openForgotPasswordModal }) => {
    // const apiUrl = process.env.EXPO_PUBLIC_API_URL;

    const { apiUrl } = useFetch();
    const [obsecureText, setObsecureText] = useState(true);
    const [loader, setLoader] = useState(false);

    const login = async (values) => {
        setLoader(true);
        try {
            const endpoint = `${apiUrl}api/users/login`;
            const response = await axios.post(endpoint, values);
            if (response.status === 200) {
                const responseData = response.data;
                await AsyncStorage.setItem(
                    `user${responseData._id}`,
                    JSON.stringify(responseData)
                );
                await AsyncStorage.setItem(
                    'id',
                    JSON.stringify(responseData._id)
                );
                navigation.replace('Tabs');
            } else {
                Alert.alert(
                    'Error Logging in',
                    'Please Provide valid credentials',
                    [
                        {
                            text: 'Try again',
                            onPress: () => {},
                        },
                    ]
                );
            }
        } catch (error) {
            Alert.alert(
                'Error',
                'Oops, Error logging in. try login again with correct credentials',
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
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                login(values);
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
                            placeholder="Email"
                            allowFontScaling={false}
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
                            <Text style={styles.errorMessage}>
                                {errors.email}
                            </Text>
                        )}
                    </View>

                    <View style={styles.inputWrapper}>
                        <TextInput
                            placeholder="Password"
                            allowFontScaling={false}
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
                                name={
                                    obsecureText
                                        ? 'eye-outline'
                                        : 'eye-off-outline'
                                }
                                size={20}
                            />
                        </TouchableOpacity>
                        {touched.password && errors.password && (
                            <Text style={styles.errorMessage}>
                                {errors.password}
                            </Text>
                        )}
                    </View>
                    <TouchableOpacity
                        style={styles.forgotBtn}
                        onPress={openForgotPasswordModal}
                    >
                        <Text style={styles.forgotText}>Forgot Password?</Text>
                    </TouchableOpacity>
                    <View style={{ marginTop: 20 }}>
                        {isValid ? (
                            <TouchableOpacity
                                onPress={handleSubmit}
                                style={styles.btnWrapper(
                                    isValid === false
                                        ? COLORS.gray
                                        : COLORS.secondary
                                )}
                            >
                                {loader === false ? (
                                    <Text style={styles.enterBtnText}>
                                        S I G N I N
                                    </Text>
                                ) : (
                                    <ActivityIndicator />
                                )}
                            </TouchableOpacity>
                        ) : (
                            <View
                                style={styles.btnWrapper(
                                    isValid === false
                                        ? COLORS.gray
                                        : COLORS.primary
                                )}
                            >
                                <Text style={styles.enterBtnText}>
                                    S I G N I N
                                </Text>
                            </View>
                        )}
                    </View>
                </View>
            )}
        </Formik>
    );
};

export default LoginForm;

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
    forgotText: {
        fontFamily: 'bold',
        color: COLORS.primary,
    },
    forgotBtn: {
        marginBottom: 25,
        marginLeft: 10,
    },
    btnWrapper: (backgroundColor) => ({
        backgroundColor: backgroundColor,
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
    }),
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
