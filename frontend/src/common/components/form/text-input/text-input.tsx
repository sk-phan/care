import { TextField } from '@mui/material';
import { Controller,FieldValues } from 'react-hook-form';
import { InputProps } from '@/common/types/form/form-field.type';

const TextInput = <T extends FieldValues>({
    rules,
    name,
    control,
    placeholder,
    ...props 
}: InputProps<T>) => {
    
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
