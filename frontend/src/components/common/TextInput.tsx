import { FieldError, Controller, Control, FieldValues, Path } from 'react-hook-form';

type TextInputProps<T extends FieldValues> = {
    rules?: {
        required?: boolean | string;
        minLength?: { value: number; message: string };
        maxLength?: { value: number; message: string };
        pattern?: { value: RegExp; message: string };
        validate?: { [key: string]: (value: any) => boolean | string };
    };
    name: Path<T>; 
    control: Control<T>; 
    error?: FieldError; 
    placeholder: string;
};

const TextInput = <T extends FieldValues>({
    rules, 
    name, 
    control,
    error,
    placeholder
}: TextInputProps<T>) => {
    
    return (
        <>
        <Controller
            name={name} 
            control={control}
            rules={rules}
            render={({ field }) => (
                <input 
                    {...field} 
                    placeholder={placeholder}
                    className="
                    rounded-full 
                    bg-white border 
                    border-gray-900 
                    text-gray-900 
                    text-sm 
                    focus:ring-blue-500 
                    focus:border-blue-500
                    block w-full 
                    p-2.5 
                    outline-none 
                    dark:bg-gray-700 
                    dark:border-gray-600 
                    dark:placeholder-gray-400 
                    dark:text-white 
                    dark:focus:ring-blue-500 
                    dark:focus:border-blue-500" 
                />
            )}
        />
        {error && <span className='text-red-500 text-xs'>{error.message}</span>}
        </>
    );
};

export default TextInput;
