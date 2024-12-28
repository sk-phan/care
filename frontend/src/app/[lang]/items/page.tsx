import { LocaleType } from "@/app/i18n/locales/locales.type";
import ItemsPage from "@/components/items/items-page";
import { BASE_URL } from "@/services/api-base";
import { EntitiesResponse } from "@/types/api/api.type";
import { ItemType } from "@/types/item/item.type";
import { CircularProgress } from "@mui/material";
import { Suspense } from "react";

export default async function Items({ 
    params,
    searchParams
}: { 
    params: { lang: LocaleType }; 
    searchParams: { page?: string }; 
}) {
    const currentPage = Number(searchParams?.page) || 1;

    // Fetch paginated items from the backend
    const response = await fetch(`${BASE_URL}/items?page=${currentPage}&limit=9`, { cache: "no-cache" });
    const data: EntitiesResponse<ItemType> = await response.json();

    const { entities, metadata } = data;
    const lang = params.lang;

    return (
        <div className="min-h-screen">
            <Suspense key={currentPage} fallback={<CircularProgress color="primary" />}>
                <ItemsPage
                    lang={lang}
                    items={entities}
                    metadata={metadata}
                />
            </Suspense>
        </div>
    );
}
