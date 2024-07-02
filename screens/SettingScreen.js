import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SHADOWS, SIZES } from '../constant/styles';

const SettingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerWrapper}>
        <TouchableOpacity style={styles.buttonWrapper} onPress={() => {}}>
          <Ionicons name="alert-circle" size={30} color={COLORS.primary} />
          <View style={styles.descIcon}>
            <View>
              <Text style={styles.buttonText}>About</Text>
              <Text style={styles.buttonDescText}>V.1.0</Text>
            </View>
            <Ionicons
              name="chevron-forward-outline"
              size={30}
              color={COLORS.dark}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.containerWrapper}>
        <TouchableOpacity style={styles.buttonWrapper} onPress={() => {}}>
          <Ionicons name="language" size={30} color={COLORS.primary} />
          <View style={styles.descIcon}>
            <View>
              <Text style={styles.buttonText}>Change Language</Text>
              <Text style={styles.buttonDescText}>Indonesia</Text>
            </View>
            <Ionicons
              name="chevron-forward-outline"
              size={30}
              color={COLORS.dark}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  containerWrapper: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginVertical: 3,
    borderRadius: 6,
    ...SHADOWS.small,
    backgroundColor: COLORS.wht,
  },
  buttonWrapper: {
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  descIcon: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
    marginLeft: 15,
  },

  buttonText: {
    marginTop: 2,
    fontFamily: 'bold',
    color: COLORS.primary,
    fontSize: SIZES.large - 2,
  },
  buttonDescText:{
    fontFamily: 'regular',
    color: COLORS.primary,
  },
});
