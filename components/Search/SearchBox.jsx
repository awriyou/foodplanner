import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import styles from './searchbox.style';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SIZES } from '../../constant/styles';

const SearchBox = () => {
  const [searchInput, setSearchInput] = useState('');
  return (
    <View style={styles.searchContainer}>
      <Ionicons name="search" size={SIZES.xLarge} style={styles.searchIcon} />

      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
          value={searchInput}
          onChangeText={(input) => {
            setSearchInput(input);
          }}
          // onPress={() => navigation.navigate('SearchRecipe')}
          placeholder="Search Recipe Here!"
        />
      </View>
      {searchInput ? (
        <TouchableOpacity onPress={() => setSearchInput('')}>
          <Ionicons
            name="close-circle-outline"
            size={SIZES.xLarge}
            color={COLORS.dark}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.searchBtn} onPress={() => {}}>
          <Text style={styles.textBtn}>Search</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBox;
