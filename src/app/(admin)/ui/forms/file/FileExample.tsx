import { Card, CardBody, CardTitle, FileInput } from "@/components/daisyui";

const FileExample = () => {
    return (
        <div className="grid gap-6 xl:grid-cols-2">
            <Card className="bg-base-100">
                <CardBody>
                    <CardTitle>Default</CardTitle>
                    <div className="mt-1 flex flex-wrap gap-5">
                        <FileInput aria-label="File input example" className="max-w-64 bg-base-200 sm:max-w-xs" />
                    </div>
                </CardBody>
            </Card>

            <Card className="bg-base-100">
                <CardBody>
                    <CardTitle>Form Control</CardTitle>
                    <div className="form-control w-full max-w-64 sm:max-w-xs">
                        <label className="label">
                            <span className="label-text">Pick a file</span>
                            <span className="label-text-alt">From File Manager</span>
                        </label>
                        <FileInput aria-label="File input example" className="bg-base-200" />
                        <label className="label">
                            <span className="label-text-alt">Required</span>
                            <span className="label-text-alt">Max 2 MB</span>
                        </label>
                    </div>
                </CardBody>
            </Card>

            <Card className="bg-base-100">
                <CardBody>
                    <CardTitle>Color</CardTitle>
                    <div className="mt-1 flex w-fit flex-col gap-3">
                        <FileInput
                            aria-label="File input example"
                            className="max-w-64 bg-base-200 sm:max-w-xs"
                            size={"sm"}
                            color="primary"
                        />
                        <FileInput
                            aria-label="File input example"
                            className="max-w-64 bg-base-200 sm:max-w-xs"
                            size={"sm"}
                            color="secondary"
                        />
                        <FileInput
                            aria-label="File input example"
                            className="max-w-64 bg-base-200 sm:max-w-xs"
                            size={"sm"}
                            color="success"
                        />
                        <FileInput
                            aria-label="File input example"
                            className="max-w-64 bg-base-200 sm:max-w-xs"
                            size={"sm"}
                            color="warning"
                        />
                        <FileInput
                            aria-label="File input example"
                            className="max-w-64 bg-base-200 sm:max-w-xs"
                            size={"sm"}
                            color="info"
                        />
                        <FileInput
                            aria-label="File input example"
                            className="max-w-64 bg-base-200 sm:max-w-xs"
                            size={"sm"}
                            color="error"
                        />
                    </div>
                </CardBody>
            </Card>
            <Card className="bg-base-100">
                <CardBody>
                    <CardTitle>Size</CardTitle>
                    <div className="mt-1 flex w-fit flex-col gap-3">
                        <FileInput
                            aria-label="File input example"
                            className="max-w-64 bg-base-200 sm:max-w-xs"
                            size={"xs"}
                        />
                        <FileInput
                            aria-label="File input example"
                            className="max-w-64 bg-base-200 sm:max-w-xs"
                            size={"sm"}
                        />
                        <FileInput
                            aria-label="File input example"
                            className="max-w-64 bg-base-200 sm:max-w-xs"
                            size={"md"}
                        />
                        <FileInput
                            aria-label="File input example"
                            className="max-w-64 bg-base-200 sm:max-w-xs"
                            size={"lg"}
                        />
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default FileExample;
