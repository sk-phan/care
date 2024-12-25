import ItemsPage from "@/components/items/ItemsPage";
import { BASE_URL } from "@/services/api-base";
import { ItemType } from "@/types/item/item.type";

export default async function Items({ params } : {params: { lang: string };}) {
    const data = await fetch(BASE_URL + '/items');
    const items: ItemType[] = await data.json();
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
