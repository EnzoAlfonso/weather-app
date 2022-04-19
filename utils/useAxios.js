import {useState, useEffect} from 'react';
import axios from 'axios';

const useAxios = url => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setResponse(response.data);
      })
      .catch(err => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return {response, error, loading};
};

export default useAxios;
