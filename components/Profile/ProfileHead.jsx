import { Image, Text, View } from 'react-native';
import React from 'react';
import styles from './profilehead.style';
import { SHADOWS } from '../../constant/styles';

const ProfileHead = ({ data }) => {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  const maxLength = 15;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.image}
            source={require('../../assets/image/profile besar.png')}
          />
        </View>
        <Text style={styles.name}>{data ? data.username : '--'}</Text>
        <View style={styles.detailWrapper}>
          <Text style={styles.desc}>Phone Number</Text>
          <Text style={styles.detail} numberOfLines={1}>
            {'--'}
          </Text>
        </View>
        <View style={styles.detailWrapper}>
          <Text style={styles.desc}>Email</Text>
          <Text style={styles.detail}>
            {data ? truncateText(data.email, maxLength) : '--'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileHead;
