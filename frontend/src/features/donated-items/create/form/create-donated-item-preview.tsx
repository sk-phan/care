import Heading from "@/common/components/heading/heading";
import React from "react";

import ItemCard from "../../list/donated-item-card";
import { useCreateDonatedItemPreviewVM } from "../hooks/use-create-donated-item-preview-vm";

const CreateDonatedItemPreview = ({ getSelectedItemPath }: { getSelectedItemPath: (itemId: string) => string }) => {
    const { previewItem } = useCreateDonatedItemPreviewVM();

    return (
        <div>
            <Heading 
                heading="Preview"
                level={5}
                color="text-white"
            />
            <div className="bg-white w-96 rounded-md p-4">
                <ItemCard item={previewItem} getSelectedItemPath={getSelectedItemPath}/>
            </div>
        </div>
    )
};

export default CreateDonatedItemPreview;