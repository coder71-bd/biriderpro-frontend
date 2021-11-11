import axios from 'axios';
import { useEffect, useState } from 'react';
const useReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .get('https://guarded-sierra-90712.herokuapp.com/reviews')
      .then((response) => setReviews(response.data));
  }, []);
  return [reviews, setReviews];
};

export default useReviews;
