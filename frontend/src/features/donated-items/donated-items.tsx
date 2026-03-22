"use client";

import { ItemType } from "@/common/types/item/item.type";
import { Metadata } from "@/common/types/api/api.type";

import { Pagination } from "@mui/material";
import DonatedItemList from "./list/donated-item-list";
import { useTranslations } from "next-intl";
import { useDonatedItemsVM } from "./useDonatedItemsVM";

type DonatedItems = {
    items: ItemType[];
    metadata: Metadata;
}

const DonatedItems = ({ items, metadata } : DonatedItems) => {
    const t = useTranslations("donated-items.list");
    const { onChangePagination, page, totalPages, getSelectedItemPath } = useDonatedItemsVM({ metadata });

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
                {t("title")}
            </h2>
            <DonatedItemList items={items} getSelectedItemPath={getSelectedItemPath}/>
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