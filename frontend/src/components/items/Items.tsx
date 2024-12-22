"use client";


import { ItemType } from "shared/src/types/item.type";
import Item from "./Item";

const Items = ({ 
    items 
}: {
    items: ItemType[];
} ) => {

    return (
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {items.map(item => {
                return (
                    <Item 
                    key={item.id}
                    item={item}/>
                )
            })}
        </div>
    );
};

export default Items;
