import axiosInstance from './axiosIntsance';
import { AxiosRequestConfig } from 'axios';

type Params = Record<string, string | number | boolean>;
type Data = Record<string, unknown>; // Assuming data can be any object

const api = {
    get: async <T>(url: string, params?: Params, config?: AxiosRequestConfig): Promise<T> => {
        const response = await axiosInstance.get(url, { params, ...config });
        return response.data;
    },

    post: async <T>(url: string, data: Data, config?: AxiosRequestConfig): Promise<T> => {
        const response = await axiosInstance.post(url, data, config);
        return response.data;
    },

    put: async <T>(url: string, data: Data, config?: AxiosRequestConfig): Promise<T> => {
        const response = await axiosInstance.put(url, data, config);
        return response.data;
    },

    delete: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
        const response = await axiosInstance.delete(url, config);
        return response.data;
    },
};

export default api;
