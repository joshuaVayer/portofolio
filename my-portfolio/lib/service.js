// lib/service.js
import axios from 'axios';

const domain = 'https://mystrapi-backend.herokuapp.com';

const fetchFromCMS = async (path) => {
  const url = `${domain}/${path}`;
  const res = await axios.get(url);
  return res.data;
};

export default fetchFromCMS;
