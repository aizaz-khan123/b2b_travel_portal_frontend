"use client";

import checkIcon from "@iconify/icons-lucide/check";
import xIcon from "@iconify/icons-lucide/x";
import { Icon } from "@/components/Icon";
import { Button, Card, CardBody, CardTitle, Form, FormLabel } from "@/components/daisyui";
import { FileUploader, FormInput, FormTextarea, FormToggle } from "@/components/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { routes } from "@/lib/routes";
import { useCreateNewsMutation } from "@/services/api";
import { NewsSchemaType, newsSchema } from "../helpers";
import { FilePondFile } from "filepond";

const CreateNews = () => {

    const toaster = useToast();
    const router = useRouter();
    const [createNews, {isLoading}] = useCreateNewsMutation();

    const { control, handleSubmit, setError, setValue } = useForm<NewsSchemaType>({
        resolver: zodResolver(newsSchema),
    });

    const setErrors = (errors: Record<string, any>) => {
        Object.entries(errors).forEach(([key, value]: any[]) => setError(key, { message: value }));
    };

    const onSubmit = handleSubmit(async (data: NewsSchemaType) => {
        await createNews(data).then((response:any)=>{
            
            if('error' in response){
                setErrors(response?.error.data?.errors);
                return;
            }

            const {status, data} = response?.data;
            if(status){
                    toaster.success(`${data.title} has been created`);
                    router.push(routes.apps.settings.news);
            }else{
                setErrors(response?.data?.errors);
            }
        });
    });


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

    const handleCancel = () => {
        router.back();
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

export { CreateNews };
