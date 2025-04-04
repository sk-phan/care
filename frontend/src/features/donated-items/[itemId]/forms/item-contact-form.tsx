"use client";

import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useNotify } from "@/common/hooks/notification/use-notify";
import useCreatePickupRequest from "../use-create-pickup-request";

import TextInput from "@/common/components/text-input";
import TextArea from "@/common/components/text-area";

import { urlConfigs } from "@/common/routing/url-configs";
import useLocale from "@/app/i18n/use-locale";
import { useTranslation } from "@/app/i18n";

import { Button } from "@mui/material";
import { emailPattern } from "@/utils/form-validations";

import "@/common/styles/items/ItemContactForm.css";
import { ItemContactFormData } from "./item-contact-form.type";

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
            router.push(urlConfigs.donatedItems[locale]);
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
                                required: t('form.required'),
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
                                required: t('form.required'),
                                pattern: {
                                    value: emailPattern,
                                    message: t('form.invalid-email'), 
                                },
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
                        placeholder={t('item-contact-form.message-placeholder')}
                    />
                </div>
                <div className="mt-4">
                    <Button 
                        fullWidth
                        type="submit"
                        variant="contained"
                    >   
                        {t('common.send')}
                    </Button>
                </div>
            </form>
        </FormProvider>
    )
}

export default ItemContactForm;