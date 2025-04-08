import { ItemCreateParams } from "@/common/types/item/item.type";
import { FormProvider, useForm } from "react-hook-form";
import CreateDonatedItemFormFields from "./create-donated-item-form-fields";
import { render, screen } from "@testing-library/react";

const FormWrapper = () => {
    const form = useForm<ItemCreateParams>({
        defaultValues: {
            name: '',
            email: '',
            title: '',
            description: '',
            condition: 'like-new',
            city: 'helsinki',
            category: 'toy',
        },
        mode: 'all'
    });

    return (
        <FormProvider  {...form}>
            <CreateDonatedItemFormFields />
        </FormProvider>
    );
};

jest.mock('@/app/i18n/use-locale', () => ({
    __esModule: true,
    default: jest.fn(() => ({
        locale: 'en',
    })),
}));

describe('CreateDonatedItemFormFields', () => {
    test('Given the create donated item form fields, when it is rendered, then it should display the fields', () => {
        render(<FormWrapper />);

        const nameField = screen.getByRole('textbox', { name: /name/i });
        expect(nameField).toBeInTheDocument();

        const emailField = screen.getByRole('textbox', { name: /email/i });
        expect(emailField).toBeInTheDocument();

        const titleField = screen.getByRole('textbox', { name: /title/i });
        expect(titleField).toBeInTheDocument();

        const cityField = screen.getByLabelText(/city/i);
        expect(cityField).toBeInTheDocument();

        const categoryField = screen.getByLabelText(/category/i);
        expect(categoryField).toBeInTheDocument();

        const descriptionField = screen.getByRole('textbox', { name: /description/i });
        expect(descriptionField).toBeInTheDocument();
    });    
})
