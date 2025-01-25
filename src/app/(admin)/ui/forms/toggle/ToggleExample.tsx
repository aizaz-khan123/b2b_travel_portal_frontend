import { Card, CardBody, CardTitle, Form, FormLabel, Toggle } from "@/components/daisyui";

const RangeExample = () => {
    return (
        <div className="grid gap-6 xl:grid-cols-2">
            <Card className="bg-base-100">
                <CardBody>
                    <CardTitle>Default</CardTitle>
                    <div className="mt-1 flex flex-wrap gap-5">
                        <Toggle aria-label="Toggle" />
                        <Toggle aria-label="Toggle" defaultChecked />
                        <Toggle aria-label="Toggle" disabled />
                        <Toggle aria-label="Toggle" disabled defaultChecked />
                    </div>
                </CardBody>
            </Card>
            <Card className="bg-base-100">
                <CardBody>
                    <CardTitle>Color</CardTitle>
                    <div className="mt-1 flex flex-wrap gap-2">
                        <Toggle aria-label="Toggle" defaultChecked color="primary" />
                        <Toggle aria-label="Toggle" defaultChecked color="secondary" />
                        <Toggle aria-label="Toggle" defaultChecked color="success" />
                        <Toggle aria-label="Toggle" defaultChecked color="warning" />
                        <Toggle aria-label="Toggle" defaultChecked color="info" />
                        <Toggle aria-label="Toggle" defaultChecked color="error" />
                    </div>
                </CardBody>
            </Card>
            <Card className="bg-base-100">
                <CardBody>
                    <CardTitle>Size</CardTitle>
                    <div className="mt-1 flex flex-col items-center gap-2">
                        <Toggle aria-label="Toggle" defaultChecked size="xs" />
                        <Toggle aria-label="Toggle" defaultChecked size="sm" />
                        <Toggle aria-label="Toggle" defaultChecked size="md" />
                        <Toggle aria-label="Toggle" defaultChecked size="lg" />
                    </div>
                </CardBody>
            </Card>
            <Card className="bg-base-100">
                <CardBody>
                    <CardTitle>Form Control</CardTitle>
                    <Form className="mt-1 w-fit rounded-lg bg-base-200 p-2 px-4">
                        <FormLabel title="Remember me">
                            <Toggle aria-label="Toggle" className="m-2 ms-4" />
                        </FormLabel>
                    </Form>
                </CardBody>
            </Card>
        </div>
    );
};

export default RangeExample;
