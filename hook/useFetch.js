import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { useEnvironment } from 'react-native-dotenv';

const useFetch = () => {
  // const env = useEnvironment()
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      
      // const response = await axios.get(`${env.ep}api/recipes/`);
      const response = await axios.get('http://192.168.1.7:3000/api/recipes/');
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch};
};

export default useFetch;
