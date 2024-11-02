import api from "./api";

export const ItemsApi = {
    getAll: async (params?: any) => {
        return api.get<Item[]>('/items', params);
    },
    getById: async (id: string) => {
        return api.get<Item>(`/items/${id}`);
    },
    create: async (data: ItemPostParams) => {
        return api.post<Item>('/items', data);
    },
    update: async (id: string, item: Item) => {
        return api.put<Item>(`/items/${id}`, item);
    },
    delete: async (id: string) => {
        return api.delete<void>(`/items/${id}`);
    },
};