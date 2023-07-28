import { useState, useEffect } from 'react';
import axios from 'axios';

const useApiRequest = (method, apiUrl) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const fetchData = async ( payload = null) => {
    try {
      let response;
      if (method === 'GET') {
        response = await axios.get(apiUrl);
      } else if (method === 'POST') {
        response = await axios.post(apiUrl, payload);
      }
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  return { data, isLoading, error,fetchData };
};

export default useApiRequest;
