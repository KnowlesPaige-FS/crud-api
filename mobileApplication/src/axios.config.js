import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:4003/v1/app'  
  : 'https://your-production-url.com'; 

const instance = axios.create({
  baseURL: baseURL
});

export default instance;
