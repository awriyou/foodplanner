import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileHead from '../components/Profile/ProfileHead';
import Menus from '../components/Profile/Menus';
import { useCallback, useEffect, useState } from 'react';
import MustLogin from '../components/Auth/MustLogin';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
const ProfileScreen = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);

  useFocusEffect(
    useCallback(() => {
      checkExistingUser();
    }, [])
  );
  async function checkExistingUser() {
    const id = await AsyncStorage.getItem('id');
    const useId = `user${JSON.parse(id)}`;

    try {
      const currentUser = await AsyncStorage.getItem(useId);

      if (currentUser !== null) {
        const parsedData = JSON.parse(currentUser);
        setUserData(parsedData);
        setUserLogin(true);
      }
    } catch (error) {
      console.log('Error retrieving the data: ', error);
    }
  }

  return (
    <SafeAreaView>
      {userLogin === false ? (
        <MustLogin navigation={navigation} />
      ) : (
        <View></View>
      )}
      <ProfileHead data={userData} />
      <Menus navigation={navigation} />
    </SafeAreaView>
  );
};

export default ProfileScreen;
