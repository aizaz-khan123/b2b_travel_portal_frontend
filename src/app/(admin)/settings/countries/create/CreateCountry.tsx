"use client";

import checkIcon from "@iconify/icons-lucide/check";
import xIcon from "@iconify/icons-lucide/x";
import { Icon } from "@/components/Icon";
import { Button, Card, CardBody, CardTitle, Form, FormLabel } from "@/components/daisyui";
import { FormInput } from "@/components/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { routes } from "@/lib/routes";
import { useCreateCountryMutation } from "@/services/api";
import { CountrySchemaType, countrySchema } from "../helpers";

const CreateCountry = () => {

    const toaster = useToast();
    const router = useRouter();
    const [createCountry, {isLoading}] = useCreateCountryMutation();

    const { control, handleSubmit, setError } = useForm<CountrySchemaType>({
        resolver: zodResolver(countrySchema),
    });

    const setErrors = (errors: Record<string, any>) => {
        Object.entries(errors).forEach(([key, value]: any[]) => setError(key, { message: value }));
    };

    const onSubmit = handleSubmit(async (data: CountrySchemaType) => {
        await createCountry(data).then((response:any)=>{
            const {status, data} = response?.data;
            if(status){
                    toaster.success(`${data.name} has been created`);
                    router.push(routes.apps.settings.countries);
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

export { CreateCountry };
