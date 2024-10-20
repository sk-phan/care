import ItemPage from "@/components/items/ItemPage";

export default async function Items({ params }: { params: { lang: string, itemId: string }}) {
    const lang = params.lang;
    const itemId =  params.itemId;
    
    return (
        <ItemPage />
    )
}