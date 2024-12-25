import Heading from "@/components/common/heading";
import Item from "@/components/items/Item";
import React from "react";
import { useFormContext } from "react-hook-form";
import { ItemType } from "@/types/item/item.type";

const RegistrationFormPreview = () => {
    const { watch } = useFormContext();

    const mapFormValuesToPreviewItem = (): ItemType => {
        return {
            id: React.useId(),
            title: watch('title'),
            description: '',
            condition: watch('condition'),
            status: "available",
            category: watch('category'),
            city: watch('city'),
            country: 'Finland',
            name: "A",
            email: "sk",
            "createdAt": new Date(),
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
                <Item item={mapFormValuesToPreviewItem()}/>
            </div>
        </div>
    )
};

export default RegistrationFormPreview;