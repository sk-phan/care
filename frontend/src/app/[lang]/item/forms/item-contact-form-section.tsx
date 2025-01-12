"use client";

import Image from "next/image";

import useLocale from "@/app/i18n/use-locale";
import { useTranslation } from "@/app/i18n";

import ItemContactForm from "./item-contact-form";

import "@/styles/items/ItemContactForm.css";

const ItemContactFormSection = ({
    donorName,
    donorEmail,
    itemId
} : {
    donorName: string;
    donorEmail: string;
    itemId: string;
}) => {
    const { locale } = useLocale();
    const { t } = useTranslation(locale)

    return (
        <div className="mt-6 bg-gray-100 p-6 rounded-3xl">
            <div className="flex items-center mb-6">
                <Image 
                className="object-cover rounded-full avatar mr-4"
                src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="placeholder image"
                width={100}
                height={100}
                />
                <div className="w-2/3">
                    <span className="font-medium block">{donorName}</span>
                    <div className="flex flex-col gap-4 xl:flex-row">
                        <span className="xl:mr-6 font-semibold">
                            <span className="text-gray-500 mr-2">{t('form.email')}:</span>
                            <a href={`mailto:${donorEmail}`} className="underline">{donorEmail}</a>
                        </span>
                    </div>
                </div>
            </div>
            <ItemContactForm itemId={itemId} donorEmail={donorEmail}/>
        </div>
    )
}

export default ItemContactFormSection;