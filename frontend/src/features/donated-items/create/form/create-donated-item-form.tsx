"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";

import { registrationFormDefaultValues } from "./create-donated-item-form.utils";
import { useNotify } from "@/common/hooks/notification/use-notify";
import { useTranslation } from "@/app/i18n";
import useLocale from "@/app/i18n/use-locale";
import { urlConfigs } from "@/common/routes/url-configs";
import { ItemCreateParams } from "@/common/types/item/item.type";
import handleRevalidatePath from "@/common/api/server-actions/revalidate-path";
import useCreateDonatedItem from "../use-create-donated-item";

import CreateDonatedItemPreview from "./create-donated-item-preview";
import CreateDonatedItemFormFields from "./create-donated-item-form-fields";
import Heading from "@/common/components/heading/heading";

const CreateDonatedItemForm = () => {
    const { locale } = useLocale();
    const { t } = useTranslation(locale);
    const { execute, loadingState, error } = useCreateDonatedItem();
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
        execute(data);
    };

    useEffect(() => {
        const handleRevalidation = async () => {
            if (loadingState === 'success') {
                notify({ message: 'Registration is successfully saved!' });
    
                await handleRevalidatePath(urlConfigs.home[locale]);
                await handleRevalidatePath(urlConfigs.donatedItems[locale]);
    
                router.push(urlConfigs.donatedItems[locale]);
            }
    
            if (loadingState === 'error') {
                notify({ message: 'Failed to save. Please try again!', severity: 'error' });
            }
        };
    
        handleRevalidation();
    }, [loadingState, notify, error, router, locale]);

    return (
        <FormProvider {...method}>
            <div className="flex flex-col md:flex-row justify-between gap-12 h-full">
                <form onSubmit={handleSubmit(onSubmit)} className="md:w-1/2">
                    <Heading 
                        level={2}
                        heading={t('registration-form.title')}
                        subHeading={t('registration-form.subtitle')}
                    />
                    <CreateDonatedItemFormFields />
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
                        disabled={isSubmitting || !isValid || isValidating || loadingState === 'pending'} 
                        >
                            {t("common.send")}
                        </Button>
                    </div>
                </form>
                <div className="hidden md:flex md:w-1/2 rounded-lg bg-primary items-center justify-center">
                    <CreateDonatedItemPreview />
                </div>
            </div>
        </FormProvider>
    )
};

export default CreateDonatedItemForm;