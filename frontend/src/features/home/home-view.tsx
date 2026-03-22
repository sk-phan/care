"use client";

import { ItemType } from "@/common/types/item/item.type";
import HeroSection from "./sections/hero-section";
import { useHomeViewVM } from "./use-home-view-vm";
import ItemsSection from "./sections/items-section";
import AboutSection from "./sections/about-section";

const HomeView = ({ items }: { items: ItemType[] }) => {
    const { createDonatedItemPath, donatedItemsPath, getSelectedItemPath } = useHomeViewVM();

    return (
        <main className="flex min-h-screen flex-col justify-between">
            <HeroSection donatedItemsPath={donatedItemsPath}/>
            <AboutSection createDonatedItemPath={createDonatedItemPath}/>
            <ItemsSection items={items} donatedItemsPath={donatedItemsPath} getSelectedItemPath={getSelectedItemPath}/>
        </main>
    )
}

export default HomeView;