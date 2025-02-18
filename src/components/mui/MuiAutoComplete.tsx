import {
    Autocomplete,
    InputAdornment,
    TextField
} from "@mui/material";
import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";
import './mui.css';


// interface MuiAutocompleteProps<
//     TFieldValues extends FieldValues = FieldValues,
//     TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
// > {
//     control: Control<TFieldValues>;
//     name: TName;
//     label: string;
//     options: {
//         value: string;
//         label: string;
//         subLabel?: string;
//         icon?: React.ReactNode;
//     }[];
//     onChange?: (value: string | null) => void;
//     onInputChange?: (_: any, newValue: string) => void;
//     className?: string;
//     selectIcon?: React.ReactNode;
//     inputValue?: string;
//     setInputValue?: (value: string) => void;
//     selectLabelInsteadOfValue?: boolean;
//     selectLabelValueForOnchange?: (option: any) => string; // New prop to pick a specific part of the label
// }

// const MuiAutocomplete = <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({
//     control,
//     name,
//     label,
//     options,
//     onChange,
//     onInputChange,
//     className,
//     selectIcon,
//     inputValue,
//     setInputValue,
//     selectLabelInsteadOfValue = false,
//     selectLabelValueForOnchange,
// }: MuiAutocompleteProps<TFieldValues, TName>) => {
//     return (
//         <Controller
//             control={control}
//             name={name}
//             render={({ field, fieldState }) => (
//                 <Autocomplete
//                     options={options}
//                     getOptionLabel={(option) => typeof option === "string" ? option : option.label}
//                     value={options?.find(option => option?.value === field?.value) || null}
//                     inputValue={inputValue}
//                     onChange={(_, newValue) => {
//                         console.log('New Value:', newValue); // Debug log
//                         if (!newValue) {
//                             field.onChange("");
//                             onChange?.("");
//                             setInputValue?.("");
//                         } else if (typeof newValue === "string") {
//                             field.onChange(newValue);
//                             onChange?.(newValue);
//                             setInputValue?.(newValue);
//                         } else {
//                             const selectedValue = selectLabelValueForOnchange
//                                 ? selectLabelValueForOnchange(newValue)
//                                 : (selectLabelInsteadOfValue ? newValue.label : newValue.value);

//                             console.log('Selected Value:', selectedValue); // Debug log
//                             field.onChange(selectedValue);
//                             onChange?.(selectedValue);
//                             setInputValue?.(newValue.label);
//                         }
//                     }}

//                     onInputChange={(_, newValue) => {
//                         setInputValue?.(newValue);
//                         onInputChange?.(_, newValue);
//                     }}
//                     freeSolo
//                     renderInput={(params) => (
//                         <TextField
//                             {...params}
//                             label={label}
//                             className={`${className}`}
//                             error={!!fieldState.error}
//                             helperText={fieldState.error?.message}
//                             InputProps={{
//                                 ...params.InputProps,
//                                 startAdornment: (
//                                     <InputAdornment position="start">
//                                         {selectIcon}
//                                     </InputAdornment>
//                                 ),
//                             }}
//                         />
//                     )}
//                     renderOption={(props, option) => (
//                         <li {...props} key={typeof option === "string" ? option : option.value} className="flex gap-3 items-center p-2">
//                             {typeof option !== "string" && option.icon}
//                             <div>
//                                 <div>{typeof option === "string" ? option : option.label}</div>
//                                 {typeof option !== "string" && option.subLabel && (
//                                     <div className="text-gray-500 text-sm">{option.subLabel}</div>
//                                 )}
//                             </div>
//                         </li>
//                     )}
//                 />
//             )}
//         />
//     );
// };


// export default MuiAutocomplete;


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
    inputValue?: string;
    setInputValue?: (value: string) => void;
    selectLabelInsteadOfValue?: boolean; // New prop to determine selection behavior
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
    setInputValue,
    selectLabelInsteadOfValue = false, // Default to false (select value by default)
}: MuiAutocompleteProps<TFieldValues, TName>) => {
    return (
        <Controller
            control={control}
            name={name}
            render={({ field, fieldState }) => (
                <Autocomplete
                    options={options}
                    getOptionLabel={(option) => typeof option === "string" ? option : option.label}
                    value={options?.find(option => option?.value === field?.value) || null}
                    inputValue={inputValue}
                    onChange={(_, newValue) => {
                        if (typeof newValue === "string") {
                            field.onChange(newValue);
                            onChange?.(newValue);
                            setInputValue?.(newValue);
                        } else {
                            const selectedValue = newValue ? (selectLabelInsteadOfValue ? newValue.label : newValue.value) : "";
                            field.onChange(selectedValue);
                            onChange?.(selectedValue);
                            setInputValue?.(newValue ? newValue.label : "");
                        }
                    }}
                    onInputChange={(_, newValue) => {
                        setInputValue?.(newValue);
                        onInputChange?.(_, newValue);
                    }}
                    freeSolo
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

