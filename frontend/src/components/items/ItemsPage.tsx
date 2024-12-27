"use client";

import Items from "./Items";
import Tabs from "../common/Tabs";
import { ItemType } from "@/types/item/item.type";
import { LocaleType } from "@/app/i18n/locales/locales.type";
import { useTranslation } from "@/app/i18n";

interface ItemsPage {
    lang: LocaleType;
    items: ItemType[];
}

const ItemsPage = ({ lang, items } : ItemsPage) => {
    const { t } = useTranslation(lang);

    return (
        <div>
            <h2
                className="
                text-5xl 
                font-medium 
                text-center 
                mb-8
                "
            >
                {t('Items')}
            </h2>
            <Tabs />
            <Items items={items}/>
        </div>
    )
}

export default ItemsPage;