import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constant/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    // aspectRatio: 1,
    width: SIZES.width,
    height: 300,
    resizeMode: 'cover',
  },
  containerInfoWrapper: {
    marginTop: -100,
    // width: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
    // position: 'relative',
    // bottom: -910,
  },
  infoWrapper: {
    // width: 300,
    backgroundColor: COLORS.wht,
    borderRadius: SIZES.small,
    marginHorizontal: 40,
    elevation: 40,
  },
  titleIconWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  title: {
    fontFamily: 'bold',
    fontSize: SIZES.medium - 2,
    color: COLORS.primary,
  },
  iconWrapper: {
    flexDirection: 'row',
  },
  detailWrapper: {
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  detail: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 20,
    marginVertical: 4,
  },
  detailText: {
    fontFamily: 'bold',
    fontSize: SIZES.small,
    color: COLORS.gray,
  },
  likedBy: {
    position: 'absolute',
    bottom: 5,
    right: 10,
  },
  likedByText: {
    fontFamily: 'bold',
    fontSize: SIZES.small,
    color: COLORS.gray,
  },

  descWrapper: {
    // flex: 1,
    // width: 300,
    marginTop: 10,
    marginHorizontal: 40,
    backgroundColor: COLORS.wht,
    borderRadius: SIZES.small,
    elevation: 20,
    paddingHorizontal: 10,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  toggle: {
    paddingVertical: 7,
    paddingHorizontal: 15,
    borderRadius: 10,
    // marginHorizontal: 5,
    marginVertical: 10,
    elevation: 10,
  },
  toggleText: {
    fontFamily: 'bold',
    color: COLORS.gray,
  },
  list: {
    marginTop: 10,
    marginBottom: 100,
    paddingVertical: 10,
    // flexBasis: 'auto'
  },
  ingredients: {
    flex: 1 ,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
    paddingRight: 45,
    marginVertical: 2,
  },
  gram: {
    fontFamily: 'bold',
    fontSize: SIZES.small + 3,
  },
  infoList: {
    fontFamily: 'semiBold',
    color: COLORS.primary,
    textAlign: 'justify',
  },
});

export default styles;
