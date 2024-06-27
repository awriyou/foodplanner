import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constant/styles";

const styles = StyleSheet.create({
  broByContainer: {
    marginHorizontal: 20,
    flex: 1,
    marginBottom: 100,
  },
  broByText: {
    fontFamily: 'bold',
    fontSize: SIZES.large,
    color: COLORS.primary,
  },
});

export default styles