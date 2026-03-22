import { ItemCreateParams, ItemType } from "@/common/types/item/item.type";
import { useId } from "react";
import { useFormContext, useWatch } from "react-hook-form";

export const useCreateDonatedItemPreviewVM = () => {
    const { control } = useFormContext<ItemCreateParams>();
    const randomId = useId();
    const [title, condition, category, city] = useWatch({
      control,
      name: ["title", "condition", "category", "city"]
    });

    const previewItem: ItemType = {
        id: randomId,
        title,
        description: "",
        condition ,
        status: "available",
        category,
        city,
        country: "Finland",
        name: "",
        email: "",
        createdAt: new Date(),
        image: undefined
      };

    return {
        previewItem,
    }
}