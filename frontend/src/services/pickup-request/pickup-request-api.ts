import { PickUpRequestPostParams } from "@/types/pickup-request/pickup-request.type";
import api from "../api";
import { ApiResponse } from "@/types/api/api.type";

export const pickupRequest = {
    create: async (data: PickUpRequestPostParams) => {
        return api.post<ApiResponse<void>>('/email', data);
    },
};