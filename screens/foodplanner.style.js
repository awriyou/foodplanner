import { StyleSheet } from "react-native";
import {COLORS, SIZES} from '../constant/styles'
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
});

export default styles