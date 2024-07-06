import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBox from '../components/Search/SearchBox';
import RecipeRow from '../components/Search/RecipeRow';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { SIZES } from '../constant/styles';
import useFetch from '../hook/useFetch';
import { useRoute } from '@react-navigation/native';

const SearchRecipeScreen = () => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [categoryData, setCategoryData] = useState(null); // State for category data

  const route = useRoute();
  const { category } = route.params;

  useEffect(() => {
    const fetchData = async () => {
      if (category) {
        try {
          const response = await axios.get(
            `http://192.168.18.5:3000/api/recipes/categories/${category._id}`
          );
          setCategoryData(response.data);
        } catch (error) {
          console.log('Failed to get recipe by category', error);
        }
      }
    };

    fetchData();
  }, [category, searchInput]); // Re-fetch on category change

  const { data } = useFetch(); // Use data from useFetch hook

  async function handleSearch() {
    try {
      const response = await axios.get(
        `http://192.168.18.5:3000/api/recipes/search/${searchInput}`
      );
      setSearchResult(response.data);
    } catch (error) {
      console.log('Failed to get recipe by search', error);
    }
  }

  return (
    <SafeAreaView style={{}}>
      <SearchBox
        query={searchInput}
        setQuery={setSearchInput}
        handleSearch={handleSearch}
      />
      <RecipeRow
        data={
          searchInput // Prioritize search results
            ? searchResult
            : category // Use category data if available
            ? categoryData
            : data // Fallback to default data from useFetch
        }
      />
    </SafeAreaView>
  );
};

export default SearchRecipeScreen;