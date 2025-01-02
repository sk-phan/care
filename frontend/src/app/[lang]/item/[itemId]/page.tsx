import ItemPage from "@/components/items/item-page";
import { BASE_URL } from "@/services/api-base";
import { ItemType } from "@/types/item/item.type";

export default async function Item({ params }: { params: { itemId: string }}) {
    const itemId =  params.itemId;
    const response = await fetch(`${BASE_URL}/items/${itemId}`);
    const data = await response.json();

    const item: ItemType = data.entity;

    if (!item) {
        return "not found";
    }
    return (
        <ItemPage 
        item={item}/>
    )
}