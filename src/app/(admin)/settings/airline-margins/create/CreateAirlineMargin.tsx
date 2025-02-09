"use client";

import checkIcon from "@iconify/icons-lucide/check";
import xIcon from "@iconify/icons-lucide/x";
import { Icon } from "@/components/Icon";
import { Button, Card, CardBody, Form, FormLabel } from "@/components/daisyui";
import Select from "react-select";
import { FormInput, FormSelect, FormTextarea, FormToggle } from "@/components/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { routes } from "@/lib/routes";
import { useAirlineDropDownQuery, useConnectorDropDownQuery, useCreateAirlineMarginMutation } from "@/services/api";
import { airlineMarginSchemaType, airlineMarginSchema } from "../helpers";

const regionOptions = [
    { label: "ALL-SECTORS", value: "ALL-SECTORS" },
    { label: "INTERLINE", value: "INTERLINE" },
    { label: "SOTO", value: "SOTO" },
    { label: "DOMESTIC", value: "DOMESTIC" },
    { label: "CODE-SHARE", value: "CODE-SHARE" },
    { label: "EX-PAKISTAN", value: "EX-PAKISTAN" },
];

const CreateAirlineMargin = () => {

    const toaster = useToast();
    const router = useRouter();
    const [createAirlineMargin, { isLoading }] = useCreateAirlineMarginMutation();

    const { data: airlineDropDown } = useAirlineDropDownQuery();
    const { data: connectorDropDown } = useConnectorDropDownQuery();


    const { control, handleSubmit, setError } = useForm<airlineMarginSchemaType>({
        resolver: zodResolver(airlineMarginSchema),
        defaultValues:{
            is_apply_on_gross: false,
            status: true
        }
    });

    const setErrors = (errors: Record<string, any>) => {
        Object.entries(errors).forEach(([key, value]: any[]) => setError(key, { message: value }));
    };

    const onSubmit = handleSubmit(async (data: airlineMarginSchemaType) => {
        await createAirlineMargin(data).then((response: any) => {

            if('error' in response){
                setErrors(response?.error.data?.errors);
                return;
            }

            const { status } = response?.data;
            if (status) {
                toaster.success(`Airline Margin has been created`);
                router.push(routes.apps.settings.airline_margins);
            } else {
                setErrors(response?.data?.errors);
            }
        });
    });


    const handleCancel = () => {
        router.back();
    };

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
            <div className="mt-6 flex justify-end gap-6">
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
                    startIcon={<Icon icon={checkIcon} fontSize={18} />}
                    loading={isLoading}>
                    Save
                </Button>
            </div>
        </div>
    );
};

export { CreateAirlineMargin };
