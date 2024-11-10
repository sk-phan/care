"use client";
import Image from "next/image";
import { useTranslation } from "@/app/i18n";
import "../../styles/Item.css";
import Badge from "../common/Badge";
import { ItemType } from "@/types/items.type";

const Item = ({ item } : { item: ItemType }) => {
    const { t } = useTranslation("en")

    console.log(item)
    return (
        <div>
            <div className="item-image relative pb-2">
                <Badge
                className="absolute top-4 left-4 font-medium"
                >
                    {item.condition}
                </Badge>
                <Image 
                className="rounded-xl object-cover" 
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '270px'}} 
                alt="item"
                src={item.image}/>
            </div>
            <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <span className="text-gray-500 font-medium">{item.city}, {item.country}</span>
            </div>
        </div>
    )
}

export default Item;