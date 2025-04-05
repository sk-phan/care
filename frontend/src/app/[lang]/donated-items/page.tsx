import { LocaleType } from "@/app/i18n/locales/locales.type";
import { BASE_URL } from "@/common/api/api-base";
import { EntitiesResponse } from "@/common/types/api/api.type";
import { ItemType } from "@/common/types/item/item.type";
import { CircularProgress } from "@mui/material";

import DonatedItems from "@/features/donated-items/donated-items";

const LIMIT = 9;

interface Props {
    params: Promise<{ lang: LocaleType }>;
    searchParams: Promise< { page?: string }>;
}

export default async function Items(props: Props) {
    const params = await props.params;
    const searchParams = await props.searchParams;

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
        <DonatedItems
            lang={lang}
            items={entities}
            metadata={metadata}
        />
    );
};

export const dynamic = "force-dynamic";
