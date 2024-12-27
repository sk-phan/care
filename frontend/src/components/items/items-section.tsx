"use client";

import { useTranslation } from "@/app/i18n";
import Items from './items';
import { ItemType } from "@/types/item/item.type";
import Heading from "../common/heading";

interface ItemsSectionProps {
    lang: string;
    items: ItemType[];
}

 const ItemsSection = ({ lang, items } : ItemsSectionProps) => {
    const { t }= useTranslation(lang);

    return (
        <section className="w-full mt-12 md:mt-16">
            <Heading title={t("items-section.available-items")}/>
            <Items items={items} />
        </section>
    )
}

export default ItemsSection;