import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constant/styles";

const styles = StyleSheet.create({
  broByContainer: {
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 120,
  },
  broByText: {
    fontFamily: 'bold',
    fontSize: SIZES.large,
    color: COLORS.primary,
  },
});

export default styles