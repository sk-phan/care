import { getLocalizedPath, urlConfigs } from "@/common/routes/url-configs";
import { Metadata } from "@/common/types/api/api.type";
import { useLocale } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export const useDonatedItemsVM = ({
    metadata,
}: {
    metadata: Metadata;
}) => {
    const locale = useLocale();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    const { page, totalPages } = metadata;
   
    const onChangePagination = useCallback((pageNumber: number) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        replace(`${pathname}?${params.toString()}`);
    }, [pathname, searchParams, replace]);

    const getSelectedItemPath = useCallback((itemId: string) => {
        const selectedPath = getLocalizedPath(locale, urlConfigs.donatedItems.path);
        return `${selectedPath}/${itemId}`;
    }, [locale]);

    return {
        onChangePagination,
        page,
        totalPages,
        getSelectedItemPath
    }
}