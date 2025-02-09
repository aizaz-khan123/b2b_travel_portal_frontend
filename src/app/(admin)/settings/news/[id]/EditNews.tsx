"use client";

import arrowUpFromLineIcon from "@iconify/icons-lucide/arrow-up-from-line";
import xIcon from "@iconify/icons-lucide/x";
import React from "react";
import { Icon } from "@/components/Icon";
import { Button, Card, CardBody, CardTitle, Form, FormLabel } from "@/components/daisyui";
import { FileUploader, FormInput, FormTextarea, FormToggle } from "@/components/forms";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { routes } from "@/lib/routes";

import { NewsSchemaType, newsSchema } from "../helpers";
import { useShowNewsQuery, useUpdateNewsMutation } from "@/services/api";
import { FilePondFile } from "filepond";

type EditNewsProps = {
    newsId: string;
};

const EditNews = ({ newsId }: EditNewsProps) => {

    const toaster = useToast();
    const router = useRouter();
    const {
        data: news,
        isSuccess: isNewsSuccess,
        error,
        isLoading: isShowLoading,
        refetch
    } = useShowNewsQuery(newsId, {
        refetchOnMountOrArgChange: true,
    });

    const [updateNews, { error: errorNews, isLoading: isLoadingNews }] = useUpdateNewsMutation();

    const { control, handleSubmit, setError, setValue, watch, reset } = useForm<NewsSchemaType>({
        resolver: zodResolver(newsSchema),
        defaultValues: {
            title: "",
            description: "",
            news_url: ""
        },
    });

    useEffect(() => {
        refetch();
    }, []);

    useEffect(() => {
        if (isNewsSuccess && news) {
            reset({
                title: news.title || "",
                description: news.description || "",
                news_url: news.news_url || "",
                is_feature: news.is_feature
            });
        }
    }, [news, isNewsSuccess, reset]);

    const setErrors = (errors: Record<string, any>) => {
        Object.entries(errors).forEach(([key, value]: any[]) => setError(key, { message: value }));
    };

    const onSubmit = handleSubmit(async (data) => {
        const updated_data = {
            _method: 'put',
            ...data
        }
        await updateNews({ newsId, updated_data }).then((response: any) => {
            
            if('error' in response){
                setErrors(response?.error.data?.errors);
                return;
            }
            if (response.data?.code == 200) {
                toaster.success(response?.data?.message);
                refetch();
                router.push(routes.apps.settings.news);
            } else {
                setErrors(errorNews?.data?.errors)
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
                <p className="ml-2">Loading news details...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center h-64 text-red-500">
                <p>Error fetching news details.</p>
                <p>{error?.message || "Something went wrong!"}</p>
            </div>
        );
    }
    const handleChangeImage = (fileItems: FilePondFile[]) => {
        if (fileItems.length > 0) {
            const fileItem = fileItems[0];
            const file = new File([fileItem.file], fileItem.file.name, {
                type: fileItem.file.type,
                lastModified: fileItem.file.lastModified,
            });
            setValue("image", file);
        } else {
            setValue("image", undefined);
        }
    };

    return (
        <div>
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <Card className="bg-base-100">
                    <CardBody className="gap-0">
                        <CardTitle>Country Information</CardTitle>
                        <div className="mt-1 grid grid-cols-1 gap-5 gap-y-3 md:grid-cols-2">
                            <div>
                                <FormLabel title={"News Title"} htmlFor="title"></FormLabel>
                                <FormInput
                                    className="w-full border-0 focus:outline-0"
                                    control={control}
                                    size="md"
                                    id="title"
                                    name="title"
                                    placeholder="Enter News Title"
                                />
                            </div>
                            <div>
                                <FormLabel title={"News URL"} htmlFor="news_url"></FormLabel>
                                <FormInput
                                    className="w-full border-0 focus:outline-0"
                                    control={control}
                                    size="md"
                                    id="news_url"
                                    name="news_url"
                                    placeholder="Enter News URL"
                                />
                            </div>
                            <div>
                                <Form className="mt-1 w-fit rounded-lg">
                                    <FormLabel title="Is Feature">
                                        <FormToggle control={control} aria-label="Toggle" name="is_feature" className="m-2" color="primary"/>
                                    </FormLabel>
                                </Form>
                            </div>
                            <div className="col-span-1 md:col-span-2">
                                <FormLabel title={"News Description"} htmlFor="description"></FormLabel>
                                <FormTextarea
                                    className="w-full border-0 px-0 focus:outline-0"
                                    control={control}
                                    size={"md"}
                                    id="description"
                                    name={"description"}
                                    placeholder="News Description"
                                />
                            </div>
                        </div>
                    </CardBody>
                </Card>
                <Card className="bg-base-100">
                    <CardBody>
                        <CardTitle>Upload News & Alert Logo</CardTitle>
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
                    loading={isLoadingNews}>
                    Update
                </Button>
            </div>
        </div>
    );
};

export { EditNews };
