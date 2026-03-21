"use client";

import useLocale from "@/app/i18n/use-locale";

import useCommonButtonStyles from "@/common/hooks/styles/use-common-button-styles";
import { getLocalizedPath, urlConfigs } from "@/common/routes/url-configs";
import { ItemType } from "@/common/types/item/item.type";

import Heading from "@/common/components/heading/heading";
import { Button } from "@mui/material";
import DonatedItemList from "@/features/donated-items/list/donated-item-list";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

interface ItemsSectionProps {
    items: ItemType[];
}

 const ItemsSection = ({ items } : ItemsSectionProps) => {
    const { linkButton } = useCommonButtonStyles();

    const { locale } = useLocale();
    const t = useTranslations("home.items-section");
    const router = useRouter();

    return (
        <section className="w-full mt-12 md:mt-16">
            <div className="flex justify-between items-center">
                <Heading level={2} heading={t("available-items")}/>
                <Button 
                    variant="text" 
                    onClick={() => router.push(getLocalizedPath(locale, urlConfigs.donatedItems.path))}
                    sx={linkButton}
                    >
                        {t("see-all")}
                </Button>
            </div>
            <DonatedItemList items={items} />
        </section>
    )
}

export default ItemsSection;