import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constant/styles';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.wht,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: 'extraBold',
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
  },
  imageBg: {
    position: 'absolute',
    top: SIZES.height / 2 -200,
    left: SIZES.width /2 - 100,
    zIndex: -1,
    width: 200,
    height: 200,
  },
  calendarWrapper: {
    width: '100%',
    alignItems: 'center',
    opacity: 0.5,
    backgroundColor: COLORS.wht,
    elevation: 10,
    borderRadius: 20,
    paddingTop: 5,
    paddingBottom: 10,
  },
});

export default styles;
