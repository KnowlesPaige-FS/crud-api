import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL === 'production' ? '/v1/app' : 'http://localhost:4003/v1/app';
axios.defaults.baseURL = baseURL;

export default axios;
