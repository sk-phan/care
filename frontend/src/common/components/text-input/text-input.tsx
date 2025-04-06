import { TextField } from '@mui/material';
import { Controller,FieldValues } from 'react-hook-form';
import { TextInputProps } from './text-input.type';

const TextInput = <T extends FieldValues>({
    rules,
    name,
    control,
    placeholder,
    ...props 
}: TextInputProps<T>) => {
    
    return (
        <Controller
            name={name} 
            control={control}
            rules={rules}
            render={({ field, fieldState }) => (
                <TextField 
                    {...field}
                    error={!!fieldState.error}
                    helperText={fieldState?.error?.message}
                    {...props}
                />
            )}
        />
    );
};

export default TextInput;
