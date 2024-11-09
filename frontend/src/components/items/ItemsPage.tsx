"use client";

import Items from "./Items";
import Tabs from "../common/Tabs";
import { Item } from "@/types/items.type";

interface ItemsPage {
    lang: string;
    items: Item[];
}

const ItemsPage = ({ lang, items } : ItemsPage) => {
    console.log(items)
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
            <Items/>
        </div>
    )
}

export default ItemsPage;