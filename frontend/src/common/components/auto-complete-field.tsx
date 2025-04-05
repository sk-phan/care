import {
    Autocomplete,
    AutocompleteProps,
    FormControl,
    FormHelperText,
    TextField
} from '@mui/material';
import { Controller, Control, FieldValues, Path } from 'react-hook-form';

type AutoCompleteFieldProps<
    TFieldValues extends FieldValues,
    TOption,
    Multiple extends boolean | undefined = false,
    FreeSolo extends boolean | undefined = false
> = {
    name: Path<TFieldValues>;
    control: Control<TFieldValues>;
    label?: string;
    rules?: {
        required?: boolean | string;
        minLength?: { value: number; message: string };
        maxLength?: { value: number; message: string };
        pattern?: { value: RegExp; message: string };
        validate?: { [key: string]: (value: any) => boolean | string };
    };
} & Omit<
    AutocompleteProps<TOption, Multiple, FreeSolo, any>,
    'renderInput' | 'name'
>;

const AutoCompleteField = <
    TFieldValues extends FieldValues,
    TOption,
    Multiple extends boolean | undefined = false,
    FreeSolo extends boolean | undefined = false
>({
    name,
    control,
    label,
    rules,
    ...autocompleteProps
}: AutoCompleteFieldProps<TFieldValues, TOption, Multiple, FreeSolo>) => {
    return (
    <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
            <FormControl fullWidth error={!!fieldState.error}>
            <Autocomplete
                {...field}
                {...autocompleteProps}
                isOptionEqualToValue={(option, value) =>
                    autocompleteProps.isOptionEqualToValue
                    ? autocompleteProps.isOptionEqualToValue(option, value)
                    : option === value
                }
                onChange={(_, value) => field.onChange(value)}
                renderInput={(params) => (
                    <TextField
                    {...params}
                    InputLabelProps={{
                        ...params.InputLabelProps,
                        // 🔐 fix: remove problematic props
                        contentEditable: undefined,
                      }}
                    label={label}
                    error={!!fieldState.error}
                    helperText={fieldState.error?.message}
                    />
                )}
            />
            {fieldState.error && (
                <FormHelperText>{fieldState.error.message}</FormHelperText>
            )}
            </FormControl>
        )}
    />
    );
};

export default AutoCompleteField;
