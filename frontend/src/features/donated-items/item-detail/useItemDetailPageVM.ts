import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { ItemContactFormData } from "./forms/item-contact-form.type";
import useCreatePickupRequest from "./hooks/use-create-pickup-request";
import { useNotify } from "@/common/hooks/notification/use-notify";
import { useEffect } from "react";
import { getLocalizedPath, urlConfigs } from "@/common/routes/url-configs";

export const useItemDetailPageVM = ({
    donorEmail,
    itemId,
}: {
    donorEmail: string;
    itemId: string;
}) => {
    const router = useRouter();
    const locale = useLocale();
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


    return {
      control,
      handleSubmit,
      errors,
      onSubmit,
      method,
    }
}