import React from "react";
import { Controller, Control, FieldValues, FieldPath } from "react-hook-form";
import {
  Button,
  IconButton,
  Popover,
  Typography,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import PeopleIcon from "@mui/icons-material/People";

interface TravelersState {
  adult_count: number;
  child_count: number;
  infant_count: number;
}

interface TravelersDropdownProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
  control: Control<TFieldValues>;
  name: TName;
}

const TravelersDropdown = <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({
  control,
  name,
}: TravelersDropdownProps<TFieldValues, TName>) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "travelers-popover" : undefined;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div className="relative">
          <Button
            aria-describedby={id}
            variant="outlined"
            startIcon={<PeopleIcon />}
            onClick={handleClick}
            className="w-full h-[55px]"
            style={{ justifyContent: 'start' }}
          >
            {`${field?.value?.adult_count} Adults | ${field?.value?.child_count} Child | ${field?.value?.infant_count} Infant`}
          </Button>

          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
            sx={{
              width: anchorEl ? anchorEl.clientWidth : "auto", // Set width dynamically
              "& .MuiPaper-root": {
                width: anchorEl ? anchorEl.clientWidth : "auto", // Ensure Popover's Paper has the same width
              },
            }}
          >
            <Box p={2}>
              {[
                { label: "Adult", subtext: "(12 years and above)", type: "adult_count" },
                { label: "Children", subtext: "(2 to 11 years)", type: "child_count" },
                { label: "Infants", subtext: "(0 to less than 2)", type: "infant_count" },
              ].map((item) => (
                <Box
                  key={item.type}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{ mb: 1 }}
                >
                  <Box>
                    <Typography variant="body1">{item.label}</Typography>
                    <Typography variant="caption" color="textSecondary">
                      {item.subtext}
                    </Typography>
                  </Box>

                  <Box display="flex" alignItems="center">
                    <IconButton
                      size="small"
                      onClick={() =>
                        field.onChange({
                          ...field?.value,
                          [item.type]: Math.max(0, field?.value[item.type] - 1),
                        })
                      }
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography sx={{ mx: 1 }}>
                      {field?.value[item?.type as keyof TravelersState]}
                    </Typography>
                    <IconButton
                      size="small"
                      onClick={() =>
                        field.onChange({
                          ...field?.value,
                          [item.type]: field?.value[item?.type] + 1,
                        })
                      }
                    >
                      <AddIcon />
                    </IconButton>
                  </Box>
                </Box>
              ))}
            </Box>
          </Popover>
        </div>
      )}
    />
  );
};

export default TravelersDropdown;
