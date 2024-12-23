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
import { ItemCreateParams } from "shared/src/types/item.type";
import { useRouter } from "next/navigation";
import { urlConfigs } from "@/routing/urlConfigs";

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
            router.push(urlConfigs.Items.en);
        };
        if (status === 'error') {
            notify({ message: 'Failed to save. Please try again!', severity: 'error'});
        };
    }, [status, notify, error, router])

    return (
        <FormProvider {...method}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <RegistrationFormFields />
                <div className="flex gap-4 justify-end">
                    <Button 
                        variant="outlined"
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
        </FormProvider>
    )
};

export default RegistrationForm;