import axios from 'axios';
// URL de mockapi
const URL = 'https://64bd1d3f2320b36433c76dc2.mockapi.io/Api/StockProducts';

const axiosInstance = axios.create({
    baseURL: URL,
})

export default axiosInstance;