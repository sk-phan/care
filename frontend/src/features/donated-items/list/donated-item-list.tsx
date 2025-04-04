"use client";

import { ItemType } from "@/common/types/item/item.type";
import DonatedItemCard from "./donated-item-card";

const DonatedItemList = ({ items }: { items: ItemType[] } ) => {

    return (
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {items.map(item => {
                return (
                    <DonatedItemCard
                    key={item.id}
                    item={item}/>
                )
            })}
        </div>
    );
};

export default DonatedItemList;
