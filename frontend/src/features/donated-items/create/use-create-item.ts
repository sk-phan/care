import { useMutation } from "@tanstack/react-query";

import { ItemsApi } from "@/common/api/items/items-api";
import { ItemCreateParams } from "@/common/types/item/item.type";

const useCreateItem = () => {
    const mutation = useMutation({
        mutationFn: (itemCreateParams: ItemCreateParams) => {
            return ItemsApi.create(itemCreateParams);
        }
    });

    return mutation;
};

export default useCreateItem;