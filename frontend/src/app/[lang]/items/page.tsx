import { LocaleType } from "@/app/i18n/locales/locales.type";
import ItemsPage from "@/components/items/items-page";
import { BASE_URL } from "@/services/api-base";
import { EntitiesResponse } from "@/types/api/api.type";
import { ItemType } from "@/types/item/item.type";
import { CircularProgress } from "@mui/material";

const LIMIT = 9;

export default async function Items({ 
    params,
    searchParams
}: { 
    params: { lang: LocaleType }; 
    searchParams: { page?: string }; 
}) {
    const currentPage = Number(searchParams?.page) || 1;

    const response = await fetch(`${BASE_URL}/items?page=${currentPage}&limit=${LIMIT}`);
    const data: EntitiesResponse<ItemType> = await response.json();

    const { entities, metadata } = data;
    const lang = params.lang;

    if (!entities) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <CircularProgress color="primary" />
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            <ItemsPage
                lang={lang}
                items={entities}
                metadata={metadata}
            />
        </div>
    );
};

export const dynamic = "force-dynamic";
