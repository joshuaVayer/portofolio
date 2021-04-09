// lib/service.js
import axios from 'axios';

const domain = 'http://localhost:1337';

const fetchFromCMS = async (path) => {
  const url = `${domain}/${path}`;
  const res = await axios.get(url);
  return res.data;
};

export default fetchFromCMS;
