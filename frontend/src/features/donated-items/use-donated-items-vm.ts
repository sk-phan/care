import { getLocalizedPath, urlConfigs } from "@/common/routes/url-configs";
import { useLocale } from "next-intl";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import useGetDonatedItems from "./hooks/use-get-donated-items";

const LIMIT = 9;
const DEFAULT_PAGE = 1;

export const useDonatedItemsVM = () => {
    const locale = useLocale();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    const currentPage = Number(searchParams.get("page")) || DEFAULT_PAGE;
    const { data, isLoading, isError } = useGetDonatedItems({
        page: currentPage,
        limit: LIMIT,
    });
   
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
        items: data?.entities ?? [],
        onChangePagination,
        page: data?.metadata.page ?? currentPage,
        totalPages: data?.metadata.totalPages ?? 1,
        getSelectedItemPath,
        isLoading,
        isError,
    }
}