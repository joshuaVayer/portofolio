// lib/service.js
import axios from 'axios';

const domain = 'http://206.189.58.216';

const fetchFromCMS = async (path) => {
  const url = `${domain}/${path}`;
  const res = await axios.get(url);
  return res.data;
};

export default fetchFromCMS;
