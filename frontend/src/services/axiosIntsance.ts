// src/axiosInstance.ts

import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3003',
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
        return response.data;
    },
    (error) => {
        console.error('Error response:', error.response);
        return Promise.reject(error);
    }
);

export default axiosInstance;
