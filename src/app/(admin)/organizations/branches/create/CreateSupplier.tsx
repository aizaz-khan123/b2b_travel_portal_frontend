"use client";

import checkIcon from "@iconify/icons-lucide/check";
import xIcon from "@iconify/icons-lucide/x";
import { Icon } from "@/components/Icon";
import { Button, Card, CardBody, CardTitle, Form, FormLabel } from "@/components/daisyui";
import { FormInput, FormTextarea, FormToggle } from "@/components/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { routes } from "@/lib/routes";
import { useCreateSupplierMutation } from "@/services/api";
import { SupplierSchemaType, supplierSchema } from "../helpers";

const CreateSupplier = () => {

    const toaster = useToast();
    const router = useRouter();
    const [createSupplier, {isLoading}] = useCreateSupplierMutation();

    const { control, handleSubmit, setError } = useForm<SupplierSchemaType>({
        resolver: zodResolver(supplierSchema),
    });

    const setErrors = (errors: Record<string, any>) => {
        Object.entries(errors).forEach(([key, value]: any[]) => setError(key, { message: value }));
    };

    const onSubmit = handleSubmit(async (data: SupplierSchemaType) => {
        await createSupplier(data).then((response:any)=>{
            const {status, data} = response?.data;
            if(status){
                    toaster.success(`${data.name} has been created`);
                    router.push(routes.apps.settings.suppliers);
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

export { CreateSupplier };
