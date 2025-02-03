"use client";

import arrowUpFromLineIcon from "@iconify/icons-lucide/arrow-up-from-line";
import xIcon from "@iconify/icons-lucide/x";
import React from "react";
import { Icon } from "@/components/Icon";
import { Button, Card, CardBody, CardTitle, Form, FormLabel } from "@/components/daisyui";
import { FileUploader, FormInput, FormSelect, FormToggle } from "@/components/forms";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { routes } from "@/lib/routes";

import { AirportSchemaType, airportSchema } from "../helpers";
import { useShowAirportQuery, useUpdateAirportMutation } from "@/services/api";

type EditAirportProps = {
    airportId: string;
};

const EditAirport = ({ airportId }: EditAirportProps) => {

    const toaster = useToast();
    const router = useRouter();
    const {
        data: airport,
        isSuccess: isAirportSuccess,
        error,
        isLoading: isShowLoading,
        refetch
    } = useShowAirportQuery(airportId, {
        refetchOnMountOrArgChange: true,
    });

    const [updateAirport, { error: errorAirport, isLoading: isLoadingAirport }] = useUpdateAirportMutation();

    const { control, handleSubmit, setError, setValue, watch, reset } = useForm<AirportSchemaType>({
        resolver: zodResolver(airportSchema),
    });

    useEffect(() => {
        refetch();
    }, []);

    useEffect(() => {
        if (isAirportSuccess && airport) {
            reset({
                name: airport.name,
                municipality: airport.municipality,
                iso_country: airport.iso_country,
                iata_code: airport.iata_code
            });
        }
    }, [airport, isAirportSuccess, reset]);

    const setErrors = (errors: Record<string, any>) => {
        Object.entries(errors).forEach(([key, value]: any[]) => setError(key, { message: value }));
    };

    const onSubmit = handleSubmit(async (data) => {

        const updated_data = {
            _method: 'put',
            ...data
        }
        await updateAirport({ airportId, updated_data }).then((response: any) => {
            if (response.data?.code == 200) {
                toaster.success(response?.data?.message);
                refetch();
                router.push(routes.apps.settings.airports);
            } else {
                setErrors(errorAirport?.data?.errors)
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
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-1">
            <Card className="bg-base-100">
                    <CardBody className="gap-0">
                        <CardTitle>Airport Information</CardTitle>
                        <div className="mt-1 grid grid-cols-1 gap-5 gap-y-3 md:grid-cols-2">
                            <div>
                                <FormLabel title={"Airport Name"} htmlFor="name"></FormLabel>
                                <FormInput
                                    className="w-full border-0 focus:outline-0"
                                    control={control}
                                    size="md"
                                    id="name"
                                    name="name"
                                    placeholder="Enter Airport Name"
                                />
                            </div>
                            <div>
                                <FormLabel title={"ISO Country"} htmlFor="iso_country"></FormLabel>
                                <FormInput
                                    className="w-full border-0 focus:outline-0"
                                    control={control}
                                    size="md"
                                    id="iso_country"
                                    name="iso_country"
                                    placeholder="Enter ISO Country"
                                />
                            </div>
                            <div>
                                <FormLabel title={"Municipality"} htmlFor="municipality"></FormLabel>
                                <FormInput
                                    className="w-full border-0 focus:outline-0"
                                    control={control}
                                    size="md"
                                    id="municipality"
                                    name="municipality"
                                    placeholder="Enter Municipality"
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
                    loading={isLoadingAirport}>
                    Update
                </Button>
            </div>
        </div>
    );
};

export { EditAirport };
