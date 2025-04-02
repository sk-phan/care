import { TextField, TextFieldProps } from '@mui/material';
import { Controller, Control, FieldValues, Path } from 'react-hook-form';

type TextInputProps<T extends FieldValues> = Omit<TextFieldProps, 'name'> & {
    rules?: { 
        required?: boolean | string;
        minLength?: { value: number; message: string };
        maxLength?: { value: number; message: string };
        pattern?: { value: RegExp; message: string };
        validate?: { [key: string]: (value: any) => boolean | string };
    };
    name: Path<T>; 
    control: Control<T>; 
    placeholder?: string;
};

const TextInput = <T extends FieldValues>({
    rules,
    name,
    control,
    placeholder,
    ...props 
}: TextInputProps<T>) => {
    
    return (
        <>
        <Controller
            name={name} 
            control={control}
            rules={rules}
            render={({ field, fieldState }) => (
                <TextField 
                    {...field}
                    id="outlined-basic" 
                    error={!!fieldState.error}
                    helperText={fieldState?.error?.message}
                    {...props}
                />
            )}
        />
        </>
    );
};

export default TextInput;
