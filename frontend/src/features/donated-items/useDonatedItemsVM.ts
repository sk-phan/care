import { Metadata } from "@/common/types/api/api.type";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const useDonatedItemsVM = ({
    metadata,
}: {
    metadata: Metadata;
}) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    const { page, totalPages } = metadata;
   
    const onChangePagination = useCallback((pageNumber: number) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        replace(`${pathname}?${params.toString()}`);
    }, [pathname, searchParams, replace]);

    return {
        onChangePagination,
        page,
        totalPages,
    }
}