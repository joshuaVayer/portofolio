// lib/service.js
import axios from 'axios';

const domain = 'https://serene-ravine-87571.herokuapp.com';

const fetchFromCMS = async (path) => {
  const url = `${domain}/${path}`;
  const res = await axios.get(url);
  return res.data;
};

export default fetchFromCMS;
