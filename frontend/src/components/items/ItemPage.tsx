"use client"
import { useEffect } from "react";
import Image from "next/image";

import { ItemType } from "shared/src/types/item.type";

import ItemContactForm from "./forms/item-contact-form";
import placeholderImage from "@/images/img/item_placeholder_img.png";
import "../../styles/ItemPage.css";

const _ = require('lodash'); 

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
            src={item.image || placeholderImage.src} 
            alt="Item image"
            width={100}
            height={100}
            unoptimized
            priority
            className="rounded-xl w-full md:w-1/2 object-cover item-image"
            />
            <div className="mt-6 md:mt-0 md:ml-8 md:w-1/2 h-fit" id="item-info">
                <span className="bg-green-500 text-white w-fit px-4 py-1 rounded-full">
                    {_.capitalize(item.status)}
                </span>
                <h3
                className="text-2xl md:text-4xl mt-4 mb-2 font-medium break-words"
                >
                    {item.title}
                </h3>
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
                <ItemContactForm 
                    donorName={item.name}
                    donorEmail={item.email}/>
            </div>
        </div>
    )
};

export default ItemPage;