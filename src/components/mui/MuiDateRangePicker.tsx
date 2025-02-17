import { Control, Controller, FieldPath, FieldValues } from "react-hook-form";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import dayjs, { Dayjs } from "dayjs";

interface MuiDateRangePickerProps<
  TFieldValues extends FieldValues = FieldValues
> {
  control: Control<TFieldValues>;
  startName: FieldPath<TFieldValues>;
  endName: FieldPath<TFieldValues>;
  startLabel?: string;
  endLabel?: string;
  onChange?: (departure: string | null, returnDate: string | null) => void;
  className?: string;
  disableEndDate?: boolean;
}

const MuiDateRangePicker = <TFieldValues extends FieldValues>({
  control,
  startName,
  endName,
  startLabel = "Departure Date",
  endLabel = "Return Date",
  onChange,
  className,
  disableEndDate = false,
}: MuiDateRangePickerProps<TFieldValues>) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        control={control}
        name={startName}
        render={({ field: startField }) => (
          <Controller
            control={control}
            name={endName}
            render={({ field: endField }) => (
              <DateRangePicker
                value={[
                  startField.value ? dayjs(startField.value) : null,
                  endField.value ? dayjs(endField.value) : null,
                ]}
                onChange={(newValue: [Dayjs | null, Dayjs | null]) => {
                  const formattedDeparture = newValue[0]
                    ? newValue[0].format("YYYY-MM-DD")
                    : null;
                  const formattedReturn = newValue[1]
                    ? newValue[1].format("YYYY-MM-DD")
                    : null;

                  startField.onChange(formattedDeparture);
                  endField.onChange(formattedReturn);

                  onChange?.(formattedDeparture, formattedReturn);
                }}
                localeText={{ start: startLabel, end: endLabel }}
                shouldDisableDate={(date, position) =>
                  disableEndDate && position === "end"
                }
                slotProps={{
                  textField: ({ position }) => ({
                    className: `${className} ${
                      disableEndDate && position === "end"
                        ? "bg-gray-200 rounded-lg m-10"
                        : ""
                    }`,
                    fullWidth: true,
                    InputProps: {
                      readOnly: disableEndDate && position === "end",
                    },
                    disableOpenPicker: disableEndDate && position === "end",
                  }) as any,
                }}
              />
            )}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default MuiDateRangePicker;
