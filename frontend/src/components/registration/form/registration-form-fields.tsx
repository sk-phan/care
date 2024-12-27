import { useFormContext } from "react-hook-form";
import cities from "@/common/cities.json";
import conditions from "@/common/item-conditions.json";
import categories from "@/common/categories.json";

import AutoCompleteField from "@/components/common/auto-complete-field";
import SelectField from "@/components/common/select-field";
import TextInput from "@/components/common/text-input";
import useLocale from "@/app/i18n/use-locale";
import { useTranslation } from "@/app/i18n";

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
                    required: "This field is required",
                }}
                error={!!errors.name}
            />
            <TextInput 
                control={control}
                name="email"
                label={t('form.email')}   
                required              
                rules={{
                    required: "This field is required",
                }}
                error={!!errors.email}
            />
            <TextInput 
                control={control}
                name="title"
                label={t('form.title')}   
                required
                rules={{
                    required: "This field is required",
                }}
                error={!!errors.title}
            />
            <AutoCompleteField 
                options={cities}
                control={control}
                name="city"
                label="City"
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
                label="Description"   
                multiline
                rows={5}
            />
            
        </div>
    )
};

export default RegistrationFormFields;