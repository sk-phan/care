import Heading from "@/common/components/heading";
import React, { useId } from "react";
import { useFormContext } from "react-hook-form";

import { ItemType } from "@/types/item/item.type";
import ItemCard from "../../items/list/item-card";

const RegistrationFormPreview = () => {
    const { watch } = useFormContext();
    const randomId = useId();

    const mapFormValuesToPreviewItem = (): ItemType => {
        return {
            id: randomId,
            title: watch('title'),
            description: '',
            condition: watch('condition'),
            status: "available",
            category: watch('category'),
            city: watch('city'),
            country: 'Finland',
            name: "",
            email: "",
            createdAt: new Date(),
            image: undefined
        }
    }

    return (
        <div>
            <Heading 
                title="Preview"
                level={5}
                color="text-white"
            />
            <div className="bg-white w-96 rounded-md p-4">
                <ItemCard item={mapFormValuesToPreviewItem()}/>
            </div>
        </div>
    )
};

export default RegistrationFormPreview;