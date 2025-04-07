import { TextFieldProps } from "@mui/material";
import { Control, FieldValues, Path } from "react-hook-form";

export type FormRules = { 
    required?: boolean | string;
    minLength?: { value: number; message: string };
    maxLength?: { value: number; message: string };
    pattern?: { value: RegExp; message: string };
    validate?: { [key: string]: (value: any) => boolean | string };
}

export type InputProps<T extends FieldValues> = Omit<TextFieldProps, 'name'> & {
    rules?: FormRules;
    name: Path<T>; 
    control: Control<T>; 
    placeholder?: string;
};