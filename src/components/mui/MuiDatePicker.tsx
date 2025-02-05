import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";
import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

interface MuiDatePickerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
  control: Control<TFieldValues>;
  name: TName;
  label: string;
  onChange?: (value: string | null) => void;
  className?: string;
}

const MuiDatePicker = <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({
  control,
  name,
  label,
  onChange,
  className,
}: MuiDatePickerProps<TFieldValues, TName>) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => (
          <DatePicker
            {...field}
            label={label}
            className={className}
            value={field.value ? dayjs(field.value) : null}
            onChange={(newValue) => {
              const formattedDate = newValue ? newValue.format("YYYY-MM-DD") : null;
              field.onChange(formattedDate);
              onChange?.(formattedDate);
            }}
            slotProps={{
              textField: {
                fullWidth: true,
                error: !!fieldState.error,
                helperText: fieldState.error?.message,
              } as any,
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default MuiDatePicker;
