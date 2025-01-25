import type { Metadata } from "next";
import Link from "next/link";

import { docRoutes } from "@/app/docs/(layout)/menu";
import { PageTitle } from "@/components/PageTitle";
import { Card, CardBody, RadioTab, Tabs } from "@/components/daisyui";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
    title: "Package",
};

const StarterPackage = () => {
    return (
        <Card className="bg-base-100">
            <CardBody className="p-5">
                <div>
                    <p className="text-lg font-medium">Starter</p>
                    <p className="text-base-content/80">It is basic version for getting started</p>
                    <p className="mt-2 font-medium">Version Included</p>
                    <ul className="mt-2 list-disc px-5">
                        <li>React Typescript (Vite)</li>
                        <li>React Javascript (Vite)</li>
                    </ul>
                    <p className="mt-2 font-medium">What&apos;s Included</p>
                    <ul className="mt-2 list-disc px-5">
                        <li>Ecommerce Dashboard (1 Page)</li>
                        <li>Layout (Topbar, Leftbar)</li>
                    </ul>
                </div>
            </CardBody>
        </Card>
    );
};

const StandardPackage = () => {
    return (
        <Card className="bg-base-100">
            <CardBody className="p-5">
                <div>
                    <p className="text-lg font-medium">Standard</p>
                    <p className="text-base-content/80">It is full version for react admin</p>
                    <p className="mt-2 font-medium">Version Included</p>
                    <ul className="mt-2 list-disc px-5">
                        <li>React Typescript (Vite)</li>
                        <li>React Javascript (Vite)</li>
                    </ul>
                    <p className="mt-2 font-medium">What&apos;s Included</p>
                    <p>
                        Full admin, which is preview in the{" "}
                        <Link className="text-primary" href={routes.dashboards.ecommerce}>
                            demo
                        </Link>{" "}
                        & for full{" "}
                        <Link className="text-primary" href={docRoutes.knowledge.pages}>
                            pages list
                        </Link>
                    </p>
                </div>
            </CardBody>
        </Card>
    );
};

const ProPackage = () => {
    return (
        <Card className="bg-base-100">
            <CardBody className="p-5">
                <div>
                    <p className="text-lg font-medium">Pro</p>
                    <p className="text-base-content/80">It is full version for react & next admin</p>
                    <p className="mt-2 font-medium">Version Included</p>
                    <ul className="mt-2 list-disc px-5">
                        <li>React Typescript (Vite)</li>
                        <li>React Javascript (Vite)</li>
                        <li>Next.JS Typescript (App Directory)</li>
                        <li>Next.JS Javascript (App Directory)</li>
                    </ul>
                    <p className="mt-2 font-medium">What&apos;s Included</p>
                    <p>
                        Full admin, which is preview in the{" "}
                        <Link className="text-primary" href={routes.dashboards.ecommerce}>
                            demo
                        </Link>{" "}
                        & for full{" "}
                        <Link className="text-primary" href={docRoutes.knowledge.pages}>
                            pages list
                        </Link>
                    </p>
                </div>
            </CardBody>
        </Card>
    );
};

const HTMLPackage = () => {
    return (
        <Card className="bg-base-100">
            <CardBody className="p-5">
                <div>
                    <p className="text-lg font-medium">HTML</p>
                    <p className="text-base-content/80">It is full version for HTML Admin</p>
                    <p className="mt-2 font-medium">Version Included</p>
                    <ul className="mt-2 list-disc px-5">
                        <li>HTML Version (Vite)</li>
                    </ul>
                    <p className="mt-2 font-medium">What&apos;s Included</p>
                    <p>
                        Full admin, which is preview in the{" "}
                        <Link className="text-primary" href={routes.dashboards.ecommerce}>
                            demo
                        </Link>{" "}
                        & for full{" "}
                        <Link className="text-primary" href={docRoutes.knowledge.pages}>
                            pages list
                        </Link>
                    </p>
                </div>
            </CardBody>
        </Card>
    );
};

const PackagePage = () => {
    return (
        <>
            <PageTitle
                title={"Package"}
                breadCrumbItems={[{ label: "Documentation" }, { label: "Knowledge", active: true }]}
            />

            <div className="mt-5">
                <Tabs variant={"boxed"} className={"bg-transparent"}>
                    <RadioTab name="frameworks" label="Starter" contentClassName={"mt-4"} defaultChecked>
                        <StarterPackage />
                    </RadioTab>
                    <RadioTab name="frameworks" label="Standard" contentClassName={"mt-4"}>
                        <StandardPackage />
                    </RadioTab>
                    <RadioTab name="frameworks" label="Pro" contentClassName={"mt-4"}>
                        <ProPackage />
                    </RadioTab>
                    {/*<RadioTab name="frameworks" label="HTML" contentClassName={"mt-4"}>*/}
                    {/*    <HTMLPackage />*/}
                    {/*</RadioTab>*/}
                </Tabs>
            </div>
        </>
    );
};

export default PackagePage;
