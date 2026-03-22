"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";

import { registrationFormDefaultValues } from "./create-donated-item-form.utils";
import { useNotify } from "@/common/hooks/notification/use-notify";
import useLocale from "@/app/i18n/use-locale";
import { urlConfigs } from "@/common/routes/url-configs";
import { ItemCreateParams } from "@/common/types/item/item.type";
import handleRevalidatePath from "@/common/api/server-actions/revalidate-path";
import useCreateDonatedItem from "../use-create-donated-item";

import CreateDonatedItemPreview from "./create-donated-item-preview";
import CreateDonatedItemFormFields from "./create-donated-item-form-fields";
import Heading from "@/common/components/heading/heading";
import { useTranslations } from "next-intl";

const CreateDonatedItemForm = () => {
    const { locale } = useLocale();
    const tDonatedItems = useTranslations("donated-items.registration-form");
    const tCommon = useTranslations("common.common");
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
                notify({ message: tDonatedItems("success") });
    
                await handleRevalidatePath(urlConfigs.home.path);
                await handleRevalidatePath(urlConfigs.donatedItems.path);
    
                router.push(`${locale}/${urlConfigs.donatedItems.path}`);
            }
    
            if (loadingState === 'error') {
                notify({ message: tDonatedItems("error"), severity: 'error' });
            }
        };
    
        handleRevalidation();
    }, [loadingState, notify, error, router, locale, tDonatedItems]);

    return (
        <FormProvider {...method}>
            <div className="flex flex-col md:flex-row justify-between gap-12 h-full">
                <form onSubmit={handleSubmit(onSubmit)} className="md:w-1/2">
                    <Heading 
                        level={2}
                        heading={tDonatedItems("title")}
                        subHeading={tDonatedItems("subtitle")}
                    />
                    <CreateDonatedItemFormFields />
                    <div className="flex gap-4 justify-end">
                        <Button 
                            variant="outlined"
                            onClick={router.back}
                        >
                            {tCommon("cancel")}
                        </Button>
                        <Button 
                        type="submit"
                        variant="contained"
                        disabled={isSubmitting || !isValid || isValidating || loadingState === 'pending'} 
                        >
                            {tCommon("send")}
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