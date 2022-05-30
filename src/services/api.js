import axios from 'axios';

const api = axios.create({
  baseURL: 'https://62904f3627f4ba1c65b6f6bc.mockapi.io/',
});

export default api;
