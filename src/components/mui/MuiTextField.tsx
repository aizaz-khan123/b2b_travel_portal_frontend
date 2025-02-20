import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface MuiTextFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
  control: Control<TFieldValues>;
  name: TName;
  label: string;
  type?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  className?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const MuiTextField = <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({
  control,
  name,
  label,
  type = "text",
  placeholder,
  onChange,
  className,
  startIcon,
  endIcon,
}: MuiTextFieldProps<TFieldValues, TName>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          type={type}
          fullWidth
          label={label}
          placeholder={placeholder}
          className={className}
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
          onChange={(event) => {
            field.onChange(event.target.value);
            onChange?.(event.target.value);
          }}
          value={field.value || ""}
          InputProps={{
            startAdornment: startIcon && (
              <InputAdornment position="start">{startIcon}</InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                {field.value && (
                  <IconButton
                    onClick={() => {
                      field.onChange(""); // Clear input
                      onChange?.("");
                    }}
                    size="small"
                  >
                    <CloseIcon />
                  </IconButton>
                )}
                {endIcon}
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};

export default MuiTextField;
