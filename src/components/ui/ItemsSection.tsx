import { useTranslation } from "@/app/i18n";
import Items from "./Items";

interface ItemsSectionProps {
    lang: string;
}

const ItemsSection = async ({ lang } : ItemsSectionProps) => {
    const { t } = await useTranslation(lang);

    return (
        <section className="w-full mt-12 md:mt-16">
            <div>
                <h2 className="text-3xl md:text-5xl font-semibold mb-8">{t("items-section.available-items")}</h2>
            </div>
            <Items />
        </section>
    )
}

export default ItemsSection;