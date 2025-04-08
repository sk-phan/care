import { useMutation } from "@tanstack/react-query";

import { ItemsApi } from "@/common/api/items/items-api";
import { ItemCreateParams } from "@/common/types/item/item.type";

const useCreateDonatedItem = () => {
    const mutation = useMutation({
        mutationFn: (itemCreateParams: ItemCreateParams) => {
            return ItemsApi.create(itemCreateParams);
        }
    });

    return { execute: mutation.mutate, loadingState: mutation.status, error: mutation.error }; 
};

export default useCreateDonatedItem;