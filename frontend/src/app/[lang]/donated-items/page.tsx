import DonatedItemsView from "@/features/donated-items/donated-items-view";
import { Suspense } from "react";

export default function Items() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <DonatedItemsView />
        </Suspense>
    );
}
