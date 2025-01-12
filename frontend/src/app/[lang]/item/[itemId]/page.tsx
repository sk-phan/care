import { BASE_URL } from "@/services/api-base";
import { ItemType } from "@/types/item/item.type";
import ItemPage from "../item-page";

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