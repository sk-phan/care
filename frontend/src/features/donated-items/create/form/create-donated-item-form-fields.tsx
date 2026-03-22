import { useFormContext } from "react-hook-form";
import cities from "@/common/json/cities.json";
import conditions from "@/common/json/item-conditions.json";
import categories from "@/common/json/categories.json";

import SelectField from "@/common/components/form/select-field/select-field";
import TextInput from "@/common/components/form/text-input";
import { emailPattern } from "@/utils/form-validations/form-validations.utils";
import { useTranslations } from "next-intl";

const CreateDonatedItemViewFields = () => {
    const { control, formState: {errors} } = useFormContext();
    const t = useTranslations("common.form");

    return (
        <div data-testid="create-donated-item-form-fields" className="flex flex-col gap-5 form-fields-margin-bottom">
            <TextInput 
                control={control}
                name="name"
                label={t("name")}   
                required
                rules={{
                    required: t("required"),
                }}
                error={!!errors.name}
            />
            <TextInput 
                control={control}
                name="email"
                label={t("email")}   
                required              
                rules={{
                    required: t("required"),
                    pattern: {
                        value: emailPattern,
                        message: t("invalid-email"), 
                    },
                }}
                error={!!errors.email}
            />
            <TextInput 
                control={control}
                name="title"
                label={t("title")}   
                required
                rules={{ required: t("required") }}
                error={!!errors.title}
            />
            <SelectField 
                options={cities}
                control={control}
                name="city"
                label={t("city")}
                rules={{ required: t("required") }}
            />
            <SelectField 
                control={control}
                name="category"
                label={t("category")}   
                options={categories}        
            />
            <SelectField 
                control={control}
                name="condition"
                label={t("condition")}   
                options={conditions}        
            />
            <TextInput 
                control={control}
                name="description"
                label={t("description")}   
                multiline
                rows={5}
            />
            
        </div>
    )
};

export default CreateDonatedItemViewFields;