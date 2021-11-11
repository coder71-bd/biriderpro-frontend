import axios from 'axios';
import { useEffect, useState } from 'react';
const useBikes = () => {
  const [bikes, setBikes] = useState([]);
  useEffect(() => {
    axios
      .get('https://guarded-sierra-90712.herokuapp.com/bikes')
      .then((response) => setBikes(response.data));
  }, []);
  return [bikes, setBikes];
};

export default useBikes;
