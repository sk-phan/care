"use client";

import { useTranslation } from "@/app/i18n";
import Items from "./Items";
import { ItemType } from "@/types/item/item.type";

interface ItemsSectionProps {
    lang: string;
    items: ItemType[];
}

 const ItemsSection = ({ lang, items } : ItemsSectionProps) => {
    const { t }= useTranslation(lang);

    return (
        <section className="w-full mt-12 md:mt-16">
            <div>
                <h2 
                className="text-3xl md:text-5xl font-semibold mb-8">
                    {t("items-section.available-items")}
                </h2>
            </div>
            <Items items={items} />
        </section>
    )
}

export default ItemsSection;