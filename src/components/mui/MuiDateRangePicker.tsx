import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";
import { TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import dayjs, { Dayjs } from "dayjs";

interface MuiDateRangePickerProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
  control: Control<TFieldValues>;
  name: TName;
  startLabel?: string;
  endLabel?: string;
  onChange?: (value: [string | null, string | null]) => void;
  className?: string;
  disableEndDate?: boolean;
}

const MuiDateRangePicker = <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({
  control,
  name,
  startLabel = "Start Date",
  endLabel = "End Date",
  onChange,
  className,
  disableEndDate = false
}: MuiDateRangePickerProps<TFieldValues, TName>) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => (
          <DateRangePicker
            value={
              field.value
                ? [dayjs(field.value[0]), dayjs(field.value[1])]
                : [null, null]
            }
            onChange={(newValue: [Dayjs | null, Dayjs | null]) => {
              const formattedRange: [string | null, string | null] = [
                newValue[0] ? newValue[0].format("YYYY-MM-DD") : null,
                newValue[1] ? newValue[1].format("YYYY-MM-DD") : null,
              ];
              field.onChange(formattedRange);
              onChange?.(formattedRange);
            }}
            localeText={{ start: startLabel, end: endLabel }}
            shouldDisableDate={(date, position) =>
              disableEndDate && position === "end"
            }
            slotProps={{
              textField: {
                className,
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

export default MuiDateRangePicker;
