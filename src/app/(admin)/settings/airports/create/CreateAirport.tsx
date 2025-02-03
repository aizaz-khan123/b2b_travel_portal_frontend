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
import { useCreateAirportMutation } from "@/services/api";
import { AirportSchemaType, airportSchema } from "../helpers";

const CreateAirport = () => {

    const toaster = useToast();
    const router = useRouter();
    const [createAirport, {isLoading}] = useCreateAirportMutation();

    const { control, handleSubmit, setError } = useForm<AirportSchemaType>({
        resolver: zodResolver(airportSchema),
    });

    const setErrors = (errors: Record<string, any>) => {
        Object.entries(errors).forEach(([key, value]: any[]) => setError(key, { message: value }));
    };

    const onSubmit = handleSubmit(async (data: AirportSchemaType) => {
        await createAirport(data).then((response:any)=>{
            const {status, data} = response?.data;
            if(status){
                    toaster.success(`${data.name} has been created`);
                    router.push(routes.apps.settings.airports);
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

export { CreateAirport };
