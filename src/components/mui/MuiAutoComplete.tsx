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
    options: {
        value: string;
        label: string;
        subLabel?: string; 
        icon?: React.ReactNode;
    }[];
    onChange?: (value: string | null) => void;
    onInputChange?: (_: any, newValue: string) => void;
    className?: string;
    selectIcon?: React.ReactNode;
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
    inputValue,
    setInputValue, // New prop to update inputValue state
}: MuiAutocompleteProps<TFieldValues, TName> & {
    inputValue?: string;
    setInputValue?: (value: string) => void; // Function to update inputValue 
}) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState }) => (
                <Autocomplete
                    options={options}
                    getOptionLabel={(option) => typeof option === "string" ? option : option.label} // Handle freeSolo text
                    value={options?.find(option => option?.value === field?.value) || null}
                    inputValue={inputValue} // Bind inputValue
                    onChange={(_, newValue) => {
                        if (typeof newValue === "string") {
                            field.onChange(newValue); // Handle freeSolo input
                            onChange?.(newValue);
                            setInputValue?.(newValue);
                        } else {
                            field.onChange(newValue ? newValue.value : "");
                            onChange?.(newValue ? newValue.value : null);
                            setInputValue?.(newValue ? newValue.label : "");
                        }
                    }}
                    onInputChange={(_, newValue) => {
                        setInputValue?.(newValue); // Keep typed value
                        onInputChange?.(_, newValue);
                    }}
                    freeSolo // Allows entering custom values
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
                                        {selectIcon} {/* Always show the selectIcon */}
                                    </InputAdornment>
                                ),
                            }}
                        />
                    )}
                    // renderOption={(props, option) => (
                    //     <li {...props} key={typeof option === "string" ? option : option.value} className="flex gap-3 items-start p-2">
                    //         {typeof option !== "string" && option.icon}
                    //         {typeof option === "string" ? option : option.label}
                    //         {typeof option === "string" ? option : option.subLabel}

                    //     </li>
                    // )}
                    renderOption={(props, option) => (
                        <li {...props} key={typeof option === "string" ? option : option.value} className="flex gap-3 items-center p-2">
                            {typeof option !== "string" && option.icon}
                            <div>
                                <div>{typeof option === "string" ? option : option.label}</div>
                                {typeof option !== "string" && option.subLabel && (
                                    <div className="text-gray-500 text-sm">{option.subLabel}</div>
                                )}
                            </div>
                        </li>
                    )}

                />
            )}
        />
    );
};


export default MuiAutocomplete;
