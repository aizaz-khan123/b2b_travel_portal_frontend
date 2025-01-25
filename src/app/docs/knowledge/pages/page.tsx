import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";
import { Card, CardBody } from "@/components/daisyui";

export const metadata: Metadata = {
    title: "Package",
};

const PackagePage = () => {
    return (
        <>
            <PageTitle
                title={"Pages"}
                breadCrumbItems={[{ label: "Documentation" }, { label: "Knowledge", active: true }]}
            />

            <div className="mt-5">
                <Card className="bg-base-100">
                    <CardBody className="p-5">
                        <p className="text-base font-medium">Dashboards</p>
                        <ul className="list-disc px-5">
                            <li>Ecommerce</li>
                        </ul>
                        <p className="mt-3 text-base font-medium">Apps</p>
                        <ol className="list-decimal px-5">
                            <li>
                                <span className="font-medium">Ecommerce</span>
                                <ul className="list-inside list-disc">
                                    <li>
                                        Orders
                                        <ul className="list-[square] ps-10">
                                            <li>
                                                List <span className="text-base-content/70">(Table)</span>
                                            </li>
                                            <li>
                                                Show <span className="text-base-content/70">(Page)</span>
                                            </li>
                                        </ul>
                                    </li>

                                    <li>
                                        Products
                                        <ul className="list-[square] ps-10">
                                            <li>
                                                List <span className="text-base-content/70">(Table)</span>
                                            </li>
                                            <li>
                                                Create <span className="text-base-content/70">(Form)</span>
                                            </li>
                                            <li>
                                                Edit <span className="text-base-content/70">(Form)</span>
                                            </li>
                                        </ul>
                                    </li>

                                    <li>
                                        Sellers
                                        <ul className="list-[square] ps-10">
                                            <li>
                                                List <span className="text-base-content/70">(Table)</span>
                                            </li>
                                            <li>
                                                Create <span className="text-base-content/70">(Form)</span>
                                            </li>
                                            <li>
                                                Edit <span className="text-base-content/70">(Form)</span>
                                            </li>
                                        </ul>
                                    </li>

                                    <li>
                                        Customers
                                        <ul className="list-[square] ps-10">
                                            <li>
                                                List <span className="text-base-content/70">(Table)</span>
                                            </li>
                                            <li>
                                                Create <span className="text-base-content/70">(Form)</span>
                                            </li>
                                            <li>
                                                Edit <span className="text-base-content/70">(Form)</span>
                                            </li>
                                        </ul>
                                    </li>

                                    <li>
                                        Shops
                                        <ul className="list-[square] ps-10">
                                            <li>
                                                List <span className="text-base-content/70">(Table)</span>
                                            </li>
                                            <li>
                                                Create <span className="text-base-content/70">(Form)</span>
                                            </li>
                                            <li>
                                                Edit <span className="text-base-content/70">(Form)</span>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>Chat</li>
                            <li>File Manager</li>
                        </ol>
                        <p className="mt-3 text-base font-medium">Auth</p>
                        <ol className="list-decimal px-5">
                            <li>Login</li>
                            <li>Register</li>
                            <li>Forgot Password</li>
                            <li>Reset Password</li>
                        </ol>
                        <p className="mt-3 text-base font-medium">UI Showcase</p>
                        <ol className="list-decimal space-y-3 px-5">
                            <li>
                                Components
                                <ul className="list-disc px-5">
                                    <li>Accordion</li>
                                    <li>Alert</li>
                                    <li>Avatar</li>
                                    <li>Badge</li>
                                    <li>Breadcrumb</li>
                                    <li>Button</li>
                                    <li>Countdown</li>
                                    <li>Drawer</li>
                                    <li>Dropdown</li>
                                    <li>Loading</li>
                                    <li>Menu</li>
                                    <li>Modal</li>
                                    <li>Pagination</li>
                                    <li>Progress</li>
                                    <li>Step</li>
                                    <li>Tab</li>
                                    <li>Timeline</li>
                                    <li>Toast</li>
                                    <li>Tooltip</li>
                                </ul>
                            </li>
                            <li>
                                Form Elements
                                <ul className="list-disc px-5">
                                    <li>Checkbox</li>
                                    <li>File</li>
                                    <li>Input</li>
                                    <li>Radio</li>
                                    <li>Range</li>
                                    <li>Rating</li>
                                    <li>Toggle</li>
                                </ul>
                            </li>
                            <li>
                                Apex Charts
                                <ul className="list-disc px-5">
                                    <li>Area</li>
                                    <li>Bar</li>
                                    <li>Pie</li>
                                    <li>Line</li>
                                    <li>Column</li>
                                </ul>
                            </li>
                        </ol>
                    </CardBody>
                </Card>
            </div>
        </>
    );
};

export default PackagePage;
