import { useMutation } from "@tanstack/react-query";

import { PickupRequestApi } from "@/common/api/pickup-request/pickup-request-api";
import { PickUpRequestCreateParams } from "@/common/types/pickup-request/pickup-request.type";

const useCreatePickupRequest = ({
    onSuccess,
    onError,
}: {
    onSuccess: () => void;
    onError: () => void;
}) => {
    const mutation = useMutation({
        mutationFn: (params: PickUpRequestCreateParams) => {
            return PickupRequestApi.create(params);
        },
        onSuccess,
        onError,
    });

    return mutation;
};

export default useCreatePickupRequest;