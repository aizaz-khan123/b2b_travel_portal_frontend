"use client";

import arrowUpFromLineIcon from "@iconify/icons-lucide/arrow-up-from-line";
import xIcon from "@iconify/icons-lucide/x";
import React from "react";
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

import { BankAccountSchemaType, bankAccountSchema } from "../helpers";
import { useShowBankAccountQuery, useUpdateBankAccountMutation } from "@/services/api";

type EditBankAccountProps = {
    bankAccountId: string;
};

const EditBankAccount = ({ bankAccountId }: EditBankAccountProps) => {

    const toaster = useToast();
    const router = useRouter();
    const {
        data: bank_account,
        isSuccess: isBankAccountsSuccess,
        error,
        isLoading: isShowLoading,
        refetch
    } = useShowBankAccountQuery(bankAccountId, {
        refetchOnMountOrArgChange: true,
    });

    const [updateBankAccount, { error: errorBankAccount, isLoading: isLoadingBankAccount }] = useUpdateBankAccountMutation();

    const { control, handleSubmit, setError, setValue, watch, reset } = useForm<BankAccountSchemaType>({
        resolver: zodResolver(bankAccountSchema),
        defaultValues: {
            account_holder_name: "",
            bank_name: "",
            bank_address: "",
            contact_number: "",
            account_number: "",
            iban: "",
            bank_logo: "",
        },
    });

    useEffect(() => {
        refetch();
    }, []);

    useEffect(() => {
        if (isBankAccountsSuccess && bank_account) {
            reset({
                account_holder_name: bank_account.account_holder_name || "",
                bank_name: bank_account.bank_name || "",
                bank_address: bank_account.bank_address || "",
                contact_number: bank_account.contact_number || "",
                account_number: bank_account.account_number || "",
                iban: bank_account.iban || "",
                bank_logo: bank_account.bank_logo || "",
            });
        }
    }, [bank_account, isBankAccountsSuccess, reset]);

    const setErrors = (errors: Record<string, any>) => {
        Object.entries(errors).forEach(([key, value]: any[]) => setError(key, { message: value }));
    };

    const handleChangeImage = (fileItems: FilePondFile[]) => {
        if (fileItems.length > 0) {
            const fileItem = fileItems[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                if (reader.result) {
                    setValue("bank_logo", reader.result as string);
                }
            };
            if (fileItem.file.type.match("bank_logo.*")) {
                reader.readAsDataURL(fileItem.file);
            }
        } else {
            setValue("bank_logo", undefined);
        }
    };

    const onSubmit = handleSubmit(async (data) => {

        const updated_data = {
            _method: 'put',
            ...data
        }
        await updateBankAccount({ bankAccountId, updated_data }).then((response:any) => {

            if('error' in response){
                setErrors(response?.error.data?.errors);
                return;
            }
            
            if (response.data?.code == 200) {
                toaster.success(response?.data?.message);
                refetch();
                router.push(routes.apps.settings.bank_accounts);
            } else {
                setErrors(errorBankAccount?.data?.errors)
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
                    loading={isLoadingBankAccount}>
                    Update
                </Button>
            </div>
        </div>
    );
};

export { EditBankAccount };
