import { Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBox from "../components/Search/SearchBox";
import RecipeRow from "../components/Search/RecipeRow";
const SearchRecipeScreen = () => {
    recipeData: {}

    return (
        <SafeAreaView>
            <SearchBox />
            <RecipeRow />
        </SafeAreaView>
    );
}

export default SearchRecipeScreen;