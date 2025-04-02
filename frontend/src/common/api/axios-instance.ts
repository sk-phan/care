import axios from 'axios';
import { BASE_URL } from './api-base';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000, 
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.error('Error response:', error.response);
        return Promise.reject(error);
    }
);

export default axiosInstance;
