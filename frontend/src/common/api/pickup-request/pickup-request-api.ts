import { PickUpRequestCreateParams } from "@/types/pickup-request/pickup-request.type";
import api from "../api";
import { ApiResponse } from "@/types/api/api.type";

export const PickupRequestApi = {
    create: async (data: PickUpRequestCreateParams) => {
        return api.post<ApiResponse<void>>('/pickupRequest', data);
    },
};