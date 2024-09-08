import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Modal, // Import modal
    TextInput, // Import text input for forgot password modal
    Pressable,
    TouchableWithoutFeedback,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { COLORS, SHADOWS, SIZES } from '../constant/styles';
import LoginForm from '../components/Auth/LoginForm';
import RegisterForm from '../components/Auth/RegisterForm';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import useFetch from '../hook/useFetch';

const AuthScreen = ({ navigation }) => {
    const [toggle, setToggle] = useState(false);
    const [modalVisible, setModalVisible] = useState(false); // Modal visibility state
    const [email, setEmail] = useState(''); // State for email input
    const route = useRoute();
    const { apiUrl } = useFetch();
    useEffect(() => {
        if (route.params?.isLogin) {
            setToggle(true);
        }
    }, [route.params]);

    const handleForgotPassword = async () => {
        try {
            const endpoint = `${apiUrl}api/users/forgotPassword`;
            const response = await axios.post(endpoint, { email });
            if (response.status === 200) {
                alert('Password reset link sent to your email.');
            } else {
                alert('Error sending password reset email.');
            }
        } catch (error) {
            alert('Failed to send password reset email.');
        } finally {
            setModalVisible(false);
        }
    };
    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <Text style={styles.headerTitle}>
                    Login or create an account
                </Text>
                <View style={styles.headerNavBtn}>
                    <TouchableOpacity
                        style={[
                            styles.headerBtnLeft,
                            {
                                backgroundColor: toggle
                                    ? COLORS.secondary
                                    : COLORS.wht,
                            },
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
                            {
                                backgroundColor: toggle
                                    ? COLORS.wht
                                    : COLORS.secondary,
                            },
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
                    <LoginForm
                        navigation={navigation}
                        openForgotPasswordModal={() => setModalVisible(true)}
                    />
                ) : (
                    <RegisterForm navigation={navigation} />
                )}

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(!modalVisible)}
                >
                    <TouchableWithoutFeedback onPress={closeModal}>
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <Text style={styles.modalTitle}>
                                    Forgot Password
                                </Text>
                                <TextInput
                                    placeholder="Enter your email"
                                    value={email}
                                    onChangeText={setEmail}
                                    style={styles.input}
                                    allowFontScaling={false}
                                />
                                <TouchableOpacity
                                    style={styles.enterBtn}
                                    onPress={handleForgotPassword}
                                >
                                    <Text style={styles.enterBtnText}>
                                        Submit
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.enterBtn}
                                    onPress={() => setModalVisible(false)}
                                >
                                    <Text style={styles.enterBtnText}>
                                        Close
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
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
        width: '100%',
        paddingVertical: 6,
        marginBottom: 10,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: COLORS.secondary,
    },
    enterBtnText: {
        fontFamily: 'semiBold',
        fontSize: SIZES.medium,
        color: COLORS.wht,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 18,
        marginBottom: 15,
        fontFamily: 'bold',
    },
});
