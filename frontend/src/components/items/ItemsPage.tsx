"use client";

import Items from "./Items";
import Tabs from "../common/Tabs";
import { ItemType } from "@/types/items.type";

interface ItemsPage {
    lang: string;
    items: ItemType[];
}

const ItemsPage = ({ lang, items } : ItemsPage) => {
    return (
        <div>
            <h2
                className="
                text-5xl 
                font-medium 
                text-center 
                mb-8
                "
            >
                Items
            </h2>
            <Tabs />
            <Items items={items}/>
        </div>
    )
}

export default ItemsPage;