import { getLocalizedPath, urlConfigs } from "@/common/routes/url-configs";
import { useLocale } from "next-intl";

export const useHomeViewVM = () => {
    const locale = useLocale();
    const donatedItemsPath = getLocalizedPath(locale, urlConfigs.donatedItems.path);
    const createDonatedItemPath = getLocalizedPath(locale, urlConfigs.donatedItems.create.path);

    return {
        donatedItemsPath,
        createDonatedItemPath,
    }
}