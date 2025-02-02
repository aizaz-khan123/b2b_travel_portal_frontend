"use client";

import checkIcon from "@iconify/icons-lucide/check";
import xIcon from "@iconify/icons-lucide/x";
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
import { useCreateAirlineMutation, useGetCountryListQuery } from "@/services/api";
import { AirlineSchemaType, airlineSchema } from "../helpers";

const CreateAirline = () => {

    const toaster = useToast();
    const router = useRouter();

    const [createAirline, {isLoading}] = useCreateAirlineMutation();

    const { data: countryDropDown } = useGetCountryListQuery();

    const { control, handleSubmit, setError, setValue } = useForm<AirlineSchemaType>({
        resolver: zodResolver(airlineSchema),
        defaultValues: {
            name: "",
            iata_code: "",
            issuing_pcc: "",
            tour_code: "",
            reserving_pcc: "",
            status: false,
        },
    });

    const handleChangeImage = (fileItems: FilePondFile[]) => {
        if (fileItems.length > 0) {
            const fileItem = fileItems[0];
            const file = new File([fileItem.file], fileItem.file.name, {
                type: fileItem.file.type,
                lastModified: fileItem.file.lastModified,
            });
            setValue("thumbnail", file);
        } else {
            setValue("thumbnail", undefined);
        }
    };

    const setErrors = (errors: Record<string, any>) => {
        Object.entries(errors).forEach(([key, value]: any[]) => setError(key, { message: value }));
    };

    const onSubmit = handleSubmit(async (data: AirlineSchemaType) => {
        await createAirline(data).then((response:any)=>{
            const {status, data} = response?.data;
            if(status){
                    toaster.success(`${data.name} has been created`);
                    router.push(routes.apps.settings.airlines);
            }else{
                setErrors(response?.data?.errors);
            }
        });
    });


    const handleCancel = () => {
        router.back();
    };

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
                                        <FormToggle control={control} aria-label="Toggle" name="status" className="m-2" color="primary"/>
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

export { CreateAirline };
