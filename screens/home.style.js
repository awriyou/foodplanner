import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constant/styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.wht,
    flex: 1,
  },
  headingContainer: {
    width: SIZES.width - 80,
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginHorizontal: 20,
    backgroundColor: COLORS.gray3,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  heading1: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginLeft: 4,
  },
  name: {
    fontFamily: 'semiBold',
    fontSize: 18,
  },
  heading2: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  midContainer: {
    paddingTop: 30,
    marginHorizontal: 10,
    marginBottom: 30,
  },
  imageMid: {
    position: 'absolute',
    left: 5,
    zIndex: -1,
  },
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
    marginVertical: SIZES.medium,
    marginHorizontal: 50,
    height: 55,
  },
  searchIcon: {
    marginHorizontal: 10,
    color: COLORS.dark,
  },
  searchWrapper: {
    flex: 1,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
  },
  searchInput: {
    fontFamily: 'bold',
    fontSize: SIZES.medium,
    width: '100%',
    height: '100%',
    paddingHorizontal: SIZES.small,
  },
  popRecipeContainer: {
    marginHorizontal: 20,
    marginTop: SIZES.small,
  },
  popRecipeText: {
    fontFamily: 'bold',
    fontSize: SIZES.large,
    color: COLORS.primary,
  },

});

export default styles