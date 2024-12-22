"use client";

import { FormProvider, useForm } from "react-hook-form";
import RegistrationFormFields from "./registration-form-fields";
import { registrationFormDefaultValues } from "./registration-form.utils";

import { useTranslation } from "@/app/i18n";
import { LocaleType } from "@/app/i18n/locales/locales.type";

import { Button } from "@mui/material";
import useCreateItemRegistration from "../data/use-create-item-registation";
import { ItemCreateParams } from "shared/src/types/item.type";

const RegistrationForm = ({ lang } : { lang?: LocaleType}) => {
    const { t } = useTranslation(lang);
    const { mutate, status } = useCreateItemRegistration();

    const method = useForm({ 
        defaultValues: registrationFormDefaultValues,
        mode: "all"
    });
    const {handleSubmit,
        formState: { isValid, isValidating, isSubmitting },
    } = method;

    const onSubmit = (data: ItemCreateParams) => {
        mutate(data);
    };

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
                    disabled={isSubmitting || !isValid || isValidating}>
                        {t("common.send")}
                    </Button>
                </div>
            </form>
        </FormProvider>
    )
};

export default RegistrationForm;