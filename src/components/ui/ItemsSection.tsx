import { useTranslation } from "@/app/i18n";

interface ItemsSectionProps {
    lang: string;
}

const ItemsSection = async ({ lang } : ItemsSectionProps) => {
    const { t } = await useTranslation(lang);

    return (
        <section className="w-full mt-8 md:mt-16">
            <div>
                <h2 className="text-xl md:text-5xl font-semibold mb-4">{t("items-section.available-items")}</h2>
            </div>
        </section>
    )
}

export default ItemsSection;