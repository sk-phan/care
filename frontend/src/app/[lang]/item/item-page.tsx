"use client"
import { useEffect } from "react";
import _ from 'lodash';
import Image from "next/image";

import { ItemType } from "@/types/item/item.type";

import ItemContactFormSection from "./forms/item-contact-form-section";

import "@/styles/ItemPage.css";
import { Chip } from "@mui/material";

const ItemPage = ({
    item
 } : {
    item: ItemType
 }) => {
    useEffect(() => {
        const itemInfo = document.getElementById("item-info");
        const itemImage = document.getElementById("item-image");

        if (window.innerWidth >= 768) {
            if (itemInfo && itemImage) {
                itemImage.style.height = `${itemInfo.clientHeight}px`;
            }
        }
    }, []);

    return (
        <div className="flex flex-col md:flex-row">
            <Image 
            id="item-image"
            src={item.image ? item.image : "/images/item.png"} 
            alt="Item image"
            width={100}
            height={100}
            unoptimized
            priority
            className="rounded-xl w-full md:w-1/2 object-cover item-image"
            />
            <div className="mt-6 md:mt-0 md:ml-8 md:w-1/2 h-fit" id="item-info">
                <div className="flex items-center gap-2 mt-4 mb-2">
                    <h3 className="text-2xl md:text-4xl font-medium break-words">
                        {item.title}
                    </h3>
                    <Chip variant="outlined" className="border-primary text-primary" label={_.capitalize(item.status)} />
                </div>
                <div className="flex flex-col mb-1">
                    <span>
                        <span className="text-gray-500">Condition:</span> 
                        <span className="ml-2 font-medium">{_.capitalize(item.condition)}</span>
                    </span>
                    <span>
                        <span className="text-gray-500">Location:</span>  
                        <span className="ml-2 font-medium">{item.city}, {item.country}</span>
                    </span>
                </div>
                <p className="text-gray-700">
                    {item.description}
                </p>
                <ItemContactFormSection
                    donorName={item.name}
                    donorEmail={item.email}
                    itemId={item.id}/>
            </div>
        </div>
    )
};

export default ItemPage;