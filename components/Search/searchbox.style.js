import { StyleSheet } from "react-native";
import {COLORS, SIZES, SHADOWS} from '../../constant/styles'


const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // alignContent: 'center',
    // backgroundColor: COLORS.wht,
    backgroundColor: COLORS.wht,
    elevation: 10,
    opacity: 0.9,
    borderRadius: SIZES.medium,
    marginVertical: 35,
    marginHorizontal: 50,
    height: 55,
    paddingRight: 10,
  },
  searchIcon: {
    marginHorizontal: 10,
    color: COLORS.dark,
  },
  searchWrapper: {
    flex: 1,
    // marginRight: SIZES.small,
    borderRadius: SIZES.small,
  },
  searchInput: {
    fontFamily: 'bold',
    fontSize: SIZES.medium,
    paddingHorizontal: SIZES.small,
  },

  searchBtn: {
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.medium,
    paddingVertical: 5,
    // paddingHorizontal: 1
  },
  textBtn: {
    fontFamily: 'bold',
    fontSize: SIZES.small,
    color: COLORS.wht,
  },
});

export default styles