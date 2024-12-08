import SelectField from "@/components/common/SelectField";
import TextInput from "@/components/common/TextInput";
import { useFormContext } from "react-hook-form";

const RegistrationFormFields = () => {
    const { control } = useFormContext();

    return (
        <div className="flex flex-col gap-5">
            <TextInput 
                control={control}
                name="title"
                placeholder="Title" 
                label="Title"   
                required
            />
            <SelectField 
                control={control}
                name="condition"
                label="Condition"   
                options={[
                {   value: "like-new",
                    label: "like new"}
                ]}  
                required       
            />
            <SelectField 
                control={control}
                name="city"
                label="City"   
                options={[
                {   value: "like-new",
                    label: "like new"}
                ]}        
                required 
            />
            <SelectField 
                control={control}
                name="category"
                label="Category"   
                options={[
                {   value: "like-new",
                    label: "like new"}
                ]}        
                required 
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