"use client";

import { ItemType } from "@/types/items.type";
import Item from "./Item";

const Items = ({ 
    items 
}: {
    items: ItemType[];
} ) => {
    return (
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Item />
        </div>
    );
};

export default Items;
