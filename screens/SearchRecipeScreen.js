import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBox from '../components/Search/SearchBox';
import RecipeRow from '../components/Search/RecipeRow';
import { useState } from 'react';
import axios from 'axios';
import { SIZES } from '../constant/styles';
import useFetch from '../hook/useFetch';
const SearchRecipeScreen = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const { data } = useFetch();
  async function handleSearch() {
    try {
      const response = await axios.get(
        `http://192.168.18.5:3000/api/recipes/search/${searchInput}`
      );
      // console.log(response.data);
      setSearchResult(response.data);
    } catch (error) {
      console.log('Failed to get recipe', error);
    }
  }

  return (
    <SafeAreaView style={{}}>
      <SearchBox
        query={searchInput}
        setQuery={setSearchInput}
        handleSearch={handleSearch}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <RecipeRow data={!searchResult ? data : searchResult} />
    </SafeAreaView>
  );
};

export default SearchRecipeScreen;
