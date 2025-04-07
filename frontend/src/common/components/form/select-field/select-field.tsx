import { InputProps } from '@/common/types/form/form-field.type';
import { BaseSelectProps, FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import { Controller, FieldValues } from 'react-hook-form';

const SelectField = <T extends FieldValues>({
    rules,
    name,
    control,
    placeholder,
    options,
    label,
    ...props 
}: InputProps<T> & BaseSelectProps & {
    options: { label: string; value: string }[];
}) => {
    
    return (
        <Controller
            name={name} 
            control={control}
            rules={rules}
            render={({ field, fieldState }) => (
                <FormControl error={!!fieldState.error}>      
                    <InputLabel data-testid="select-field-label" id="select-field">{label}</InputLabel>
                    <Select
                    data-testid="select-field"
                    labelId="select-field"
                    value={field.value}
                    label={label}
                    onChange={field.onChange}
                    {...props}
                    >
                        { options.map(option => {
                            return (
                                <MenuItem data-testid="select-field-option" key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            )
                        })}
                    </Select>
                    <FormHelperText>{fieldState.error?.message}</FormHelperText>
                </FormControl>
            )}
        />
    );
};

export default SelectField;
