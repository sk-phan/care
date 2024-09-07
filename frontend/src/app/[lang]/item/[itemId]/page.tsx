import ItemPage from "@/components/ui/ItemPage";

export default async function Items({ params }: { params: { lang: string, itemId: string }}) {
    const lang = params.lang;
    const itemId =  params.itemId;
    
    return (
        <ItemPage />
    )
}