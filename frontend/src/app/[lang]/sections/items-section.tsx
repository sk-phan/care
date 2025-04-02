"use client";

import Link from "next/link";
import { useTranslation } from "@/app/i18n";

import useLocale from "@/app/i18n/use-locale";
import useCommonButtonStyles from "@/common/hooks/styles/use-common-button-styles";
import { urlConfigs } from "@/routing/url-configs";
import { ItemType } from "@/types/item/item.type";

import ItemList from "../items/list/item-list";
import Heading from "@/common/components/heading";
import { Button } from "@mui/material";

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
                    href={urlConfigs.Items[locale]}
                    sx={linkButton}
                    >
                        {t('items-section.see-all')}
                </Button>
            </div>
            <ItemList items={items} />
        </section>
    )
}

export default ItemsSection;