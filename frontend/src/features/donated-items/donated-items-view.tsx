"use client";

import { Pagination } from "@mui/material";
import Loader from "@/common/components/loading/loader";
import DonatedItemList from "./list/donated-item-list";
import { useTranslations } from "next-intl";
import { useDonatedItemsVM } from "./use-donated-items-vm";
import DonatedItemsEmptyState from "./donated-items-empty-state";

const DonatedItemsView = () => {
    const t = useTranslations("donated-items.list");
    const {
        onChangePagination,
        page,
        totalPages,
        getSelectedItemPath,
        items,
        isLoading,
        isError,
    } = useDonatedItemsVM();

    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return <div>Failed to load donated items.</div>;
    }

    if (!items || items.length === 0) {
        return <DonatedItemsEmptyState />;
    }

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

export default DonatedItemsView;