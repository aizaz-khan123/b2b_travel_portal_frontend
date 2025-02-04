import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";
import {
    MenuItem,
    TextField,
    InputAdornment,
    IconButton,
    ListItemIcon,
    ListItemText,
    Box,
} from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import CloseIcon from "@mui/icons-material/Close";

interface MuiDropdownProps<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
    control: Control<TFieldValues>;
    name: TName;
    label: string;
    options: { value: string; label: string; icon?: React.ReactNode }[];
    onChange?: (value: string) => void;
    className?: string;
}

const MuiDropdown = <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({
    control,
    name,
    label,
    options,
    onChange,
    className,
}: MuiDropdownProps<TFieldValues, TName>) => {
    return (
        <>
            {/* <Box>
                <TextField
                    select
                    fullWidth
                    label={label}
                    value={selectedValue}
                    onChange={handleChange}
                    variant="outlined"
                    SelectProps={{
                        displayEmpty: true,
                        renderValue: (value) =>
                            value ? options.find((opt) => opt.code === value)?.city : label,
                    }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <FlightTakeoffIcon color="success" />
                            </InputAdornment>
                        ),
                        endAdornment: selectedValue && (
                            <InputAdornment position="end">
                                <IconButton onClick={handleClear} size="small">
                                    <CloseIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                >
                    {options.map((option) => (
                        <MenuItem key={option.code} value={option.code}>
                            <ListItemIcon>
                                <FlightTakeoffIcon color="success" />
                            </ListItemIcon>
                            <ListItemText primary={`${option.city} ${option.code}`} secondary={option.name} />
                        </MenuItem>
                    ))}
                </TextField>
            </Box> */}
            <Controller
                control={control}
                name={name}
                render={({ field, fieldState }) => (
                    <TextField
                        {...field}
                        select
                        fullWidth
                        label={label}
                        className={className}
                        error={!!fieldState.error}
                        helperText={fieldState.error?.message}
                        onChange={(event) => {
                            field.onChange(event.target.value);
                            onChange?.(event.target.value);
                        }}
                        value={field.value || ""}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <FlightTakeoffIcon color="success" />
                                </InputAdornment>
                            ),
                            endAdornment: field.value && (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => {
                                            field.onChange(""); // Clear selection
                                            onChange?.("");
                                        }}
                                        size="small"
                                    >
                                        <CloseIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    >
                        {options.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.icon && (
                                    <ListItemIcon sx={{ minWidth: 36 }}>{option.icon}</ListItemIcon>
                                )}
                                <ListItemText primary={option.label} />
                            </MenuItem>
                        ))}
                        {/* {options.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                <ListItemIcon>
                                    <FlightTakeoffIcon color="success" />
                                </ListItemIcon>
                                <ListItemText primary={`${option.value} ${option.value}`} secondary={option.value} />
                            </MenuItem>
                        ))} */}
                    </TextField>

                )}
            />
        </>

    );
};

export default MuiDropdown;
