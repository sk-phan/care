"use client";
import Link from "next/link";

import { urlConfigs } from "@/common/routes/url-configs";
import { ItemType } from "@/common/types/item/item.type";

import useLocale from "@/app/i18n/use-locale";
import Image from "next/image";
import { Chip } from "@mui/material";
import { useTranslations } from "next-intl";

const DonatedItemCard = ({ item } : { item: ItemType }) => {
    const itemPath = urlConfigs.donatedItems;
    const { locale } = useLocale();
    const t = useTranslations("donated-items.item-card");
   
    return (
        <Link href={`${locale}/${itemPath.path}/${item.id}`} className="hover:opacity-85 cursor-pointer">
            <div className="relative pb-2">
                <Chip
                className="absolute top-4 left-4 font-medium bg-white"
                label={t(item.status)}
                color="secondary"
                />
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
                <span className="text-gray-500 font-medium">{t(`condition.${item.condition}`)}</span>
                <span className="text-gray-500 font-medium">{item.city}, {item.country}</span>
            </div>
        </Link>
    )
}

export default DonatedItemCard;