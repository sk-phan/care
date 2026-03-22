import { ItemType } from "@/common/types/item/item.type";

import Heading from "@/common/components/heading/heading";
import { Button } from "@mui/material";
import DonatedItemList from "@/features/donated-items/list/donated-item-list";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface ItemsSectionProps {
    items: ItemType[];
    donatedItemsPath: string;
}

 const ItemsSection = ({ items, donatedItemsPath } : ItemsSectionProps) => {
    const t = useTranslations("home.items-section");

    return (
        <section className="w-full mt-12 md:mt-16">
            <div className="flex justify-between items-center">
                <Heading level={2} heading={t("available-items")}/>
                <Button 
                    variant="text" 
                    href={donatedItemsPath}
                    LinkComponent={Link}
                    >
                        {t("see-all")}
                </Button>
            </div>
            <DonatedItemList items={items} />
        </section>
    )
}

export default ItemsSection;