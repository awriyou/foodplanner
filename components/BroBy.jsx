import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './broby.style';
import CategoryCardView from './CategoryCardView';
import { COLORS, SIZES } from '../constant/styles';
import axios from 'axios';
import useFetch from '../hook/useFetch';

const BroBy = () => {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState([]);
  const fetchCategory = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${apiUrl}api/categories/`);
      setCategory(response.data);
      // console.log(response.data);
    } catch (error) {
      console.log('Error', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  return (
    <View style={styles.broByContainer}>
      <Text style={styles.broByText}>Browse by category</Text>
      {isLoading ? ( // Display loading indicator while fetching data
        <View>
          <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
        </View>
      ) : (
        <View
          style={{
            marginTop: 10,
            alignItems: 'center',
          }}
        >
          <FlatList
            scrollEnabled
            data={category}
            renderItem={({ item }) => <CategoryCardView category={item} />}
            contentContainerStyle={{}}
          />
        </View>
      )}
    </View>
  );
};

export default BroBy;

