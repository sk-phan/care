"use client";
import Image from "next/image";
import "../../styles/Item.css";
import Badge from "../common/Badge";
import { ItemType } from "@/types/items/items.type";
import Link from "next/link";
import { urlConfigs } from "@/routing/urlConfigs";

const _ = require('lodash'); 

const Item = ({ item } : { item: ItemType }) => {
    const itemPath = urlConfigs.Item;

    return (
        <Link href={`${itemPath.en}/${item.id}`} className="hover:opacity-85 cursor-pointer">
            <div className="relative pb-2">
                <Badge
                className="absolute top-4 left-4 font-medium"
                >
                    {_.capitalize(item.status)}
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
            <div className="flex flex-col">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <span className="text-gray-500 font-medium">{_.capitalize(item.condition)}</span>
                <span className="text-gray-500 font-medium">{item.city}, {item.country}</span>
            </div>
        </Link>
    )
}

export default Item;