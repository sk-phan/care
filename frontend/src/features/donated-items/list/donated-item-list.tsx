import { ItemType } from "@/common/types/item/item.type";
import DonatedItemCard from "./donated-item-card";

type DonatedItemListProps = {
    items: ItemType[];
    getSelectedItemPath: (itemId: string) => string;
}
const DonatedItemList = ({ items, getSelectedItemPath }: DonatedItemListProps) => {

    return (
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {items.map(item => {
                return (
                    <DonatedItemCard
                    key={item.id}
                    item={item}
                    getSelectedItemPath={getSelectedItemPath}
                    />
                )
            })}
        </div>
    );
};

export default DonatedItemList;
