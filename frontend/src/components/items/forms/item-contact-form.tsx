"use client";

import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useNotify } from "@/hooks/notification/use-notify";
import useCreatePickupRequest from "../data/use-create-pickup-request";

import TextInput from "@/components/common/text-input";
import { ItemContactFormData } from "./item-contact-form.type";
import TextArea from "@/components/common/text-area";

import { urlConfigs } from "@/routing/url-configs";
import useLocale from "@/app/i18n/use-locale";
import { useTranslation } from "@/app/i18n";

import "../../../styles/items/ItemContactForm.css";
import { Button } from "@mui/material";

const ItemContactForm = ({ itemId, donorEmail } : { itemId: string, donorEmail: string }) => {
    const router = useRouter();
    const { locale } = useLocale();
    const { t } = useTranslation(locale);

    const method = useForm<ItemContactFormData>();
    const { control, handleSubmit, formState: { errors }} = method;

    const { mutate, status } = useCreatePickupRequest();

    const notify = useNotify();

    const onSubmit = (data: ItemContactFormData) => {
        mutate({...data, donorEmail, itemId });
    };

    useEffect(() => {
        if (status === 'success') {
            notify({ message: t('item-contact-form.success') });
            router.push(urlConfigs.Items[locale]);
        }
        if (status === 'error') {
            notify({ message: t('item-contact-form.error'), severity: 'error' });
        }
    }, [notify, status, router, locale, t]);

    return (
        <FormProvider {...method}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col xl:flex-row">
                    <div className="xl:w-1/2 xl:mr-6">
                        <TextInput 
                            fullWidth
                            name="name" 
                            control={control} 
                            label={t('form.name')}
                            rules={{
                                required: "This field is required",
                            }}
                            error={!!errors.name}
                            sx={{
                                '& .MuiInputBase-root': {
                                    backgroundColor: '#fff', 
                                },
                            }}
                        />
                    </div>
                    <div className="mt-6 xl:mt-0 xl:w-1/2">
                        <TextInput 
                            fullWidth
                            name="email" 
                            label={t('form.email')}   
                            control={control} 
                            rules={{
                                required: "This field is required",
                            }}
                            placeholder="Email"
                            error={!!errors.email}
                            sx={{
                                '& .MuiInputBase-root': {
                                    backgroundColor: '#fff', 
                                },
                            }}
                        />
                    </div>
                </div>
                <div className="w-full mt-6">
                    <TextArea 
                        name="message" 
                        control={control} 
                        rows={10}
                        placeholder="Your message to the donor..."
                    />
                </div>
                <Button 
                    fullWidth
                    type="submit"
                    variant="contained"
                    className="mt-4"
                >   Send
                </Button>
            </form>
        </FormProvider>
    )
}

export default ItemContactForm;