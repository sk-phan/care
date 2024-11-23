import ItemPage from "@/components/items/ItemPage";
import { BASE_URL } from "@/services/api-base";
import { ItemType } from "@/types/items/items.type";

export default async function Item({ params }: { params: { lang: string, itemId: string }}) {
    const lang = params.lang;
    const itemId =  params.itemId;
    const data =  await fetch(`${BASE_URL}/items/${itemId}`)
    const item: ItemType = await data.json();

    return (
        <ItemPage 
        item={item}/>
    )
}