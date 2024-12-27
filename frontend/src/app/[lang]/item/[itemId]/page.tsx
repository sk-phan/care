import ItemPage from "@/components/items/item-page";
import { BASE_URL } from "@/services/api-base";
import { ItemType } from "@/types/item/item.type";

export default async function Item({ params }: { params: { itemId: string }}) {
    const itemId =  params.itemId;
    const data =  await fetch(`${BASE_URL}/items/${itemId}`)
    const item: ItemType = await data.json();

    return (
        <ItemPage 
        item={item}/>
    )
}