"use client"
import _ from 'lodash';
import Image from "next/image";

import { ItemType } from "@/common/types/item/item.type";

import { Chip } from "@mui/material";
import ItemContactFormSection from "./forms/item-contact-form-section";
import { useItemDetailViewVM } from './use-item-detail-view-vm';

const ItemDetailView = ({
    item
 } : {
    item: ItemType
 }) => {
    const { control, handleSubmit, errors, handleSubmitPickupRequest, method } = useItemDetailViewVM({
        itemId: item.id,
        donorEmail: item.email,
    });

    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-stretch md:gap-8">
            <Image 
            src={item.image ? item.image : "/images/item.png"} 
            alt="Item image"
            width={100}
            height={100}
            unoptimized
            priority
            className="h-[300px] w-full rounded-xl object-cover md:h-full"
            />
            <div className="mt-0 h-fit md:h-full">
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
                    donorEmail={item.email}
                    donorName={item.name}
                    control={control}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={handleSubmitPickupRequest}
                    method={method}
                    />
            </div>
        </div>
    )
};

export default ItemDetailView;