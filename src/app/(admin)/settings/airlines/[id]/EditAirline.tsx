"use client";

import arrowUpFromLineIcon from "@iconify/icons-lucide/arrow-up-from-line";
import xIcon from "@iconify/icons-lucide/x";
import React from "react";
import { Icon } from "@/components/Icon";
import { Button, Card, CardBody, CardTitle, Form, FormLabel } from "@/components/daisyui";
import { FileUploader, FormInput, FormSelect, FormToggle } from "@/components/forms";

import { zodResolver } from "@hookform/resolvers/zod";
import { FilePondFile } from "filepond";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { routes } from "@/lib/routes";

import { AirlineSchemaType, airlineSchema } from "../helpers";
import { useGetCountryListQuery, useShowAirlineQuery, useUpdateAirlineMutation } from "@/services/api";

type EditAirlineProps = {
    airlineId: string;
};

const EditAirline = ({ airlineId }: EditAirlineProps) => {

    const toaster = useToast();
    const router = useRouter();
    const {
        data: airline,
        isSuccess: isAirlineSuccess,
        error,
        isLoading: isShowLoading,
        refetch
    } = useShowAirlineQuery(airlineId, {
        refetchOnMountOrArgChange: true,
    });
    const { data: countryDropDown } = useGetCountryListQuery();

    const [updateAirline, { error: errorAirline, isLoading: isLoadingAirline }] = useUpdateAirlineMutation();

    const { control, handleSubmit, setError, setValue, watch, reset } = useForm<AirlineSchemaType>({
        resolver: zodResolver(airlineSchema),
        defaultValues: {
            name: "",
            iata_code: "",
            issuing_pcc: "",
            tour_code: "",
            reserving_pcc: "",
        },
    });

    useEffect(() => {
        refetch();
    }, []);

    useEffect(() => {
        if (isAirlineSuccess && airline) {
            reset({
                name: airline.name || "",
                iata_code: airline.iata_code || "",
                issuing_pcc: airline.issuing_pcc || "",
                tour_code: airline.tour_code || "",
                reserving_pcc: airline.reserving_pcc || "",
                country_id: airline.country_id,
                status: airline.status,
            });
        }
    }, [airline, isAirlineSuccess, reset]);

    const setErrors = (errors: Record<string, any>) => {
        Object.entries(errors).forEach(([key, value]: any[]) => setError(key, { message: value }));
    };

    const handleChangeImage = (fileItems: FilePondFile[]) => {
        if (fileItems.length > 0) {
            const fileItem = fileItems[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                if (reader.result) {
                    setValue("thumbnail", reader.result as string);
                }
            };
            if (fileItem.file.type.match("thumbnail.*")) {
                reader.readAsDataURL(fileItem.file);
            }
        } else {
            setValue("thumbnail", undefined);
        }
    };

    const onSubmit = handleSubmit(async (data) => {

        const updated_data = {
            _method: 'put',
            ...data
        }
        await updateAirline({ airlineId, updated_data }).then((response: any) => {

            if('error' in response){
                setErrors(response?.error.data?.errors);
                return;
            }
            
            if (response.data?.code == 200) {
                toaster.success(response?.data?.message);
                refetch();
                router.push(routes.apps.settings.airlines);
            } else {
                setErrors(errorAirline?.data?.errors)
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
                <p className="ml-2">Loading bank account details...</p>
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
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                <Card className="bg-base-100">
                    <CardBody className="gap-0">
                        <CardTitle>Airline Information</CardTitle>
                        <div className="mt-1 grid grid-cols-1 gap-5 gap-y-3 md:grid-cols-2">
                            <div>
                                <FormLabel title={"Airline Name"} htmlFor="name"></FormLabel>
                                <FormInput
                                    className="w-full border-0 focus:outline-0"
                                    control={control}
                                    size="md"
                                    id="name"
                                    name="name"
                                    placeholder="Enter Airline Name"
                                />
                            </div>
                            <div>
                                <FormLabel title={"IATA Code"} htmlFor="iata_code"></FormLabel>
                                <FormInput
                                    className="w-full border-0 focus:outline-0"
                                    control={control}
                                    size="md"
                                    id="iata_code"
                                    name="iata_code"
                                    placeholder="Enter IATA Code"
                                />
                            </div>
                            <div>
                                <FormLabel title="Country" htmlFor="account_number" />
                                {countryDropDown ? (
                                    <FormSelect
                                        control={control}
                                        name="country_id"
                                        size="md"
                                        id="from"
                                        className="w-full border-0 text-base"
                                        options={countryDropDown.map((country: any) => ({
                                            label: country.name,
                                            value: country.id,
                                        }))}
                                        placeholder="Select Country"
                                    />
                                ) : (
                                    <p>Loading...</p>
                                )}
                            </div>

                            <div>
                                <FormLabel title={"Reserving PCC"} htmlFor="reserving_pcc"></FormLabel>
                                <FormInput
                                    className="w-full border-0 focus:outline-0"
                                    control={control}
                                    size="md"
                                    id="reserving_pcc"
                                    name="reserving_pcc"
                                    placeholder="Enter Reserving PCC"
                                />
                            </div>
                            <div>
                                <FormLabel title={"Issuing PCC"} htmlFor="issuing_pcc"></FormLabel>
                                <FormInput
                                    className="w-full border-0 focus:outline-0"
                                    control={control}
                                    size="md"
                                    id="issuing_pcc"
                                    name="issuing_pcc"
                                    placeholder="Enter Issuing PCC"
                                />
                            </div>
                            <div>
                                <FormLabel title={"Tour Code"} htmlFor="tour_code"></FormLabel>
                                <FormInput
                                    className="w-full border-0 focus:outline-0"
                                    control={control}
                                    size="md"
                                    id="tour_code"
                                    name="tour_code"
                                    placeholder="Enter Tour Code"
                                />
                            </div>
                            <div>
                                <Form className="mt-1 w-fit rounded-lg">
                                    <FormLabel title="Status">
                                        <FormToggle control={control} aria-label="Toggle" name="status" className="m-2" color="primary" />
                                    </FormLabel>
                                </Form>
                            </div>
                        </div>
                    </CardBody>
                </Card>
                <Card className="bg-base-100">
                    <CardBody>
                        <CardTitle>Upload Airline Logo</CardTitle>
                        <div className="mt-1">
                            <div className="filepond-file-upload">
                                <FileUploader
                                    onupdatefiles={handleChangeImage}
                                    labelIdle={`<div>Drag and Drop your files or <span style="text-decoration: underline">Browse</span></div>`}
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
                    loading={isLoadingAirline}>
                    Update
                </Button>
            </div>
        </div>
    );
};

export { EditAirline };
