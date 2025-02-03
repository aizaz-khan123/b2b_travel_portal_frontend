"use client";

import arrowUpFromLineIcon from "@iconify/icons-lucide/arrow-up-from-line";
import xIcon from "@iconify/icons-lucide/x";
import React from "react";
import { Icon } from "@/components/Icon";
import { Button, Card, CardBody, CardTitle, Form, FormLabel } from "@/components/daisyui";
import { FileUploader, FormInput, FormSelect, FormTextarea, FormToggle } from "@/components/forms";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { routes } from "@/lib/routes";

import { SupplierSchemaType, supplierSchema } from "../helpers";
import { useShowSupplierQuery, useUpdateSupplierMutation } from "@/services/api";

type EditSupplierProps = {
    supplierId: string;
};

const EditSupplier = ({ supplierId }: EditSupplierProps) => {

    const toaster = useToast();
    const router = useRouter();
    const {
        data: supplier,
        isSuccess: isSupplierSuccess,
        error,
        isLoading: isShowLoading,
        refetch
    } = useShowSupplierQuery(supplierId, {
        refetchOnMountOrArgChange: true,
    });

    const [updateSupplier, { error: errorSupplier, isLoading: isLoadingSupplier }] = useUpdateSupplierMutation();

    const { control, handleSubmit, setError, setValue, watch, reset } = useForm<SupplierSchemaType>({
        resolver: zodResolver(supplierSchema),
    });

    useEffect(() => {
        refetch();
    }, []);

    useEffect(() => {
        if (isSupplierSuccess && supplier) {
            reset({
                name: supplier.name,
                description: supplier.description,
                status: supplier.status,
            });
        }
    }, [supplier, isSupplierSuccess, reset]);

    const setErrors = (errors: Record<string, any>) => {
        Object.entries(errors).forEach(([key, value]: any[]) => setError(key, { message: value }));
    };

    const onSubmit = handleSubmit(async (data) => {

        const updated_data = {
            _method: 'put',
            ...data
        }
        await updateSupplier({ supplierId, updated_data }).then((response: any) => {
            if (response.data?.code == 200) {
                toaster.success(response?.data?.message);
                refetch();
                router.push(routes.apps.settings.suppliers);
            } else {
                setErrors(errorSupplier?.data?.errors)
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
                <p className="ml-2">Loading supplier details...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center h-64 text-red-500">
                <p>Error fetching supplier details.</p>
                <p>{error?.message || "Something went wrong!"}</p>
            </div>
        );
    }

    return (
        <div>
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-1">
            <Card className="bg-base-100">
                    <CardBody className="gap-0">
                        <CardTitle>Supplier Information</CardTitle>
                        <div className="mt-1 grid grid-cols-1 gap-5 gap-y-3 md:grid-cols-2">
                            <div>
                                <FormLabel title={"Supplier Name"} htmlFor="name"></FormLabel>
                                <FormInput
                                    className="w-full border-0 focus:outline-0"
                                    control={control}
                                    size="md"
                                    id="name"
                                    name="name"
                                    placeholder="Enter Supplier Name"
                                />
                            </div>

                            <div>
                                <Form className="mt-7 w-fit rounded-lg">
                                    <FormLabel title="Status">
                                        <FormToggle control={control} aria-label="Toggle" name="status" className="m-2" color="primary"/>
                                    </FormLabel>
                                </Form>
                            </div>

                            <div className="col-span-1 md:col-span-2">
                                <FormLabel title={"Description"} htmlFor="description"></FormLabel>
                                <FormTextarea
                                    className="w-full border-0 px-0 focus:outline-0"
                                    control={control}
                                    size={"md"}
                                    id="description"
                                    name={"description"}
                                    placeholder="Description"
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
                    loading={isLoadingSupplier}>
                    Update
                </Button>
            </div>
        </div>
    );
};

export { EditSupplier };
