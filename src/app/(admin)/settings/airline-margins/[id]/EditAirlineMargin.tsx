"use client";

import arrowUpFromLineIcon from "@iconify/icons-lucide/arrow-up-from-line";
import xIcon from "@iconify/icons-lucide/x";
import React from "react";
import { Icon } from "@/components/Icon";
import { Button, Card, CardBody, Form, FormLabel } from "@/components/daisyui";
import { FormInput, FormSelect, FormTextarea, FormToggle } from "@/components/forms";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { routes } from "@/lib/routes";

import { airlineMarginSchemaType, airlineMarginSchema } from "../helpers";
import { useAirlineDropDownQuery, useConnectorDropDownQuery, useShowAirlineMarginQuery, useUpdateAirlineMarginMutation } from "@/services/api";
import Select from "react-select";

type EditAirlineMargin = {
    airlineMarginId: string;
};

const regionOptions = [
    { label: "ALL-SECTORS", value: "ALL-SECTORS" },
    { label: "INTERLINE", value: "INTERLINE" },
    { label: "SOTO", value: "SOTO" },
    { label: "DOMESTIC", value: "DOMESTIC" },
    { label: "CODE-SHARE", value: "CODE-SHARE" },
    { label: "EX-PAKISTAN", value: "EX-PAKISTAN" },
];

const EditAirlineMargin = ({ airlineMarginId }: EditAirlineMargin) => {

    const toaster = useToast();
    const router = useRouter();

    const { data: airlineDropDown } = useAirlineDropDownQuery();
    const { data: connectorDropDown } = useConnectorDropDownQuery();

    const {
        data: airline_margin,
        isSuccess: isAirlineMarginSuccess,
        error,
        isLoading: isShowLoading,
        refetch
    } = useShowAirlineMarginQuery(airlineMarginId, {
        refetchOnMountOrArgChange: true,
    });

    const [updateAirlineMargin, { error: errorAirlineMargin, isLoading: isLoadingAirlineMargin }] = useUpdateAirlineMarginMutation();

    const { control, handleSubmit, setError, reset } = useForm<airlineMarginSchemaType>({
        resolver: zodResolver(airlineMarginSchema),
    });

    useEffect(() => {
        refetch();
    }, []);

    useEffect(() => {
        if (isAirlineMarginSuccess && airline_margin) {
            reset({
                sales_channel:airline_margin.sales_channel,
                airline_id:airline_margin.airline_id,
                region:airline_margin.region.split(", ").map((item: string) => item.trim()),
                margin:airline_margin.margin.toString(),
                margin_type:airline_margin.margin_type,
                sale_start_continue:airline_margin.sale_start_continue,
                sale_end_continue:airline_margin.sale_end_continue,
                travel_start_continue:airline_margin.travel_start_continue,
                travel_end_continue:airline_margin.travel_end_continue,
                rbds:airline_margin.rbds,
                is_apply_on_gross:airline_margin.is_apply_on_gross,
                status:airline_margin.status,
                remarks:airline_margin.remarks
            });
        }
    }, [airline_margin, isAirlineMarginSuccess, reset]);

    const setErrors = (errors: Record<string, any>) => {
        Object.entries(errors).forEach(([key, value]: any[]) => setError(key, { message: value }));
    };

    const onSubmit = handleSubmit(async (data) => {

        const updated_data = {
            _method: 'put',
            ...data
        }
        
        await updateAirlineMargin({ airlineMarginId, updated_data }).then((response: any) => {
            if (response.data?.code == 200) {
                toaster.success(response?.data?.message);
                refetch();
                router.push(routes.apps.settings.airline_margins);
            } else {
                setErrors(errorAirlineMargin?.data?.errors)
            }
        });
    });

    const handleCancel = () => {
        router.back();
    };

    if (isShowLoading) {
        return (
            <div className="flex items-center justify-center h-64">
                <span className="loading loading-spinner loading-lg"></span>
                <p className="ml-2">Loading airline margin details...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center h-64 text-red-500">
                <p>Error fetching bank account details.</p>
                <p>{error?.message || "Something went wrong!"}</p>
            </div>
        );
    }

    return (
        <div>
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-1">
            <Card className="bg-base-100">
                    <CardBody className="gap-0">
                        <div className="mt-1 grid grid-cols-1 gap-5 gap-y-3 md:grid-cols-2">
                            <div>
                                <FormLabel title={"Sales Channel"} htmlFor="sales_channel"></FormLabel>
                                {connectorDropDown ? (
                                    <FormSelect
                                        control={control}
                                        name="sales_channel"
                                        size="md"
                                        id="sales_channel"
                                        className="w-full border-0 text-base"
                                        options={connectorDropDown.map((connector: any) => ({
                                            label: connector.name,
                                            value: connector.name,
                                        }))}
                                        placeholder="Select Sales Channel"
                                    />
                                ) : (
                                    <p>Loading...</p>
                                )}
                            </div>
                            <div>
                                <FormLabel title={"Airline"} htmlFor="airline_id"></FormLabel>
                                {airlineDropDown ? (
                                    <FormSelect
                                        control={control}
                                        name="airline_id"
                                        size="md"
                                        id="airline_id"
                                        className="w-full border-0 text-base"
                                        options={airlineDropDown.map((airline: any) => ({
                                            label: airline.name,
                                            value: airline.id,
                                        }))}
                                        placeholder="Select Airline"
                                    />
                                ) : (
                                    <p>Loading...</p>
                                )}
                            </div>
                            <div>
                                <FormLabel title={"Region"} htmlFor="region" />
                                <Controller
                                    name="region"
                                    control={control}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            options={regionOptions}
                                            isMulti
                                            className="w-full border-0 focus:outline-0"
                                            placeholder="Select Regions"
                                            getOptionLabel={(e) => e.label}
                                            getOptionValue={(e) => e.value}
                                            value={regionOptions.filter(option =>
                                                field.value?.includes(option.value)
                                            )}
                                            onChange={(selectedOptions) =>
                                                field.onChange(selectedOptions ? selectedOptions.map(option => option.value) : [])
                                            }
                                        />
                                    )}
                                />
                            </div>

                            <div>
                                <FormLabel title={"Margin"} htmlFor="margin"></FormLabel>
                                <div className="flex items-center gap-4">
                                    <FormInput
                                        className="w-64 border-0 focus:outline-0"
                                        control={control}
                                        size="md"
                                        id="margin"
                                        name="margin"
                                        placeholder="Enter Margin"
                                        wrapperClassName="w-[29rem]"
                                    />

                                    <FormSelect
                                        control={control}
                                        name="margin_type"
                                        size="md"
                                        id="margin_type"
                                        className="w-full border-0 text-base w-[18rem]"
                                        options={[{ id: 'amount', name: 'Amount' }, { id: 'percentage', name: 'Percentage' }].map((connector: any) => ({
                                            label: connector.name,
                                            value: connector.id,
                                        }))}
                                    />
                                </div>
                            </div>

                            <div>
                                <FormLabel title={"Sale starts and Continues"} htmlFor="sale_start_continue"></FormLabel>
                                <FormInput
                                    type="date"
                                    className="w-full border-0 focus:outline-0"
                                    control={control}
                                    size="md"
                                    id="sale_start_continue"
                                    name="sale_start_continue"
                                />
                            </div>

                            <div>
                                <FormLabel title={"Sale ends on this date"} htmlFor="sale_end_continue"></FormLabel>
                                <FormInput
                                    type="date"
                                    className="w-full border-0 focus:outline-0"
                                    control={control}
                                    size="md"
                                    id="sale_end_continue"
                                    name="sale_end_continue"
                                />
                            </div>

                            <div>
                                <FormLabel title={"Travel starts and Continues"} htmlFor="travel_start_continue"></FormLabel>
                                <FormInput
                                    type="date"
                                    className="w-full border-0 focus:outline-0"
                                    control={control}
                                    size="md"
                                    id="travel_start_continue"
                                    name="travel_start_continue"
                                />
                            </div>

                            <div>
                                <FormLabel title={"Travel ends on this date"} htmlFor="travel_end_continue"></FormLabel>
                                <FormInput
                                    type="date"
                                    className="w-full border-0 focus:outline-0"
                                    control={control}
                                    size="md"
                                    id="travel_end_continue"
                                    name="travel_end_continue"
                                />
                            </div>

                            <div>
                                <FormLabel title={"Rbds"} htmlFor="rbds"></FormLabel>
                                <FormInput
                                    className="w-full border-0 focus:outline-0"
                                    control={control}
                                    size="md"
                                    id="rbds"
                                    name="rbds"
                                    placeholder="Enter Rbds"
                                />
                            </div>

                            <div>
                                <Form className="mt-1 w-fit rounded-lg">
                                    <FormLabel title="Apply on gross fare">
                                        <FormToggle control={control} aria-label="Toggle" name="is_apply_on_gross" className="m-2" color="primary" />
                                    </FormLabel>
                                    <FormLabel title="Status">
                                        <FormToggle control={control} aria-label="Toggle" name="status" className="m-2" color="primary" />
                                    </FormLabel>
                                </Form>
                            </div>

                            <div className="col-span-1 md:col-span-2">
                                <FormLabel title={"Remarks"} htmlFor="remarks"></FormLabel>
                                <FormTextarea
                                    className="w-full border-0 px-0 focus:outline-0"
                                    control={control}
                                    size={"md"}
                                    id="remarks"
                                    name={"remarks"}
                                    placeholder="Remarks"
                                />
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <div className="mt-5 flex justify-end gap-4">
                <Button
                    color="ghost"
                    size="md"
                    className="bg-base-content/10"
                    onClick={handleCancel}
                    startIcon={<Icon icon={xIcon} fontSize={18} />}>
                    Cancel
                </Button>
                <Button
                    color="primary"
                    size="md"
                    onClick={onSubmit}
                    startIcon={<Icon icon={arrowUpFromLineIcon} fontSize={18} />}
                    loading={isLoadingAirlineMargin}>
                    Update
                </Button>
            </div>
        </div>
    );
};

export { EditAirlineMargin };
