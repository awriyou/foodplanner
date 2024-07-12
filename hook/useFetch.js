import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = () => {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      
      // const response = await axios.get(`${env.ep}api/recipes/`);
      const response = await axios.get(`${apiUrl}api/recipes/`);
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
