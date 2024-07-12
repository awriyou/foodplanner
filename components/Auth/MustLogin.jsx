import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constant/styles";

const MustLogin = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.btnWrapper}>
        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate("Auth")}>
          <Text style={styles.textBtn}>   L O G I N   </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MustLogin;

const styles = StyleSheet.create({
  container: {
    width: SIZES.width,
    height: SIZES.height,
    position: 'absolute',
    backgroundColor: COLORS.dark,
    zIndex: 999,
    opacity: 0.9,
  },
  btnWrapper:{
    marginTop: SIZES.height / 2,
    alignItems: 'center',
  },
  loginBtn: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: COLORS.secondary,
    borderRadius: 20,
    alignItems: 'center',
  },
  textBtn: {
    fontFamily: 'bold',
    fontSize: SIZES.large,
    color: COLORS.wht,
    textAlign: 'center'
  }
});
