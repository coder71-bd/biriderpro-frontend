import axios from 'axios';
import { useEffect, useState } from 'react';
const useOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
      .get('https://guarded-sierra-90712.herokuapp.com/orders')
      .then((response) => setOrders(response.data));
  }, []);
  return [orders, setOrders];
};

export default useOrders;
