import { Image, Text, View } from 'react-native';
import React from 'react';
import styles from './profilehead.style';
import { SHADOWS } from '../../constant/styles';
const ProfileHead = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={require('../../assets/image/profile besar.png')}
          />
        </View>
        <Text style={styles.name}>Ario Febri</Text>
        <View style={styles.detailWrapper}>
          <Text style={styles.desc}>Phone Number</Text>
          <Text style={styles.detail}>+6287776241589</Text>
        </View>
        <View style={styles.detailWrapper}>
          <Text style={styles.desc}>Username</Text>
          <Text style={styles.detail}>ariooofeb</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileHead;
