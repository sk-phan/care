import { useFormContext } from "react-hook-form";
import cities from "@/common/json/cities.json";
import conditions from "@/common/json/item-conditions.json";
import categories from "@/common/json/categories.json";

import SelectField from "@/common/components/select-field";
import TextInput from "@/common/components/text-input";
import useLocale from "@/app/i18n/use-locale";
import { useTranslation } from "@/app/i18n";
import { emailPattern } from "@/utils/form-validations/form-validations.utils";

const RegistrationFormFields = () => {
    const { control, formState: {errors} } = useFormContext();
    const { locale } = useLocale();
    const { t } = useTranslation(locale);

    return (
        <div className="flex flex-col gap-5 form-fields-margin-bottom">
            <TextInput 
                control={control}
                name="name"
                label={t('form.name')}   
                required
                rules={{
                    required: t('form.required'),
                }}
                error={!!errors.name}
            />
            <TextInput 
                control={control}
                name="email"
                label={t('form.email')}   
                required              
                rules={{
                    required: t('form.required'),
                    pattern: {
                        value: emailPattern,
                        message: t('form.invalid-email'), 
                    },
                }}
                error={!!errors.email}
            />
            <TextInput 
                control={control}
                name="title"
                label={t('form.title')}   
                required
                rules={{
                    required: t('form.required'),
                }}
                error={!!errors.title}
            />
            <SelectField 
                options={cities}
                control={control}
                name="city"
                label={t("form.city")}
                rules={{
                    required: t('form.required'),
                }}
            />
            <SelectField 
                control={control}
                name="category"
                label={t("form.category")}   
                options={categories}        
            />
            <SelectField 
                control={control}
                name="condition"
                label={t("form.condition")}   
                options={conditions}        
            />
            <TextInput 
                control={control}
                name="description"
                label={t("form.description")}   
                multiline
                rows={5}
            />
            
        </div>
    )
};

export default RegistrationFormFields;