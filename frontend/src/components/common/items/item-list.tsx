"use client";

import { ItemType } from "@/types/item/item.type";
import ItemCard from "./item-card";

const ItemList = ({ 
    items 
}: {
    items: ItemType[];
} ) => {

    return (
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {items.map(item => {
                return (
                    <ItemCard 
                    key={item.id}
                    item={item}/>
                )
            })}
        </div>
    );
};

export default ItemList;
