import React from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { COLORS, SIZES } from '../constant/styles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useFetch from '../hook/useFetch';

const ChangePasswordSchema = Yup.object().shape({
    oldPassword: Yup.string().required('Current Password is required'),
    newPassword: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('New Password is required'),
    confirmNewPassword: Yup.string()
        .oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
        .required('Confirm New Password is required'),
});

const ChangePasswordScreen = ({ navigation }) => {
    const { apiUrl } = useFetch();
    const changePassword = async (values) => {
        try {
            const userId = await AsyncStorage.getItem('id');
            const parsedId = JSON.parse(userId);

            await axios.put(`${apiUrl}api/users/changePassword/${parsedId}`, {
                oldPassword: values.oldPassword,
                newPassword: values.newPassword,
            });

            Alert.alert('Password updated successfully');
            navigation.replace('Tabs');
        } catch (error) {
            console.log('Error changing password: ', error);
            Alert.alert('Failed to update password');
        }
    };

    async function forgotPassword() {
        const id = await AsyncStorage.getItem('id');
        const useId = `user${JSON.parse(id)}`;
        try {
            const currentUser = await AsyncStorage.getItem(useId);
            const parsedData = JSON.parse(currentUser);

            const parsedEmail = parsedData.email;
            const response = await axios.post(
                `${apiUrl}api/users/forgotPassword`,
                {
                    email: parsedEmail,
                }
            );

            if (response.status === 200) {
                Alert.alert(
                    'Success',
                    'Your password has been sent to your email'
                );
                navigation.replace('Tabs');
            } else if (response.status === 404) {
                Alert.alert('Error', 'User not found');
            } else if (response.status === 500) {
                Alert.alert(
                    'Error',
                    'Error sending email. Please try again later.'
                );
            } else {
                Alert.alert('Error', 'Failed to send reset password link');
            }
        } catch (error) {
            console.error('Error resetting password:', error);
            Alert.alert(
                'Error',
                'Something went wrong. Please try again later.'
            );
        }
    }

    const handleForgotPassword = () => {
        Alert.alert(
            'Forgot Password',
            'Are you sure you want to proceed? we will send password to your email',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: () => forgotPassword(),
                },
            ],
            { cancelable: false } // Menghindari popup ditutup dengan menekan di luar popup
        );
    };
    
    return (
        <View style={styles.container}>
            <Formik
                initialValues={{
                    oldPassword: '',
                    newPassword: '',
                    confirmNewPassword: '',
                }}
                validationSchema={ChangePasswordSchema}
                onSubmit={(values) => {
                    changePassword(values);
                }}
            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                }) => (
                    <>
                        <TextInput
                            style={[
                                styles.inputName,
                                touched.oldPassword && errors.oldPassword
                                    ? styles.errorInput
                                    : null,
                            ]}
                            placeholder="Current Password"
                            allowFontScaling={false}
                            onChangeText={handleChange('oldPassword')}
                            onBlur={handleBlur('oldPassword')}
                            value={values.oldPassword}
                            secureTextEntry
                        />
                        {touched.oldPassword && errors.oldPassword && (
                            <Text style={styles.errorText}>
                                {errors.oldPassword}
                            </Text>
                        )}

                        <TouchableOpacity
                            style={styles.forgotBtn}
                            onPress={handleForgotPassword}
                        >
                            <Text style={styles.forgotText}>
                                Forgot Password?
                            </Text>
                        </TouchableOpacity>

                        <TextInput
                            style={[
                                styles.inputName,
                                touched.newPassword && errors.newPassword
                                    ? styles.errorInput
                                    : null,
                            ]}
                            placeholder="New Password"
                            allowFontScaling={false}
                            onChangeText={handleChange('newPassword')}
                            onBlur={handleBlur('newPassword')}
                            value={values.newPassword}
                            secureTextEntry
                        />
                        {touched.newPassword && errors.newPassword && (
                            <Text style={styles.errorText}>
                                {errors.newPassword}
                            </Text>
                        )}

                        <TextInput
                            style={[
                                styles.inputName,
                                touched.confirmNewPassword &&
                                errors.confirmNewPassword
                                    ? styles.errorInput
                                    : null,
                            ]}
                            placeholder="Confirm New Password"
                            allowFontScaling={false}
                            onChangeText={handleChange('confirmNewPassword')}
                            onBlur={handleBlur('confirmNewPassword')}
                            value={values.confirmNewPassword}
                            secureTextEntry
                        />
                        {touched.confirmNewPassword &&
                            errors.confirmNewPassword && (
                                <Text style={styles.errorText}>
                                    {errors.confirmNewPassword}
                                </Text>
                            )}

                        <TouchableOpacity
                            style={styles.confirmBtn}
                            onPress={handleSubmit}
                        >
                            <Text style={styles.confirmText}>
                                Change Password
                            </Text>
                        </TouchableOpacity>
                    </>
                )}
            </Formik>
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
    errorInput: {
        borderColor: 'red',
        borderWidth: 1,
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
    confirmText: {
        fontFamily: 'bold',
        fontSize: SIZES.large - 2,
        color: COLORS.wht,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
        marginLeft: 10,
    },
});
