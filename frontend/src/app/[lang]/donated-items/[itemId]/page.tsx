import { BASE_URL } from "@/common/api/api-base";
import { ItemType } from "@/common/types/item/item.type";
import ItemDetailView from "@/features/donated-items/item-detail/item-detail-view";

interface Props {
    params: Promise<{ itemId: string }>;
    searchParams: Promise<void>;
}

export default async function Item(props: Props) {
    const params = await props.params;
    const itemId =  params.itemId;
    const response = await fetch(`${BASE_URL}/items/${itemId}`);
    const data = await response.json();

    const item: ItemType = data.entity;

    return (
        <ItemDetailView 
        item={item}/>
    )
}