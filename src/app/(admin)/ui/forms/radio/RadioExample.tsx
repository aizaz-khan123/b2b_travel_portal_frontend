import { Card, CardBody, CardTitle, Form, FormLabel, Radio } from "@/components/daisyui";

const RadioExample = () => {
    return (
        <div className="grid gap-6 xl:grid-cols-2">
            <Card className="bg-base-100">
                <CardBody>
                    <CardTitle>Default</CardTitle>
                    <div className="mt-1 flex flex-wrap gap-5">
                        <Radio aria-label="Radio example" name="radio1" defaultChecked />
                        <Radio aria-label="Radio example" name="radio1" />
                        <Radio aria-label="Radio example" name="radio1" disabled />
                        <Radio aria-label="Radio example" name="radio2" disabled defaultChecked />
                    </div>
                </CardBody>
            </Card>
            <Card className="bg-base-100">
                <CardBody>
                    <CardTitle>Colors</CardTitle>
                    <div className="mt-1 flex flex-wrap gap-5">
                        <Radio aria-label="Radio example" color="primary" defaultChecked />
                        <Radio aria-label="Radio example" color="secondary" defaultChecked />
                        <Radio aria-label="Radio example" color="success" defaultChecked />
                        <Radio aria-label="Radio example" color="warning" defaultChecked />
                        <Radio aria-label="Radio example" color="info" defaultChecked />
                        <Radio aria-label="Radio example" color="error" defaultChecked />
                    </div>
                </CardBody>
            </Card>
            <Card className="bg-base-100">
                <CardBody>
                    <CardTitle>Form Control</CardTitle>
                    <div className="mt-1 w-64 rounded-lg bg-base-200 p-4">
                        <Form>
                            <FormLabel title="Red Pill">
                                <Radio
                                    aria-label="Radio example"
                                    name="radio3"
                                    className="checked:bg-red-500"
                                    defaultChecked
                                />
                            </FormLabel>
                        </Form>
                        <Form>
                            <FormLabel title="Blue Pill">
                                <Radio
                                    aria-label="Radio example"
                                    name="radio3"
                                    className="checked:bg-blue-500"
                                    defaultChecked
                                />
                            </FormLabel>
                        </Form>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default RadioExample;
