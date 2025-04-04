import { PickUpRequestCreateParams } from "@/common/types/pickup-request/pickup-request.type";
import api from "../api";
import { ApiResponse } from "@/common/types/api/api.type";

export const PickupRequestApi = {
    create: async (data: PickUpRequestCreateParams) => {
        return api.post<ApiResponse<void>>('/pickupRequest', data);
    },
};