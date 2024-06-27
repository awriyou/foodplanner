import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constant/styles';

const styles = StyleSheet.create({
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

export default styles;
