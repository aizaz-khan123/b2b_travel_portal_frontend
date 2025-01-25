import { Card, CardBody, CardTitle, Input, Textarea } from "@/components/daisyui";

import SelectExample from "./SelectExample";

const InputExample = () => {
    return (
        <div className="grid gap-6 xl:grid-cols-2">
            <Card className="bg-base-100">
                <CardBody>
                    <CardTitle>Default</CardTitle>
                    <div className="mt-1 flex w-fit flex-col gap-3">
                        <Input aria-label="Input example" placeholder="Type here" />
                        <Input aria-label="Input example" placeholder="Type here" disabled />
                    </div>
                </CardBody>
            </Card>
            <Card className="bg-base-100">
                <CardBody>
                    <CardTitle>Form Control</CardTitle>
                    <div className="form-control mt-1 w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">What is your name?</span>
                            <span className="label-text-alt">Mr.</span>
                        </label>
                        <Input aria-label="Input example" placeholder="Type Here" />
                        <label className="label">
                            <span className="label-text-alt">* Required</span>
                            <span className="label-text-alt">0/20</span>
                        </label>
                    </div>
                </CardBody>
            </Card>
            <Card className="bg-base-100">
                <CardBody>
                    <CardTitle>Text Area</CardTitle>
                    <div className="mt-1 flex w-fit flex-col gap-3">
                        <Textarea placeholder="Bio" />
                        <Textarea placeholder="Bio" disabled size="sm" className="h-10" />
                    </div>
                </CardBody>
            </Card>
            <Card className="bg-base-100">
                <CardBody>
                    <CardTitle>Area Control</CardTitle>
                    <div className="form-control w-fit">
                        <label className="label">
                            <span className="label-text">Your bio</span>
                            <span className="label-text-alt">Alt label</span>
                        </label>
                        <Textarea placeholder="Bio" />
                        <label className="label">
                            <span className="label-text-alt">Required</span>
                            <span className="label-text-alt">0/150</span>
                        </label>
                    </div>
                </CardBody>
            </Card>
            <SelectExample />
            <Card className="bg-base-100">
                <CardBody>
                    <CardTitle>Color</CardTitle>
                    <div className="mt-1 flex w-fit flex-col gap-3">
                        <Input aria-label="Input example" placeholder="Type here" size="sm" color="primary" />
                        <Input aria-label="Input example" placeholder="Type here" size="sm" color="secondary" />
                        <Input aria-label="Input example" placeholder="Type here" size="sm" color="success" />
                        <Input aria-label="Input example" placeholder="Type here" size="sm" color="warning" />
                        <Input aria-label="Input example" placeholder="Type here" size="sm" color="info" />
                        <Input aria-label="Input example" placeholder="Type here" size="sm" color="error" />
                    </div>
                </CardBody>
            </Card>
            <Card className="bg-base-100">
                <CardBody>
                    <CardTitle>Size</CardTitle>
                    <div className="mt-1 flex w-fit flex-col gap-3">
                        <Input aria-label="Input example" placeholder="Type here" size="xs" />
                        <Input aria-label="Input example" placeholder="Type here" size="sm" />
                        <Input aria-label="Input example" placeholder="Type here" size="md" />
                        <Input aria-label="Input example" placeholder="Type here" size="lg" />
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default InputExample;
