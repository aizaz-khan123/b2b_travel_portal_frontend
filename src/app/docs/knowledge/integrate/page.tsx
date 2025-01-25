import type { Metadata } from "next";

import { PageTitle } from "@/components/PageTitle";
import { Card, CardBody, RadioTab, Tabs } from "@/components/daisyui";

export const metadata: Metadata = {
    title: "Integrate",
};

const NextJSGuide = () => {
    return (
        <Card className="bg-base-100">
            <CardBody className="p-5">
                <p className="text-lg font-medium">How to use any page into your existing project</p>
                <p>Example: If you need to copy dashboard page to your project then follow the steps</p>
                <ul className="mt-2 list-disc space-y-1.5 px-5">
                    <li>
                        <span className="font-semibold">Context:</span> You need to use Global Context Provider which
                        provider a some shared state to each page. You need copy{" "}
                        <code>/src/contexts/global.{"{jsx/tsx}"}</code>.
                    </li>
                    <li>
                        Also you need to wrap GlobalContext as we do in <code>/src/app/AppProvider.{"{tsx/jsx}"}</code>
                    </li>
                    <li>
                        <span className="font-semibold">Helpers:</span> The you need to copy <code>/src/helpers</code>{" "}
                        folder to your project, which contains utility helper functions
                    </li>
                    <li>
                        <span className="font-semibold">Components:</span>
                        <ul className="my-1 ms-6 list-[square] space-y-1">
                            <li>
                                DaisyUI: Copy <code>/src/components/daisyui</code> folder to your project, which
                                contains daisyui components implementation for react.
                            </li>
                            <li>
                                Forms: Copy <code>/src/components/forms</code> folder to your project, which contains
                                form components.
                            </li>
                            <li>
                                Other: If your page need other components then it present in{" "}
                                <code>/src/components/*</code> folders.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold">Dashboard:</span> Copy{" "}
                        <code>/src/app/(admin)/dashboards/ecommerce</code> folder
                    </li>
                    <li>
                        <span className="font-semibold">Server Action:</span> Copy{" "}
                        <code>/src/actions/dashboards/ecommerce.{"{js/ts}"}</code> file.
                    </li>
                    <li>
                        <span className="font-semibold">Database:</span> Copy{" "}
                        <code>/src/database/dashboards/ecommerce.{"{js/ts}"}</code> file.
                    </li>
                </ul>
            </CardBody>
        </Card>
    );
};

const ReactGuide = () => {
    return (
        <Card className="bg-base-100">
            <CardBody className="p-5">
                <p className="text-lg font-medium">How to use any page into your existing project</p>
                <p>Example: If you need to copy dashboard page to your project then follow the steps</p>
                <ul className="mt-2 list-disc space-y-1.5 px-5">
                    <li>
                        <span className="font-semibold">Context:</span> You need to use Global Context Provider which
                        provider a some shared state to each page. You need copy{" "}
                        <code>/src/contexts/global.{"{jsx/tsx}"}</code>
                    </li>
                    <li>
                        Also you need to wrap GlobalContext as we do in <code>/src/App.{"{tsx/jsx}"}</code>
                    </li>
                    <li>
                        <span className="font-semibold">Helpers:</span> The you need to copy <code>/src/helpers</code>{" "}
                        folder to your project, which contains utility helper functions
                    </li>
                    <li>
                        <span className="font-semibold">Components:</span>
                        <ul className="my-1 ms-6 list-[square] space-y-1">
                            <li>
                                DaisyUI: Copy <code>/src/components/daisyui</code> folder to your project, which
                                contains daisyui components implementation for react.
                            </li>
                            <li>
                                Forms: Copy <code>/src/components/forms</code> folder to your project, which contains
                                form components.
                            </li>
                            <li>
                                Other: If your page need other components then it present in{" "}
                                <code>/src/components/*</code> folders.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span className="font-semibold">Dashboard:</span> Copy{" "}
                        <code>/src/pages/admin/dashboards/ecommerce</code> folder
                    </li>
                    <li>
                        <span className="font-semibold">API Function:</span> Copy{" "}
                        <code>/src/api/dashboards/ecommerce.{"{js/ts}"}</code> file.
                    </li>
                    <li>
                        <span className="font-semibold">Database:</span> Copy{" "}
                        <code>/src/database/dashboards/ecommerce.{"{js/ts}"}</code> file.
                    </li>
                </ul>
            </CardBody>
        </Card>
    );
};

const HTMLGuide = () => {
    return (
        <Card className="bg-base-100">
            <CardBody className="p-5">
                <p className="text-lg font-medium">How to use any page into your existing project</p>
                <p>Example: If you need to copy dashboard page to your project then follow the steps</p>
                <ul className="mt-2 list-disc space-y-1.5 px-5">
                    <li>You can direct copy any HTML pages, which is works in any daisyui project.</li>
                    <li>Copy all the included js in the that file to your project</li>
                    <li>
                        You need to remove handlers like <code>{"{{> title-meta}}"}</code>,{" "}
                        <code>{"{{> leftbar}}"}</code> etc, or you need to setup Vite handlers as we do in HTML Version.
                    </li>
                </ul>
            </CardBody>
        </Card>
    );
};

const IntegratePage = () => {
    return (
        <>
            <PageTitle
                title={"Integrate"}
                breadCrumbItems={[{ label: "Documentation" }, { label: "Knowledge", active: true }]}
            />

            <div className="mt-5">
                <Tabs variant="boxed" className={"bg-transparent"}>
                    <RadioTab name="frameworks" label="Next.JS" contentClassName={"mt-4"} defaultChecked>
                        <NextJSGuide />
                    </RadioTab>
                    <RadioTab name="frameworks" label="React" contentClassName={"mt-4"}>
                        <ReactGuide />
                    </RadioTab>
                    {/*<RadioTab name="frameworks" label="HTML" contentClassName={"mt-4"}>*/}
                    {/*    <HTMLGuide />*/}
                    {/*</RadioTab>*/}
                </Tabs>
            </div>
        </>
    );
};

export default IntegratePage;
