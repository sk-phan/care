import { ItemCreateParams, ItemType } from "@/common/types/item/item.type";
import api from "../api";

export const ItemsApi = {
    getAll: async () => {
        return api.get<ItemType[]>('/items');
    },
    getById: async (id: string) => {
        return api.get<ItemType>(`/items/${id}`);
    },
    create: async (data: ItemCreateParams) => {
        return api.post<ItemType>('/items', data);
    },
    update: async (id: string, item: ItemType) => {
        return api.put<ItemType>(`/items/${id}`, item);
    },
    delete: async (id: string) => {
        return api.delete<void>(`/items/${id}`);
    },
};