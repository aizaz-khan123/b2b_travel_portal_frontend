"use client";

import { z } from "zod";
import {
    Button,
    Card,
    CardBody,
    CardTitle,
    Form,
    FormLabel,
} from "@/components/daisyui";
import { FormInput, FormSelect, FormToggle } from "@/components/forms";
import checkIcon from "@iconify/icons-lucide/check";
import { useGetSupplierListQuery, useShowConnectorQuery, useUpdateConnectorMutation } from "@/services/api";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { Icon } from "@/components/Icon";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const SABREConnector = () => {
    const toaster = useToast();
    const { data: supplierDropDown } = useGetSupplierListQuery();
    const { data: connector, isSuccess: isConnectorSuccess } = useShowConnectorQuery('SABRE');
    const [updateConnector, { isLoading: isUpdateLoading }] = useUpdateConnectorMutation();

    const connectorSchema = z.object({
        api_key: z.string({ required_error: "UserName Required!" }),
        api_secret: z.string({ required_error: "Password Required!" }),
        connector_domain: z.string(),
        printer: z.string(),
        pcc: z.string(),
        supplier_id: z.number({ required_error: "Supplier ID Required!" }).min(1, "Supplier ID is required!"),
        is_enable: z.boolean(),
    });

    const { control, handleSubmit, reset } = useForm<z.infer<typeof connectorSchema>>({
        resolver: zodResolver(connectorSchema)
    });

    useEffect(() => {
        if (isConnectorSuccess && connector) {
            reset({
                api_key: connector.api_key,
                api_secret: connector.api_secret,
                connector_domain: connector.connector_domain,
                printer: connector.printer,
                pcc: connector.pcc,
                is_enable: connector.is_enable,
                supplier_id: connector.supplier_id
            });
        }
    }, [connector, isConnectorSuccess, reset]);

    const onSubmit = handleSubmit(async (data: z.infer<typeof connectorSchema>) => {
        const updated_data = {
            ...data,
            name: 'Sabre',
            type: "SABRE",
        }

        await updateConnector(updated_data).then((response: any) => {
            if (response.data?.code == 200) {
                toaster.success('SABRE Api Credentials Updated!');
            }
        });
    });
    return (
        <>
            <Card className="mt-5 bg-base-100">
                <CardBody className={"p-0"}>
                    <CardBody className="gap-0">
                        <CardTitle>SABRE API Credentials</CardTitle>
                        <div className="mt-1 grid grid-cols-1 gap-5 gap-y-3 md:grid-cols-2">
                            <div>
                                <FormLabel title={"API KEY"} htmlFor="api_key"></FormLabel>
                                <FormInput
                                    className="w-full border-0 focus:outline-0"
                                    control={control}
                                    size="md"
                                    id="api_key"
                                    name="api_key"
                                    placeholder="Enter API KEY"
                                />
                            </div>
                            <div>
                                <FormLabel title={"API SECRET"} htmlFor="api_secret"></FormLabel>
                                <FormInput
                                    className="w-full border-0 focus:outline-0"
                                    control={control}
                                    size="md"
                                    id="api_secret"
                                    name="api_secret"
                                    placeholder="Enter API SECRET"
                                />
                            </div>
                            <div>
                                <FormLabel title={"DOMAIN"} htmlFor="connector_domain"></FormLabel>
                                <FormInput
                                    className="w-full border-0 focus:outline-0"
                                    control={control}
                                    size="md"
                                    id="connector_domain"
                                    name="connector_domain"
                                    placeholder="Enter DOMAIN"
                                />
                            </div>
                            <div>
                                <FormLabel title={"PRINTER"} htmlFor="printer"></FormLabel>
                                <FormInput
                                    className="w-full border-0 focus:outline-0"
                                    control={control}
                                    size="md"
                                    id="printer"
                                    name="printer"
                                    placeholder="Enter printer"
                                />
                            </div>
                            <div>
                                <FormLabel title={"PCC"} htmlFor="pcc"></FormLabel>
                                <FormInput
                                    className="w-full border-0 focus:outline-0"
                                    control={control}
                                    size="md"
                                    id="pcc"
                                    name="pcc"
                                    placeholder="Enter PCC"
                                />
                            </div>
                            <div>
                                <FormLabel title="Supplier" htmlFor="supplier_id" />
                                {supplierDropDown ? (
                                    <FormSelect
                                        control={control}
                                        name="supplier_id"
                                        size="md"
                                        id="supplier_id"
                                        className="w-full border-0 text-base"
                                        options={supplierDropDown.map((supplier: any) => ({
                                            label: supplier.name,
                                            value: supplier.id,
                                        }))}
                                        placeholder="Select Supplier"
                                    />
                                ) : (
                                    <p>Loading...</p>
                                )}
                            </div>

                            <div>
                                <Form className="mt-1 w-fit rounded-lg">
                                    <FormLabel title="Status">
                                        <FormToggle control={control} aria-label="Toggle" name="is_enable" className="m-2" color="primary" />
                                    </FormLabel>
                                </Form>
                            </div>
                        </div>

                        <div className="mt-6 flex justify-end gap-6">
                            <Button
                                color="primary"
                                size="md"
                                onClick={onSubmit}
                                startIcon={<Icon icon={checkIcon} fontSize={18} />}
                                loading={isUpdateLoading}
                            >
                                Update
                            </Button>
                        </div>
                    </CardBody>
                </CardBody>
            </Card>


        </>
    );
};

export { SABREConnector };