import { Card, CardBody, CardTitle, Range } from "@/components/daisyui";

const RangeExample = () => {
    return (
        <div className="grid gap-6 xl:grid-cols-2">
            <Card className="bg-base-100">
                <CardBody>
                    <CardTitle>Default</CardTitle>
                    <div className="mt-1 flex flex-wrap gap-5">
                        <Range aria-label="Range example" />
                    </div>
                </CardBody>
            </Card>
            <Card className="bg-base-100">
                <CardBody>
                    <CardTitle>Step</CardTitle>
                    <div className="mt-1 flex flex-wrap gap-5">
                        <Range aria-label="Range example" step={10} />
                    </div>
                </CardBody>
            </Card>
            <Card className="bg-base-100">
                <CardBody>
                    <CardTitle>Color</CardTitle>
                    <div className="mt-1 flex flex-col gap-3">
                        <Range aria-label="Range example" color={"primary"} size={"sm"} />
                        <Range aria-label="Range example" color={"secondary"} size={"sm"} />
                        <Range aria-label="Range example" color={"success"} size={"sm"} />
                        <Range aria-label="Range example" color={"warning"} size={"sm"} />
                        <Range aria-label="Range example" color={"info"} size={"sm"} />
                        <Range aria-label="Range example" color={"error"} size={"sm"} />
                    </div>
                </CardBody>
            </Card>
            <Card className="bg-base-100">
                <CardBody>
                    <CardTitle>Size</CardTitle>
                    <div className="mt-1 flex flex-col gap-3">
                        <Range aria-label="Range example" size={"xs"} />
                        <Range aria-label="Range example" size={"sm"} />
                        <Range aria-label="Range example" size={"md"} />
                        <Range aria-label="Range example" size={"lg"} />
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default RangeExample;
