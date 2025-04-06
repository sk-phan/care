import { useForm } from 'react-hook-form';
import { fireEvent, render, screen } from '@testing-library/react';

import TextInput from './text-input';
import { FormRules } from './text-input.type';

const TextInputWrapper = ({ label, rules } : { label?: string; rules?: FormRules }) => {
    const { control } = useForm({ mode: 'all', defaultValues: { venueSlug: '' } });
    return (
        <TextInput 
            control={control} 
            name='venueSlug' 
            label={label}
            rules={rules}
        />
    );
}
describe('TextInput', () => {
    test('Given a TextInput component, when it is rendered, then it should display the input', () => {
        render(<TextInputWrapper />);

        const input = screen.getByRole('textbox')
        expect(input).toBeInTheDocument();
    });

    test('Given the input label, when it is rendered, then it should display the label', () => {
        render(<TextInputWrapper label='Testing'/>);

        const inputLabel = screen.getByLabelText('Testing')
        expect(inputLabel).toBeInTheDocument();
    });

    test('Given the input without label, when it is rendered, then it should not display the label', () => {
        render(<TextInputWrapper />);

        const inputLabel = screen.queryByLabelText('Testing')
        expect(inputLabel).not.toBeInTheDocument();
    });

    test('Given the input field is empty, them it should display error message when field is required', async () => {
        render(<TextInputWrapper rules={{ required: 'This field is required' }} />);
    
        const input = screen.getByRole('textbox');
        fireEvent.change(input, 'Testing');
        fireEvent.change(input, '');
        fireEvent.blur(input);

        const errorMessage = await screen.findByText('This field is required');
        expect(errorMessage).toBeInTheDocument();
    });    
})