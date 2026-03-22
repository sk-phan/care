import handleRevalidatePath from "@/common/api/server-actions/revalidate-path";
import { useNotify } from "@/common/hooks/notification/use-notify";
import { ItemCreateParams } from "@/common/types/item/item.type";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import useCreateDonatedItem from "./hooks/use-create-donated-item";
import { getLocalizedPath, urlConfigs } from "@/common/routes/url-configs";
import { registrationFormDefaultValues } from "./form/create-donated-item-form.utils";
import { useCallback } from "react";

export const useCreateDonatedItemVM = () => {
    const locale = useLocale();
    const tDonatedItems = useTranslations("donated-items.registration-form");
    const notify = useNotify();
    const router = useRouter();

    const handleSuccessfullCreateDonatedItem = async () => {
        notify({ message: tDonatedItems("success") });
        await handleRevalidatePath(urlConfigs.home.path);
        await handleRevalidatePath(urlConfigs.donatedItems.path);
        router.push(getLocalizedPath(locale, urlConfigs.donatedItems.path));
    }

    const handleErrorCreateDonatedItem = async () => {
        notify({ message: tDonatedItems("error"), severity: 'error' });
    }

    const { mutate, isPending } = useCreateDonatedItem({
        onSuccess: handleSuccessfullCreateDonatedItem,
        onError: handleErrorCreateDonatedItem,
    });

    const method = useForm({ 
        defaultValues: registrationFormDefaultValues,
        mode: "all"
    });
    const {
        handleSubmit,
        formState: { isValid, isValidating, isSubmitting },
    } = method;

    const isSubmitButtonDisabled = isSubmitting || !isValid || isValidating || isPending;
    
    const handleSubmitPickupRequest = useCallback((data: ItemCreateParams) => {
        mutate(data);
    }, [mutate]);

    const navigateBack = useCallback(() => {
        router.back();
    }, [router]);

    const getSelectedItemPath = useCallback((itemId: string) => {
        const selectedItemPath = getLocalizedPath(locale, urlConfigs.donatedItems.path);
        return `${selectedItemPath}/${itemId}`;
    }, [locale]);

    return {
        method,
        handleSubmit,
        handleSubmitPickupRequest,
        isValid,
        isValidating,
        isSubmitting,
        isSubmitButtonDisabled,
        navigateBack,
        getSelectedItemPath
    }
}