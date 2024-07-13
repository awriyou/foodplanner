import { StyleSheet } from 'react-native';
import { COLORS, SIZES, SHADOWS } from '../../constant/styles';

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  header: {
    alignItems: 'center',
  },
  imageWrapper: {
    borderRadius: 75,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.gray2,
    borderWidth: 2,
    width: 130,
    height: 130,
    elevation: 80,
  },
  image: {
    width: 130,
    height: 130,
    resizeMode: 'contain',
  },
  name: {
    fontFamily: 'bold',
    fontSize: 30,
    color: COLORS.dark,
    // marginVertical: 8,
    marginTop: 8,
    marginBottom: 4,
    textAlign: 'center',
    letterSpacing: 3,
  },
  detailWrapper: {
    width: SIZES.width / 2 + 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  desc: {
    fontFamily: 'regular',
    color: COLORS.primary,
    fontSize: SIZES.large - 2,
    marginTop: 4,
    marginBottom: 8,
  },
  detail: {
    fontSize: SIZES.medium,
    fontFamily: 'bold',
    color: COLORS.primary,
    marginTop: 4,
    marginBottom: 8,
  },
});

export default styles;
