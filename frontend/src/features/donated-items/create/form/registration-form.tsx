"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";

import RegistrationFormFields from "./registration-form-fields";
import { registrationFormDefaultValues } from "./registration-form.utils";

import { useNotify } from "@/common/hooks/notification/use-notify";
import { useTranslation } from "@/app/i18n";
import useLocale from "@/app/i18n/use-locale";

import useCreateItem from "../use-create-item";
import { ItemCreateParams } from "@/common/types/item/item.type";
import { urlConfigs } from "@/common/routing/url-configs";
import RegistrationFormPreview from "./registration-form-preview";
import Heading from "@/common/components/heading";
import revalidateHomePath from "@/common/api/server-actions/revalidate-path";

const RegistrationForm = () => {
    const { locale } = useLocale();
    const { t } = useTranslation(locale);
    const { mutate, status, error } = useCreateItem();
    const notify = useNotify();
    const router = useRouter();

    const method = useForm({ 
        defaultValues: registrationFormDefaultValues,
        mode: "all"
    });
    const {
        handleSubmit,
        formState: { isValid, isValidating, isSubmitting },
    } = method;

    const onSubmit = (data: ItemCreateParams) => {
        mutate(data);
    };

    useEffect(() => {
        const handleRevalidation = async () => {
            if (status === 'success') {
                notify({ message: 'Registration is successfully saved!' });
    
                await revalidateHomePath(urlConfigs.home[locale]);
                await revalidateHomePath(urlConfigs.donatedItems[locale]);
    
                router.push(urlConfigs.donatedItems[locale]);
            }
    
            if (status === 'error') {
                notify({ message: 'Failed to save. Please try again!', severity: 'error' });
            }
        };
    
        handleRevalidation();
    }, [status, notify, error, router, locale]);
  
    return (
        <FormProvider {...method}>
            <div className="flex flex-col md:flex-row justify-between gap-12 h-full">
                <form onSubmit={handleSubmit(onSubmit)} className="md:w-1/2">
                    <Heading 
                        level={2}
                        title={t('registration-form.title')}
                        subHeading={t('registration-form.subtitle')}
                    />
                    <RegistrationFormFields />
                    <div className="flex gap-4 justify-end">
                        <Button 
                            variant="outlined"
                            onClick={router.back}
                        >
                            {t("common.cancel")}
                        </Button>
                        <Button 
                        type="submit"
                        variant="contained"
                        disabled={isSubmitting || !isValid || isValidating || status === 'pending'} 
                        >
                            {t("common.send")}
                        </Button>
                    </div>
                </form>
                <div className="hidden md:flex md:w-1/2 rounded-lg bg-primary items-center justify-center">
                    <RegistrationFormPreview />
                </div>
            </div>
        </FormProvider>
    )
};

export default RegistrationForm;