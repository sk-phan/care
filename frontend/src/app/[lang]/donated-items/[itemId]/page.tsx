import { BASE_URL } from "@/common/api/api-base";
import { ItemType } from "@/common/types/item/item.type";
import ItemPage from "@/features/donated-items/item/item-page";

export default async function Item({ params }: { params: { itemId: string }}) {
    const itemId =  params.itemId;
    const response = await fetch(`${BASE_URL}/items/${itemId}`);
    const data = await response.json();

    const item: ItemType = data.entity;

    return (
        <ItemPage 
        item={item}/>
    )
}