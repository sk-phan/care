"use client"
import { useEffect } from "react";
import "../../styles/ItemPage.css";
import ItemContactForm from "./forms/item-contact-form";
import { ItemType } from "@/types/items.type";

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
            <img 
            id="item-image"
            src={item.image} 
            alt="Item image"
            className="rounded-xl w-full md:w-1/2 object-cover item-image"
            />
            <div className="mt-6 md:mt-0 md:ml-8 md:w-1/2 h-fit" id="item-info">
                <h3
                className="text-2xl md:text-4xl font-medium break-words"
                >
                    {item.title}
                </h3>
                <div className="flex flex-col mt-6 md:mt-8 mb-6">
                    <span className="bg-green-500 mb-2 text-white w-fit px-4 py-1 rounded-full">{item.status}</span>
                    <span>
                        <span className="text-gray-500">Status:</span> 
                        <span className="ml-2 font-medium">{item.condition}</span>
                    </span>
                    <span>
                        <span className="text-gray-500">Location:</span>  
                        <span className="ml-2 font-medium">{item.city}, {item.country}</span>
                    </span>
                </div>
                <p className="text-gray-700">
                    {item.description}
                </p>
                <ItemContactForm />
            </div>
        </div>
    )
};

export default ItemPage;