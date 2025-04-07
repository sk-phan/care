import { useForm } from 'react-hook-form';
import { fireEvent, render, screen } from '@testing-library/react';

import TextArea from './text-area';
import { FormRules } from '@/common/types/form/form-field.type';

const TextAreaWrapper = ({ label, rules } : { label?: string; rules?: FormRules }) => {
    const { control,formState: { errors } } = useForm({ mode: 'all', defaultValues: { description: '' } });
    return (
        <TextArea 
            control={control} 
            name='description' 
            label={label}
            rules={rules}
            errors={errors}
        />
    );
}
describe('TextArea', () => {
    test('Given a TextArea component, when it is rendered, then it should display the input', () => {
        render(<TextAreaWrapper />);

        const input = screen.getByRole('textbox')
        expect(input).toBeInTheDocument();
    });

    test('Given the input field is empty, them it should display error message when field is required', async () => {
        render(<TextAreaWrapper rules={{ required: 'This field is required' }} />);
    
        const input = screen.getByRole('textbox');
        fireEvent.change(input, 'Testing');
        fireEvent.change(input, '');
        fireEvent.blur(input);

        const errorMessage = await screen.findByText('This field is required');
        expect(errorMessage).toBeInTheDocument();
    });    
})