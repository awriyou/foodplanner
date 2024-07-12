import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileHead from '../components/Profile/ProfileHead';
import Menus from '../components/Profile/Menus';
import { useState } from 'react';
import MustLogin from '../components/Auth/MustLogin';
const ProfileScreen = ({ navigation }) => {
  const [userLogin, setUserLogin] = useState(false);


  return (
    <SafeAreaView>

      { userLogin === false ? <MustLogin navigation={navigation}/> : (<View></View>)}
      <ProfileHead />
      <Menus navigation={navigation} />
    </SafeAreaView>
  );
};

export default ProfileScreen;
