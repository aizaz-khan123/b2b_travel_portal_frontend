"use client";

import arrowUpFromLineIcon from "@iconify/icons-lucide/arrow-up-from-line";
import xIcon from "@iconify/icons-lucide/x";
import React from "react";
import { Icon } from "@/components/Icon";
import { Button, Card, CardBody, CardTitle, FormLabel } from "@/components/daisyui";
import { FormInput } from "@/components/forms";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { routes } from "@/lib/routes";

import { CountrySchemaType, countrySchema } from "../helpers";
import { useShowCountryQuery, useUpdateCountryMutation } from "@/services/api";

type EditCountryProps = {
    countryId: string;
};

const EditCountry = ({ countryId }: EditCountryProps) => {

    const toaster = useToast();
    const router = useRouter();
    const {
        data: country,
        isSuccess: isCountrySuccess,
        error,
        isLoading: isShowLoading,
        refetch
    } = useShowCountryQuery(countryId, {
        refetchOnMountOrArgChange: true,
    });

    const [updateCountry, { error: errorAirport, isLoading: isLoadingCountry }] = useUpdateCountryMutation();

    const { control, handleSubmit, setError, setValue, watch, reset } = useForm<CountrySchemaType>({
        resolver: zodResolver(countrySchema),
    });

    useEffect(() => {
        refetch();
    }, []);

    useEffect(() => {
        if (isCountrySuccess && country) {
            reset({
                name: country.name,
                nice_name: country.nice_name,
                iso: country.iso,
                iso3: country.iso3
            });
        }
    }, [country, isCountrySuccess, reset]);

    const setErrors = (errors: Record<string, any>) => {
        Object.entries(errors).forEach(([key, value]: any[]) => setError(key, { message: value }));
    };

    const onSubmit = handleSubmit(async (data) => {

        const updated_data = {
            _method: 'put',
            ...data
        }
        await updateCountry({ countryId, updated_data }).then((response: any) => {

            if('error' in response){
                setErrors(response?.error.data?.errors);
                return;
            }
            
            if (response.data?.code == 200) {
                toaster.success(response?.data?.message);
                refetch();
                router.push(routes.apps.settings.countries);
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
                <p className="ml-2">Loading country details...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center h-64 text-red-500">
                <p>Error fetching country details.</p>
                <p>{error?.message || "Something went wrong!"}</p>
            </div>
        );
    }

    return (
        <div>
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-1">
            <Card className="bg-base-100">
                    <CardBody className="gap-0">
                        <CardTitle>Country Information</CardTitle>
                        <div className="mt-1 grid grid-cols-1 gap-5 gap-y-3 md:grid-cols-2">
                            <div>
                                <FormLabel title={"Country Name"} htmlFor="name"></FormLabel>
                                <FormInput
                                    className="w-full border-0 focus:outline-0"
                                    control={control}
                                    size="md"
                                    id="name"
                                    name="name"
                                    placeholder="Enter Country Name"
                                />
                            </div>
                            <div>
                                <FormLabel title={"Nice Name"} htmlFor="nice_name"></FormLabel>
                                <FormInput
                                    className="w-full border-0 focus:outline-0"
                                    control={control}
                                    size="md"
                                    id="nice_name"
                                    name="nice_name"
                                    placeholder="Enter Nice Name"
                                />
                            </div>
                            <div>
                                <FormLabel title={"ISO"} htmlFor="iso"></FormLabel>
                                <FormInput
                                    className="w-full border-0 focus:outline-0"
                                    control={control}
                                    size="md"
                                    id="iso"
                                    name="iso"
                                    placeholder="Enter ISO"
                                />
                            </div>
                            <div>
                                <FormLabel title={"ISO3"} htmlFor="iso3"></FormLabel>
                                <FormInput
                                    className="w-full border-0 focus:outline-0"
                                    control={control}
                                    size="md"
                                    id="iso3"
                                    name="iso3"
                                    placeholder="Enter ISO3"
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
                    loading={isLoadingCountry}>
                    Update
                </Button>
            </div>
        </div>
    );
};

export { EditCountry };
