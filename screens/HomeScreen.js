import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './home.style';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { COLORS, SIZES } from '../constant/styles';
import PopRecipe from '../components/PopRecipe';
import BroBy from '../components/BroBy';
import AsyncStorage from '@react-native-async-storage/async-storage';
const HomeScreen = ({ navigation }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    checkExistingUser();
  }, []);
  async function checkExistingUser() {
    const id = await AsyncStorage.getItem('id');
    const useId = `user${JSON.parse(id)}`;

    try {
      const currentUser = await AsyncStorage.getItem(useId);

      if (currentUser !== null) {
        const parsedData = JSON.parse(currentUser);
        setUserData(parsedData);
      }
    } catch (error) {
      console.log('Error retrieving the data: ', error);
    }
  }

 


  
  const getFirstWordWithLimit = (text, limit = 8) => {
    if (!text) return '--';
    const firstWord = text.split(' ')[0];
    return firstWord.length > limit ? firstWord.substring(0, limit) : firstWord;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <View style={styles.headingContainer}>
          <View style={styles.heading1}>
            <Image
              style={styles.imageProf}
              source={require('../assets/image/profile kecil.png')}
            />

            <Text numberOfLines={1} style={styles.name}>
              Halo, {getFirstWordWithLimit(userData ? userData.username : '--')}
            </Text>
          </View>
          <View style={styles.heading2}>
            <TouchableOpacity
              onPress={() => navigation.navigate('LikedRecipes')}
            >
              <Ionicons
                name="heart-outline"
                size={24}
                color={COLORS.secondary}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
              <Ionicons
                name="settings-outline"
                size={24}
                color={COLORS.secondary}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.midContainer}>
        <Image
          style={styles.imageMid}
          source={require('../assets/image/search.png')}
        />
        <View style={styles.searchContainer}>
          <Ionicons
            name="search"
            size={SIZES.xLarge}
            style={styles.searchIcon}
          />

          <View style={styles.searchWrapper}>
            <TextInput
              style={styles.searchInput}
              //   value={searchInput}
              //   onChangeText={(input) => {
              //     // setSearchInput(input);
              //   }}
              onPress={() => navigation.navigate('SearchRecipe')}
              placeholder="Search Recipe Here!"
            />
          </View>
        </View>
      </View>

      <PopRecipe />
      <BroBy />
    </SafeAreaView>
  );
};

export default HomeScreen;
