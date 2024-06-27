import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constant/styles';

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 165,
    marginTop: 20,
    marginBottom: 50,
  },
  imageContainer: {
    flex: 1,
    // width: 220,
  },
  image: {
    width: 200,
    height: 165,
    resizeMode: 'stretch',
    borderRadius: 20,
  },
  desc: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: COLORS.dark,
    opacity: 0.6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  textContainer: {},
  name: {
    fontFamily: 'bold',
    color: COLORS.wht,
  },
  difficult: {
    fontFamily: 'semiBold',
    color: COLORS.wht,
  },
  optionWrapper: {
    // justifyContent: 'center',
    // alignItems: 'flex-end',
    position: 'absolute',
    bottom: -10,
    right: 40,
    width: 150,
    // marginLeft: 20,
    marginBottom: 30,
    backgroundColor: COLORS.wht,
    borderRadius: 20,
    paddingHorizontal: 10,
    // paddingVertical: 2,
    elevation: 10,
  },
  option1: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginVertical: 10,
  },
  option2: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginVertical: 10,
  },
});

export default styles;
