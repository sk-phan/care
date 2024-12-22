"use client";

import { FormProvider, useForm } from "react-hook-form";
import RegistrationFormFields from "./registration-form-fields";

import { useTranslation } from "@/app/i18n";
import { LocaleType } from "@/app/i18n/locales/locales.type";
import { Button } from "@mui/material";

const RegistrationForm = ({ lang } : { lang?: LocaleType}) => {
    const { t } = useTranslation(lang);

    const method = useForm({ 
        defaultValues: {
            name: '',
            phoneNumber: null,
            title: '',
            description: '',
            condition: 'like-new',
            image: '',
            city: 'Helsinki',
            country: 'Finland',
            category: 'toy',
            status: 'available'
        },
        mode: "all"
    });
    const {
        formState: { isValid, isValidating, isSubmitting },
    } = method;

    return (
        <FormProvider {...method}>
            <form>
                <RegistrationFormFields />
                <div className="flex gap-4 justify-end">
                    <Button 
                        variant="outlined"
                    >
                        {t("common.cancel")}
                    </Button>
                    <Button 
                    variant="contained"
                    disabled={isSubmitting || !isValid || isValidating}>
                        {t("common.send")}
                    </Button>
                </div>
            </form>
        </FormProvider>
    )
};

export default RegistrationForm;