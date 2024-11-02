import axiosInstance from './axiosIntsance';
import { AxiosRequestConfig } from 'axios';

const api = {
    get: async <T>(url: string, params?: any, config?: AxiosRequestConfig): Promise<T> => {
        const response = await axiosInstance.get(url, { params, ...config });
        return response.data;
    },

    post: async <T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> => {
        const response = await axiosInstance.post(url, data, config);
        return response.data;
    },

    put: async <T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> => {
        const response = await axiosInstance.put(url, data, config);
        return response.data;
    },

    delete: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
        const response = await axiosInstance.delete(url, config);
        return response.data;
    },
};

export default api;
