import { FormProvider, UseFormReturn } from "react-hook-form";

import TextInput from "@/common/components/form/text-input";
import TextArea from "@/common/components/form/text-area";

import { Button } from "@mui/material";
import { isValidEmail } from "@/utils/form-validations/form-validations.utils";

import { ItemContactFormData } from "./item-contact-form.type";
import { useTranslations } from "next-intl";
import { FieldErrors, UseFormHandleSubmit } from "react-hook-form";
import { Control } from "react-hook-form";

type ItemContactFormProps = {
    control: Control<ItemContactFormData>;
    handleSubmit: UseFormHandleSubmit<ItemContactFormData>;
    errors: FieldErrors<ItemContactFormData>;
    onSubmit: (data: ItemContactFormData) => void;
    method: UseFormReturn<ItemContactFormData>;
}

const ItemContactForm = ({ control, handleSubmit, errors, onSubmit,method } : ItemContactFormProps) => {
    const tCommon = useTranslations("common");
    const tContactForm = useTranslations("donated-items.item-contact-form");

    return (
        <FormProvider {...method}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col xl:flex-row">
                    <div className="xl:w-1/2 xl:mr-6">
                        <TextInput 
                            fullWidth
                            name="name" 
                            control={control} 
                            label={tCommon("form.name")}
                            rules={{
                                required: tCommon("form.required"),
                            }}
                            error={!!errors.name}
                            sx={{
                                '& .MuiInputBase-root': {
                                    backgroundColor: '#fff', 
                                },
                            }}
                        />
                    </div>
                    <div className="mt-6 xl:mt-0 xl:w-1/2">
                        <TextInput 
                            fullWidth
                            name="email" 
                            label={tCommon("form.email")}   
                            control={control} 
                            rules={{
                                required: tCommon("form.required"),
                                validate: {
                                    emailValidation: isValidEmail || tCommon("form.invalid-email")
                                }
                            }} 
                            placeholder="Email"
                            error={!!errors.email}
                            sx={{
                                '& .MuiInputBase-root': {
                                    backgroundColor: '#fff', 
                                },
                            }}
                        />
                    </div>
                </div>
                <div className="w-full mt-6">
                    <TextArea 
                        name="message" 
                        control={control} 
                        rows={10}
                        placeholder={tContactForm("message-placeholder")}
                    />
                </div>
                <div className="mt-4">
                    <Button 
                        fullWidth
                        type="submit"
                        variant="contained"
                    >   
                        {tCommon("common.send")}
                    </Button>
                </div>
            </form>
        </FormProvider>
    )
}

export default ItemContactForm;