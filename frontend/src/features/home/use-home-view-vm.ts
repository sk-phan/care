import { getLocalizedPath, urlConfigs } from "@/common/routes/url-configs";
import { useLocale } from "next-intl";
import { useCallback } from "react";

export const useHomeViewVM = () => {
    const locale = useLocale();
    const donatedItemsPath = getLocalizedPath(locale, urlConfigs.donatedItems.path);
    const createDonatedItemPath = getLocalizedPath(locale, urlConfigs.donatedItems.create.path);
    const getSelectedItemPath = useCallback((itemId: string) => {
        return `${getLocalizedPath(locale, urlConfigs.donatedItems.path)}/${itemId}`;
    }, [locale]);
    
    return {
        donatedItemsPath,
        createDonatedItemPath,
        getSelectedItemPath,
    }
}