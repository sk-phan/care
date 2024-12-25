"use client";

import { useEffect } from "react";
import { Button } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";

import RegistrationFormFields from "./registration-form-fields";
import { registrationFormDefaultValues } from "./registration-form.utils";

import { useNotify } from "@/hooks/notification/useNotify";
import { useTranslation } from "@/app/i18n";
import { LocaleType } from "@/app/i18n/locales/locales.type";

import useCreateItemRegistration from "../data/use-create-item-registation";
import { ItemCreateParams } from "@/types/item/item.type";
import { useRouter } from "next/navigation";
import { urlConfigs } from "@/routing/urlConfigs";
import RegistrationFormPreview from "./registration-form-preview";
import Heading from "@/components/common/heading";
import revalidateHomePath from "@/services/server-actions/revalidate-path";

const RegistrationForm = ({ lang } : { lang?: LocaleType}) => {
    const { t } = useTranslation(lang);
    const { mutate, status, error } = useCreateItemRegistration();
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
        if (status === 'success') {
            notify({ message: 'Registration is succesfully saved!'});
            revalidateHomePath(urlConfigs.Home.en);
            router.push(urlConfigs.Items.en);
        };
        if (status === 'error') {
            notify({ message: 'Failed to save. Please try again!', severity: 'error'});
        };
    }, [status, notify, error, router])

    return (
        <FormProvider {...method}>
            <div className="flex flex-col md:flex-row justify-between gap-12 h-full">
                <form onSubmit={handleSubmit(onSubmit)} className="md:w-1/2">
                    <Heading 
                        level={2}
                        title="List your item"
                        subHeading="Share your unused items and give them a new purpose! Your listing will remain active for 30 days."
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
                        disabled={isSubmitting || !isValid || isValidating}
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