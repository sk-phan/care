import api from "@/common/api/api";
import { EntitiesResponse } from "@/common/types/api/api.type";
import { ItemType } from "@/common/types/item/item.type";
import { useQuery } from "@tanstack/react-query";

const useGetDonatedItems = ({
    page,
    limit,
}: {
    page: number;
    limit: number;
}) => {
    return useQuery({
        queryKey: ["donated-items", page, limit],
        queryFn: () =>
            api.get<EntitiesResponse<ItemType>>("/items", {
                page,
                limit,
            }),
        staleTime: 30_000,
        gcTime: 1000 * 60 * 10,
    });
};

export default useGetDonatedItems;
