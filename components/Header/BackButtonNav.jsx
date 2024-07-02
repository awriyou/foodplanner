import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../constant/styles';

const BackButtonNav = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginRight: 20, }}>
      <Ionicons name="arrow-back" size={24} color={COLORS.primary} />
    </TouchableOpacity>
  );
};

export default BackButtonNav;
