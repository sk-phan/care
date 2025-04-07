import React from 'react';
import { fireEvent, render, screen, } from '@testing-library/react';
import { useForm, FormProvider } from 'react-hook-form';

import SelectField from './select-field';

const options = [
    { label: 'Helsinki', value: 'helsinki' },
    { label: 'Espoo', value: 'espoo' },
    { label: 'Vantaa', value: 'vantaa' },
];

const FormWrapper = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
    const methods = useForm({ defaultValues: { city: undefined } });

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <SelectField
                    name="city"
                    control={methods.control}
                    label="City"
                    options={options}
                    placeholder="Select a city"
                />
            </form>
        </FormProvider>
    );
};

describe('SelectField', () => {
    test('Given the select field, then it should render the field', async () => {
        const onSubmit = jest.fn();

        render(<FormWrapper onSubmit={onSubmit} />);

        const selectField = screen.getByTestId('select-field');
        expect(selectField).toBeInTheDocument();
    });

    test('Given the select field, then it should render the options', async () => {
        const onSubmit = jest.fn();

        render(<FormWrapper onSubmit={onSubmit} />);

        const selectField = screen.getByLabelText('City');
        expect(selectField).toBeInTheDocument();

        fireEvent.mouseDown(selectField);

        options.forEach(async (option) => {
            const label = await screen.findByText(option.label); 
            expect(label).toBeInTheDocument();
        })
    });
});
