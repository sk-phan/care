import TextInput from "@/components/common/TextInput";
import { useFormContext } from "react-hook-form";

const RegistrationFormFields = () => {
    const { control } = useFormContext();

    return (
        <>
            <TextInput 
                control={control}
                name="title"
                placeholder="Title"           
            />
            
        </>
    )
};

export default RegistrationFormFields;