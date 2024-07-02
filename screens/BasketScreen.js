import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ListBody from "../components/Basket/ListBody";
import AddButton from "../components/Basket/AddButton";

const BasketScreen = () => {
    return (
      <SafeAreaView style={{ flex: 1, }}>
        <ListBody />
        {/* <AddButton /> */}
      </SafeAreaView>
    );
}

export default BasketScreen;