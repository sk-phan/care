"use client";

import Link from "next/link";
import { useTranslation } from "@/app/i18n";

import useLocale from "@/app/i18n/use-locale";
import useCommonButtonStyles from "@/common/hooks/styles/use-common-button-styles";
import { urlConfigs } from "@/common/routing/url-configs";
import { ItemType } from "@/common/types/item/item.type";

import Heading from "@/common/components/heading";
import { Button } from "@mui/material";
import DonatedItemList from "@/features/donated-items/list/donated-item-list";

interface ItemsSectionProps {
    items: ItemType[];
}

 const ItemsSection = ({ items } : ItemsSectionProps) => {
    const { linkButton } = useCommonButtonStyles();

    const { locale } = useLocale();
    const { t }= useTranslation(locale);
    
    return (
        <section className="w-full mt-12 md:mt-16">
            <div className="flex justify-between items-center">
                <Heading level={2} title={t("items-section.available-items")}/>
                <Button 
                    variant="text" 
                    LinkComponent={Link} 
                    href={urlConfigs.donatedItems[locale]}
                    sx={linkButton}
                    >
                        {t('items-section.see-all')}
                </Button>
            </div>
            <DonatedItemList items={items} />
        </section>
    )
}

export default ItemsSection;