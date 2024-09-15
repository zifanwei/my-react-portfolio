import { useState, useEffect } from 'react';

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + url)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error);
      });
  }, [url]);

  return { data, error };
};

export default useFetchData;
