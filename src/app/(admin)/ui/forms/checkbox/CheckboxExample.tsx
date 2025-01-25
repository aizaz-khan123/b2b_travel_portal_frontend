import { Card, CardBody, CardTitle, Checkbox, Form, FormLabel } from "@/components/daisyui";

const CheckboxExample = () => {
    return (
        <div className="grid gap-6 xl:grid-cols-2">
            <Card className="bg-base-100">
                <CardBody>
                    <CardTitle>Default</CardTitle>
                    <div className="mt-1 flex flex-wrap gap-5">
                        <Checkbox aria-label="Checkbox example" />
                        <Checkbox aria-label="Checkbox example" defaultChecked />
                        <Checkbox aria-label="Checkbox example" indeterminate />
                        <Checkbox aria-label="Checkbox example" disabled />
                        <Checkbox aria-label="Checkbox example" disabled checked />
                        <Checkbox aria-label="Checkbox example" indeterminate disabled />
                    </div>
                </CardBody>
            </Card>
            <Card className="bg-base-100">
                <CardBody>
                    <CardTitle>Colors</CardTitle>
                    <div className="mt-1 flex flex-wrap gap-5">
                        <Checkbox aria-label="Checkbox example" color="primary" defaultChecked />
                        <Checkbox aria-label="Checkbox example" color="secondary" defaultChecked />
                        <Checkbox aria-label="Checkbox example" color="success" defaultChecked />
                        <Checkbox aria-label="Checkbox example" color="warning" defaultChecked />
                        <Checkbox aria-label="Checkbox example" color="info" defaultChecked />
                        <Checkbox aria-label="Checkbox example" color="error" defaultChecked />
                    </div>
                </CardBody>
            </Card>
            <Card className="bg-base-100">
                <CardBody>
                    <CardTitle>Size</CardTitle>
                    <div className="mt-1 flex flex-wrap items-center gap-5">
                        <Checkbox aria-label="Checkbox example" defaultChecked size="lg" />
                        <Checkbox aria-label="Checkbox example" defaultChecked size="md" />
                        <Checkbox aria-label="Checkbox example" defaultChecked size="sm" />
                        <Checkbox aria-label="Checkbox example" defaultChecked size="xs" />
                    </div>
                </CardBody>
            </Card>
            <Card className="bg-base-100">
                <CardBody>
                    <CardTitle>Form Control</CardTitle>
                    <Form className="w-64 rounded-lg bg-base-200 p-2 px-4">
                        <FormLabel title="Remember me">
                            <Checkbox aria-label="Checkbox example" />
                        </FormLabel>
                    </Form>
                </CardBody>
            </Card>
        </div>
    );
};

export default CheckboxExample;
