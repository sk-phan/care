import { BaseSelectProps, FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import { Controller, Control, FieldValues, Path } from 'react-hook-form';

type SelectProps<T extends FieldValues> = BaseSelectProps & {
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
    options: { label: string; value: string }[];
};

const SelectField = <T extends FieldValues>({
    rules,
    name,
    control,
    placeholder,
    options,
    ...props 
}: SelectProps<T>) => {
    
    return (
        <>
        <Controller
            name={name} 
            control={control}
            rules={rules}
            render={({ field, fieldState }) => (
                <FormControl error={!!fieldState.error}>      
                    <InputLabel id="demo-simple-select-disabled-label">{props.label}</InputLabel>  
                    <Select
                    labelId="demo-simple-select-label"
                    value={field.value}
                    label="Age"
                    onChange={field.onChange}
                    {...props}
                    >
                        { options.map(option => {
                            return (
                                <MenuItem 
                                    key={option.value}
                                    value={option.value}>
                                        {option.label}
                                </MenuItem>
                            )
                        })}
                    </Select>
                    <FormHelperText>{fieldState.error?.message}</FormHelperText>
                </FormControl>
            )}
        />
        </>
    );
};

export default SelectField;
