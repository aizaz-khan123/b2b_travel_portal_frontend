"use client";

import { ReactElement, forwardRef, useMemo } from "react";
import Select, {
    type GroupBase,
    type OnChangeValue,
    type OptionsOrGroups,
    type Props as ReactSelectProps,
} from "react-select";

type ValueType = string | number;

type SelectElementOption<T> = {
    value: ValueType;
} & T;

export type SelectElementOptions<T> = OptionsOrGroups<SelectElementOption<T>, GroupBase<SelectElementOption<T>>>;

export type SelectElementProps<T = unknown, IsMulti extends boolean = false> = Omit<
    ReactSelectProps<SelectElementOption<T>, IsMulti>,
    "options" | "onChange" | "children" | "value"
> & {
    options: SelectElementOptions<T>;
    children?: (option: SelectElementOption<T>) => ReactElement;
    onChange?: (value: ValueType | Array<ValueType>) => void;
    size?: "sm" | "md" | "lg";
    value?: string | string[];
};

const SelectElement = forwardRef(
    <T = unknown, IsMulti extends boolean = false>(bProps: SelectElementProps<T, IsMulti>, ref: any) => {
        const { options, children, onChange, value, size = "md", ...props } = bProps;

        const handleChange = (newValue: OnChangeValue<SelectElementOption<T>, IsMulti>) => {
            if (onChange && newValue) {
                if (newValue instanceof Array) {
                    onChange(newValue.map((v) => v.value));
                } else {
                    onChange(newValue.value);
                }
            }
        };

        const valueObject = useMemo(() => {
            const nOptions: SelectElementOption<T>[] = [];
            (options instanceof Array ? options : [options]).forEach((option) => {
                if ("options" in option) {
                    nOptions.push(...option.options);
                } else if ("value" in option) {
                    return nOptions.push(option);
                }
            });
            const nValue = value != undefined ? (value instanceof Array ? value : [value]) : undefined;
            if (nValue == undefined) {
                return [];
            }
            const checkInArray = <T,>(value: T, array: T[]) => {
                return array.includes(value);
            };
            return nOptions.filter((option) => {
                return checkInArray(option.value, nValue);
            });
        }, [value]);

        // Custom styles based on size
        const customStyles = useMemo(() => {
            const sizeStyles = {
                sm: { control: (base: any) => ({ ...base, minHeight: '2.3rem', height: '2.3rem' }) },
                md: { control: (base: any) => ({ ...base, minHeight: '3rem', height: '3rem' }) },
                lg: { control: (base: any) => ({ ...base, minHeight: '4rem', height: '4rem' }) },
            };

            return {
                ...sizeStyles[size],
                // Additional customizations can go here
                valueContainer: (base: any) => ({ ...base, padding: '0 8px' }),
                singleValue: (base: any) => ({ ...base, fontSize: size === 'sm' ? '0.875rem' : size === 'lg' ? '1.125rem' : '1rem' }),
            };
        }, [size]);

        return (
            <Select<SelectElementOption<T>, IsMulti>
                {...props}
                ref={ref}
                options={options}
                value={valueObject}
                formatOptionLabel={children}
                onChange={handleChange}
                styles={customStyles} // Apply custom styles
                className={`react-select ${props.className}`}
                classNamePrefix="react-select"
            />
        );
    },
);


SelectElement.displayName = "SE";

export default SelectElement;
