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
import axios from 'axios';

const SearchBox = ({
  query,
  setQuery,
  handleSearch,
  searchInput,
  setSearchInput,
}) => {
  // const [searchInput, setSearchInput] = useState('');

  return (
    <View style={styles.searchContainer}>
      <View style={{ flexDirection: 'row' }}>
        <Ionicons name="search" size={SIZES.xLarge} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          value={query}
          onChangeText={(input) => {
            setQuery(input);
          }}
          // onPress={() => navigation.navigate('SearchRecipe')}
          placeholder="Search Here!"
        />
      </View>
      <View
        style={{ flexDirection: 'row', position: 'absolute', right: 8, gap: 4 }}
      >
        {searchInput ? (
          <>
            <TouchableOpacity
              onPress={() => {
                setSearchInput('');
              }}
            >
              <Ionicons
                name="close-circle-outline"
                size={SIZES.xLarge}
                color={COLORS.dark}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.searchBtn}
              onPress={() => handleSearch()}
            >
              <Text style={styles.textBtn}>Search</Text>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity
            style={styles.searchBtn}
            onPress={() => handleSearch()}
          >
            <Text style={styles.textBtn}>Search</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default SearchBox;
