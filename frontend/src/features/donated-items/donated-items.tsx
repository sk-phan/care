"use client";

import { usePathname, useRouter } from "next/navigation";

import { ItemType } from "@/common/types/item/item.type";
import { LocaleType } from "@/app/i18n/locales/locales.type";
import { useTranslation } from "@/app/i18n";
import { Metadata } from "@/common/types/api/api.type";

import { Pagination } from "@mui/material";
import DonatedItemList from "./list/donated-item-list";

type DonatedItems = {
    lang: LocaleType;
    items: ItemType[];
    metadata: Metadata;
}

const DonatedItems = ({ lang, items, metadata } : DonatedItems) => {
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
        <div className="min-h-screen">
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
            <DonatedItemList items={items}/>
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

export default DonatedItems;