"use client";

import { FormProvider, useForm } from "react-hook-form";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useNotify } from "@/common/hooks/notification/use-notify";
import useCreatePickupRequest from "../use-create-pickup-request";

import TextInput from "@/common/components/form/text-input";
import TextArea from "@/common/components/form/text-area";

import { getLocalizedPath, urlConfigs } from "@/common/routes/url-configs";

import { Button } from "@mui/material";
import { isValidEmail } from "@/utils/form-validations/form-validations.utils";

import { ItemContactFormData } from "./item-contact-form.type";
import { useLocale, useTranslations } from "next-intl";

const ItemContactForm = ({ itemId, donorEmail } : { itemId: string, donorEmail: string }) => {
    const router = useRouter();
    const locale = useLocale();
    const tCommon = useTranslations("common");
    const tContactForm = useTranslations("donated-items.item-contact-form");

    const method = useForm<ItemContactFormData>();
    const { control, handleSubmit, formState: { errors }} = method;

    const { mutate, status } = useCreatePickupRequest();

    const notify = useNotify();

    const onSubmit = (data: ItemContactFormData) => {
        mutate({...data, donorEmail, itemId });
    };

    useEffect(() => {
        if (status === 'success') {
            notify({ message: tContactForm("success") });
            router.push(getLocalizedPath(locale, urlConfigs.donatedItems.path));
        }
        if (status === 'error') {
            notify({ message: tContactForm("error"), severity: 'error' });
        }
    }, [notify, status, router, locale, tContactForm]);

    return (
        <FormProvider {...method}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col xl:flex-row">
                    <div className="xl:w-1/2 xl:mr-6">
                        <TextInput 
                            fullWidth
                            name="name" 
                            control={control} 
                            label={tCommon("form.name")}
                            rules={{
                                required: tCommon("form.required"),
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
                            label={tCommon("form.email")}   
                            control={control} 
                            rules={{
                                required: tCommon("form.required"),
                                validate: {
                                    emailValidation: isValidEmail || tCommon("form.invalid-email")
                                }
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
                        placeholder={tContactForm("message-placeholder")}
                    />
                </div>
                <div className="mt-4">
                    <Button 
                        fullWidth
                        type="submit"
                        variant="contained"
                    >   
                        {tCommon("common.send")}
                    </Button>
                </div>
            </form>
        </FormProvider>
    )
}

export default ItemContactForm;