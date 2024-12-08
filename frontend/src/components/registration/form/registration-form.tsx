"use client";

import { FormProvider, useForm } from "react-hook-form";
import RegistrationFormFields from "./registration-form-fields";

const RegistrationForm = () => {
    const method = useForm({ 
        defaultValues: {
            title: '',
            description: '',
            condition: 'like-new',
            image: '',
            city: 'Helsinki',
            country: 'Finland',
            category: 'toy',
            status: 'available'
        },
        mode: "all"
    })
    return (
        <FormProvider {...method}>
            <form>
                <RegistrationFormFields />
            </form>
        </FormProvider>
    )
};

export default RegistrationForm;