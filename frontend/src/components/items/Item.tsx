"use client";
import Image from "next/image";
import { useTranslation } from "@/app/i18n";
import "../../styles/Item.css";
import Badge from "../common/Badge";

const Item = () => {
    const { t } = useTranslation("en")

    return (
        <div>
            <div className="item-image relative pb-2">
                <Badge
                className="absolute top-4 left-4 font-medium"
                >New</Badge>
                <Image 
                className="rounded-xl" 
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }} 
                alt="item"
                src="https://images.unsplash.com/photo-1669212409006-4684413000aa?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            </div>
            <div>
                <h3 className="text-lg font-semibold">Offerring like-new toy</h3>
                <span className="text-gray-500 font-medium">Helsinki, FI</span>
            </div>
        </div>
    )
}

export default Item;