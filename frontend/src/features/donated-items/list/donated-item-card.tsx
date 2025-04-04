"use client";
import Link from "next/link";
import _ from 'lodash';

import { urlConfigs } from "@/common/routing/url-configs";
import { ItemType } from "@/common/types/item/item.type";

import "@/common/styles/Item.css";
import { useTranslation } from "@/app/i18n";
import useLocale from "@/app/i18n/use-locale";
import Image from "next/image";
import { Badge } from "@mui/material";

const DonatedItemCard = ({ item } : { item: ItemType }) => {
    const itemPath = urlConfigs.donatedItems;
    const { locale } = useLocale();
    const { t } = useTranslation(locale);

    return (
        <Link href={`${itemPath.en}/${item.id}`} className="hover:opacity-85 cursor-pointer">
            <div className="relative pb-2">
                <Badge
                className="absolute top-4 left-4 font-medium"
                >
                    {t(`item-card.${item.status}`)}
                </Badge>
                <Image 
                className="rounded-xl object-cover" 
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: '270px'}} 
                alt="item"
                src={item.image ? item.image : "/images/item.png"} 
                />
            </div>
            <div className="flex flex-col">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <span className="text-gray-500 font-medium">{_.capitalize(item.condition)}</span>
                <span className="text-gray-500 font-medium">{item.city}, {item.country}</span>
            </div>
        </Link>
    )
}

export default DonatedItemCard;