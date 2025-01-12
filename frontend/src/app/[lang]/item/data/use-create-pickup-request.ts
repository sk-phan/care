import { useMutation } from "@tanstack/react-query";

import { PickupRequestApi } from "@/services/pickup-request/pickup-request-api";
import { PickUpRequestCreateParams } from "@/types/pickup-request/pickup-request.type";

const useCreatePickupRequest = () => {
    const mutation = useMutation({
        mutationFn: (params: PickUpRequestCreateParams) => {
            return PickupRequestApi.create(params);
        }
    });

    return mutation;
};

export default useCreatePickupRequest;