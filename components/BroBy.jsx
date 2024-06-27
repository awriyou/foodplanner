import { View, Text, FlatList } from 'react-native';
import React from 'react';
import styles from './broby.style';
import CategoryCardView from './CategoryCardView';
import { SIZES } from '../constant/styles';

const BroBy = () => {
    const categoryData = [
      {
        imageUrl:
          'https://images.unsplash.com/photo-1611171711912-e3f6b536f532?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Ikan',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Ayam',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1615937691194-97dbd3f3dc29?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Sapi',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1615937691194-97dbd3f3dc29?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Kambing',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1615937691194-97dbd3f3dc29?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Temp',
      },
      {
        imageUrl:
          'https://images.unsplash.com/photo-1615937691194-97dbd3f3dc29?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Tahu',
      },
    ];
  return (
    <View style={styles.broByContainer}>
      <Text style={styles.broByText}>Browse by category</Text>
      <View style={{ marginTop: 20 }}>
        <FlatList
          scrollEnabled
          data={categoryData}
          renderItem={({ item }) => <CategoryCardView item={item} />}
          contentContainerStyle={{}}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default BroBy;
