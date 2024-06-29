import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileHead from '../components/Profile/ProfileHead';
import Menus from '../components/Profile/Menus';
const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <ProfileHead />
        <Menus />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
