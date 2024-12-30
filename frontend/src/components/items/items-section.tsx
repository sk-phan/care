"use client";

import { useTranslation } from "@/app/i18n";
import ItemList from './item-list';
import { ItemType } from "@/types/item/item.type";
import Heading from "../common/heading";
import { Button, } from "@mui/material";
import { urlConfigs } from "@/routing/url-configs";
import useLocale from "@/app/i18n/use-locale";
import Link from "next/link";
import useCommonButtonStyles from "@/hooks/styles/use-common-button-styles";

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
                <Heading title={t("items-section.available-items")}/>
                <Button 
                    variant="text" 
                    LinkComponent={Link} 
                    href={urlConfigs.Items[locale]}
                    sx={linkButton}
                    >
                        See all
                </Button>
            </div>
            <ItemList items={items} />
        </section>
    )
}

export default ItemsSection;