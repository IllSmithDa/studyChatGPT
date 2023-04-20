/* eslint-disable quote-props */
import axios from 'axios';

const nodeServerActive = false;

const BASE_URL = nodeServerActive ? 'http://localhost:5000' : 'https://api.openai.com/v1';
const VANILLA_KEY = import.meta.env.VITE_VANILLA_KEY;

// https://theologianspen.com
export default axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': `Bearer ${VANILLA_KEY}`,
    'Content-Type': 'application/json',
  }
});
