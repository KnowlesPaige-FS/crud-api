import { REACT_APP_API_BASE_URL_DEV, REACT_APP_API_BASE_URL_PROD } from '@env';
import axios from 'axios';


const baseURL = process.env.NODE_ENV === 'production' ? REACT_APP_API_BASE_URL_PROD : REACT_APP_API_BASE_URL_DEV;
axios.defaults.baseURL = baseURL;

export default axios;


