import { useMutation } from "@tanstack/react-query";

import { ItemsApi } from "@/common/api/items/items-api";
import { ItemCreateParams } from "@/common/types/item/item.type";

const useCreateDonatedItem = ({
    onSuccess,
    onError,
}: {
    onSuccess: () => void;
    onError: () => void;
}) => {
    const mutation = useMutation({
        mutationFn: (itemCreateParams: ItemCreateParams) => {
            return ItemsApi.create(itemCreateParams);
        },
        onSuccess,
        onError,
    });

    return mutation; 
};

export default useCreateDonatedItem;