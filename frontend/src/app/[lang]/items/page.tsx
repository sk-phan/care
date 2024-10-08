import ItemsPage from "@/components/ui/ItemsPage";

export default async function Items({ params } : {params: { lang: string };}) {
    const lang = params.lang;
    
    return (
        <div className="min-h-screen">
            <ItemsPage
            lang={lang} 
            />
        </div>
    )
}