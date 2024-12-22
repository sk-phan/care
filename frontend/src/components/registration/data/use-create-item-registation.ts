import { useMutation } from "@tanstack/react-query";
import { ItemCreateParams } from "shared/src/types/item.type";

import { ItemsApi } from "@/services/items/items-api";

const useCreateItemRegistration = () => {
    const mutation = useMutation({
        mutationFn: (itemCreateParams: ItemCreateParams) => {
            return ItemsApi.create(itemCreateParams);
        }
    });

    return mutation;
};

export default useCreateItemRegistration;