"use client";

import ItemList from "./item-list";
import Tabs from "../common/c-tabs";
import { ItemType } from "@/types/item/item.type";
import { LocaleType } from "@/app/i18n/locales/locales.type";
import { useTranslation } from "@/app/i18n";
import { Pagination } from "@mui/material";
import { Metadata } from "@/types/api/api.type";
import { usePathname, useRouter } from "next/navigation";

interface ItemsPage {
    lang: LocaleType;
    items: ItemType[];
    metadata: Metadata;
}

const ItemsPage = ({ lang, items, metadata } : ItemsPage) => {
    const { t } = useTranslation(lang);
    const pathname = usePathname();
    const searchParams = window.location.search;
    const { replace } = useRouter();

    const { page, totalPages } = metadata;

    const onChangePagination = (pageNumber: number) => {
        const params = new URLSearchParams(searchParams);
        params.set('page', pageNumber.toString());
        replace(`${pathname}?${params.toString()}`);
    };

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
            <ItemList items={items}/>
            <div className="flex items-center justify-center mt-4">
                <Pagination 
                    count={totalPages} 
                    page={page} 
                    color="primary" 
                    onChange={(_, pageNumber) => onChangePagination(pageNumber)}
                />
            </div>
        </div>
    )
}

export default ItemsPage;