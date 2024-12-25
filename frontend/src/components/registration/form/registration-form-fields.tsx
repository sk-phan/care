import { useFormContext } from "react-hook-form";
import cities from "@/common/cities.json";
import conditions from "@/common/item-conditions.json";
import categories from "@/common/categories.json";

import AutoCompleteField from "@/components/common/auto-complete-field";
import SelectField from "@/components/common/select-field";
import TextInput from "@/components/common/TextInput";

const RegistrationFormFields = () => {
    const { control, formState: {errors} } = useFormContext();

    return (
        <div className="flex flex-col gap-5 form-fields-margin-bottom">
            <TextInput 
                control={control}
                name="name"
                label="Name"   
                required
                rules={{
                    required: "This field is required",
                }}
                error={!!errors.name}
            />
            <TextInput 
                control={control}
                name="email"
                label="Email"   
                required              
                rules={{
                    required: "This field is required",
                }}
                error={!!errors.email}
            />
            <TextInput 
                control={control}
                name="title"
                label="Title"   
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
                label="Category"   
                options={categories}        
            />
            <SelectField 
                control={control}
                name="condition"
                label="Condition"   
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