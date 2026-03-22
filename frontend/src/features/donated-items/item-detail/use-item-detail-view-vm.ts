import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { ItemContactFormData } from "./forms/item-contact-form.type";
import useCreatePickupRequest from "./hooks/use-create-pickup-request";
import { useNotify } from "@/common/hooks/notification/use-notify";
import { getLocalizedPath, urlConfigs } from "@/common/routes/url-configs";
import { useCallback } from "react";

export const useItemDetailViewVM = ({
    donorEmail,
    itemId,
}: {
    donorEmail: string;
    itemId: string;
}) => {
    const router = useRouter();
    const locale = useLocale();
    const tContactForm = useTranslations("donated-items.item-contact-form");
    const notify = useNotify();

    const method = useForm<ItemContactFormData>({
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
        mode: "all",
    });
    const { control, handleSubmit, formState: { errors }} = method;

    const handleSuccessfullPickupRequest = () => {
        notify({ message: tContactForm("success") });
        router.push(getLocalizedPath(locale, urlConfigs.donatedItems.path));
    }

    const handleErrorPickupRequest = () => {
        notify({ message: tContactForm("error"), severity: 'error' });
    }

    const { mutate } = useCreatePickupRequest({
        onSuccess: handleSuccessfullPickupRequest,
        onError: handleErrorPickupRequest,
    });

    const handleSubmitPickupRequest = useCallback((data: ItemContactFormData) => {
        mutate({...data, donorEmail, itemId });
    }, [mutate, donorEmail, itemId]);

    return {
      control,
      handleSubmit,
      errors,
      handleSubmitPickupRequest,
      method,
    }
}