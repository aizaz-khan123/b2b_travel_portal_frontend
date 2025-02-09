import {
    Autocomplete,
    InputAdornment,
    TextField
} from "@mui/material";
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";
import './mui.css';

interface MuiAutocompleteProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
    control: Control<TFieldValues>;
    name: TName;
    label: string;
    options: { value: string; label: string; icon?: React.ReactNode }[];
    onChange?: (value: string | null) => void;
    onInputChange?: (_: any, newValue: string) => void;
    className?: string;
    selectIcon?: React.ReactNode;
    inputValue?: string; // Mark as optional
    setInputValue?: (value: string) => void; // Mark as optional
}

const MuiAutocomplete = <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({
    control,
    name,
    label,
    options,
    onChange,
    onInputChange,
    className,
    selectIcon,
    inputValue = '', // Provide a default empty string
    setInputValue = () => {}, // Provide a no-op function
}: MuiAutocompleteProps<TFieldValues, TName>) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState }) => {
                const selectedOption = options.find(option => option.value === field.value);

                return (
                    <Autocomplete
                        options={options}
                        getOptionLabel={(option) => option.label}
                        value={selectedOption || null}
                        inputValue={inputValue || (selectedOption ? selectedOption.label : '')} // Ensure selected value is reflected
                        onInputChange={(_, newValue) => {
                            setInputValue(newValue);
                            onInputChange?.(_, newValue);
                        }}
                        onChange={(_, newValue) => {
                            field.onChange(newValue ? newValue.value : "");
                            onChange?.(newValue ? newValue.value : null);
                            setInputValue(newValue ? newValue.label : ""); // Update input field after selection
                        }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label={label}
                                className={`${className}`}
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                                InputProps={{
                                    ...params.InputProps,
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            {selectIcon}
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        )}
                        renderOption={(props, option) => (
                            <li {...props} key={option.value} className="flex gap-3 items-start p-2">
                                {option.icon}
                                {option.label}
                            </li>
                        )}
                    />
                );
            }}
        />
    );
};



export default MuiAutocomplete;
