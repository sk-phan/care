import {  Controller, FieldErrors, FieldValues } from 'react-hook-form';
import FormHelperText from '../form-helper-text';
import { InputProps } from '@/common/types/form/form-field.type';

const TextArea = <T extends FieldValues>({
    rules, 
    name, 
    control,
    errors,
    placeholder,
    rows = 3
}: InputProps<T> & {
    rows?: number;
    errors?: FieldErrors<T>;
}) => {
    const fieldError = errors?.[name];

    return (
        <>
            <Controller
                name={name} 
                control={control}
                rules={rules}
                render={({ field }) => (
                    <textarea 
                        {...field} 
                        rows={rows}
                        placeholder={placeholder}
                        className="
                            rounded 
                            bg-white  
                            border-gray-300 
                            text-gray-950
                            border
                            focus:primary 
                            focus:border-primary
                            block w-full 
                            p-2.5 
                            outline-none
                            text-base
                        " 
                    />
                )}
            />
            {fieldError && <FormHelperText message={fieldError?.message as string} />}
        </>
    );
};

export default TextArea;