"use client";

import checkIcon from "@iconify/icons-lucide/check";
import xIcon from "@iconify/icons-lucide/x";
import { Icon } from "@/components/Icon";
import { Button, Card, CardBody, CardTitle, FormLabel } from "@/components/daisyui";
import { FileUploader, FormInput, FormTextarea } from "@/components/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { FilePondFile } from "filepond";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { routes } from "@/lib/routes";
import { useCreateBankAccountMutation } from "@/services/api";
import { BankAccountSchemaType, bankAccountSchema } from "../helpers";

const CreateBankAccount = () => {
   
    const toaster = useToast();
    const router = useRouter();

    const [createBankAccount, {
        data,
        isError,
        isSuccess,
        error,
        isLoading }] = useCreateBankAccountMutation();
    
    useEffect(()=>{
        if(isSuccess){
            toaster.success("Bank Account has been created");
            router.push(routes.apps.settings.bank_accounts);
        }else if(isError){
            setErrors(error?.data?.errors);
        }
    }, [isSuccess, isError]);
    
    const { control, handleSubmit, setError, setValue } = useForm<BankAccountSchemaType>({
        resolver: zodResolver(bankAccountSchema),
        defaultValues: {
            account_holder_name: "",
            bank_name: "",
            bank_address: "",
        },
    });

    const handleChangeImage = (fileItems: FilePondFile[]) => {
        if (fileItems.length > 0) {
            const fileItem = fileItems[0];
            const file = new File([fileItem.file], fileItem.file.name, {
                type: fileItem.file.type,
                lastModified: fileItem.file.lastModified,
            });
            setValue("bank_logo", file);
        } else {
            setValue("bank_logo", undefined);
        }
    };

    const setErrors = (errors: Record<string, any>) => {
        Object.entries(errors).forEach(([key, value]: any[]) => setError(key, { message: value }));
    };

    // const onSubmit = handleSubmit(async (data: BankAccountSchemaType) => {
    //     const formData = new FormData();
    
    //     // Append all fields including the file
    //     Object.entries(data).forEach(([key, value]) => {
    //         if (value || value instanceof File) {  // Ensure that the value is not empty and can handle File type correctly
    //             formData.append(key, value);
    //         }
    //     });
    
    //     // Make sure that the file gets appended properly
    //     if (data.bank_logo && data.bank_logo instanceof File) {
    //         formData.append('bank_logo', data.bank_logo);
    //     }
    
    //     await createBankAccount(formData);  // Make sure createBankAccount expects FormData
    // });

    const onSubmit = handleSubmit(async (data: BankAccountSchemaType) => {
        // const formData = new FormData();
        // Object.entries(data).forEach(([key, value]) => {
        //     if (value !== undefined && value !== null) {
        //       formData.append(key, value.toString());
        //     }
        // });
        await createBankAccount(data);
        return;
    });

    
    const handleCancel = () => {
        router.back();
    };

    return (
        <div>
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                <Card className="bg-base-100">
                    <CardBody className="gap-0">
                        <CardTitle>Bank Information</CardTitle>
                        <div className="mt-1 grid grid-cols-1 gap-5 gap-y-3 md:grid-cols-2">
                            <div>
                                <FormLabel title={"Bank Name"} htmlFor="bank_name"></FormLabel>
                                <FormInput
                                    className="w-full border-0 focus:outline-0"
                                    control={control}
                                    size="md"
                                    id="bank_name"
                                    name="bank_name"
                                    placeholder="Enter Bank Name"
                                />
                            </div>
                            <div>
                                <FormLabel title={"Account Holder Name"} htmlFor="account_holder_name"></FormLabel>
                                <FormInput
                                    className="w-full border-0 focus:outline-0"
                                    control={control}
                                    size="md"
                                    id="account_holder_name"
                                    name="account_holder_name"
                                    placeholder="Enter Account Holder Name"
                                />
                            </div>
                            <div>
                                <FormLabel title={"Account Number"} htmlFor="account_number"></FormLabel>
                                <FormInput
                                    className="w-full border-0 focus:outline-0"
                                    control={control}
                                    size="md"
                                    id="account_number"
                                    name="account_number"
                                    placeholder="Enter Account Number"
                                />
                            </div>
                            <div>
                                <FormLabel title={"IBAN"} htmlFor="iban"></FormLabel>
                                <FormInput
                                    className="w-full border-0 focus:outline-0"
                                    control={control}
                                    size="md"
                                    id="iban"
                                    name="iban"
                                    placeholder="IBAN"
                                />
                            </div>
                            <div>
                                <FormLabel title={"Contact Number"} htmlFor="contact_number"></FormLabel>
                                <FormInput
                                    className="w-full border-0 focus:outline-0"
                                    control={control}
                                    size="md"
                                    id="contact_number"
                                    name="contact_number"
                                    placeholder="Enter Contact Number"
                                />
                            </div>
                            <div className="col-span-1 md:col-span-2">
                                <FormLabel title={"Bank Address"} htmlFor="bank_address"></FormLabel>
                                <FormTextarea
                                    className="w-full border-0 px-0 focus:outline-0"
                                    control={control}
                                    size={"md"}
                                    id="bank_address"
                                    name={"bank_address"}
                                    placeholder="Bank Address"
                                />
                            </div>
                        </div>
                    </CardBody>
                </Card>
                <Card className="bg-base-100">
                    <CardBody>
                        <CardTitle>Upload Bank Logo</CardTitle>
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

export { CreateBankAccount };
