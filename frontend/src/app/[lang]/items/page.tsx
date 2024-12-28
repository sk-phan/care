import { LocaleType } from "@/app/i18n/locales/locales.type";
import ItemsPage from "@/components/items/items-page";
import { BASE_URL } from "@/services/api-base";
import { ItemType } from "@/types/item/item.type";

export default async function Items({ params } : {params: { lang: LocaleType };}) {
    const response = await fetch(BASE_URL + '/items');
    const data = await response.json();

    const items: ItemType[] = data.entities || [];
    const lang = params.lang;
    
    return (
        <div className="min-h-screen">
            <ItemsPage
            lang={lang}
            items={items}
            />
        </div>
    )
};
