import type { Metadata } from "next";
import Link from "next/link";

import { PageTitle } from "@/components/PageTitle";
import { Card, CardBody, RadioTab, Tabs } from "@/components/daisyui";
import { routes } from "@/lib/routes";

export const metadata: Metadata = {
    title: "Introduction",
};

const NextJSIntro = () => {
    return (
        <Card className="bg-base-100">
            <CardBody className="p-5">
                <p className="text-base">
                    Introducing a comprehensive Next.JS Kit featuring an bundle of pre-built daisyUI components,
                    designed to effortlessly elevate the aesthetics of your frontend pages.
                </p>

                <p className="mt-3 text-base font-medium">What Technology we use</p>
                <ul className="mt-3 list-disc px-5">
                    <li>
                        <Link href="https://nodejs.org" target="_blank">
                            Node.js
                        </Link>{" "}
                        &gt;=18.18.0
                    </li>
                    <li>
                        <Link href="https://nextjs.org/" target="_blank">
                            Next.JS
                        </Link>{" "}
                        14.2.x
                    </li>
                    <li>
                        <Link href="https://react.dev/" target="_blank">
                            React
                        </Link>{" "}
                        18.3.x
                    </li>
                    <li>
                        <Link href="https://www.typescriptlang.org/" target="_blank">
                            Typescript
                        </Link>{" "}
                        5.4.x
                    </li>
                    <li>
                        <Link href="https://daisyui.com/" target="_blank">
                            Daisyui
                        </Link>{" "}
                        4.12.x
                    </li>
                </ul>
            </CardBody>
        </Card>
    );
};

const ReactIntro = () => {
    return (
        <Card className="bg-base-100">
            <CardBody className="p-5">
                <p className="text-base">
                    Introducing a comprehensive React Kit featuring an bundle of pre-built daisyUI components, designed
                    to effortlessly elevate the aesthetics of your frontend pages.
                </p>

                <p className="mt-3 text-base font-medium">What Technology we use</p>
                <ul className="mt-3 list-disc px-5">
                    <li>
                        <Link href="https://nodejs.org" target="_blank">
                            Node.js
                        </Link>{" "}
                        &gt;=18.18.0
                    </li>
                    <li>
                        <Link href="https://react.dev/" target="_blank">
                            React
                        </Link>{" "}
                        18.3.x
                    </li>
                    <li>
                        <Link href="https://www.typescriptlang.org/" target="_blank">
                            Typescript
                        </Link>{" "}
                        5.4.x
                    </li>
                    <li>
                        <Link href="https://daisyui.com/" target="_blank">
                            Daisyui
                        </Link>{" "}
                        4.12.x
                    </li>
                </ul>
            </CardBody>
        </Card>
    );
};

const HTMLIntro = () => {
    return (
        <Card className="bg-base-100">
            <CardBody className="p-5">
                <p className="text-base">
                    Introducing a comprehensive HTML Kit featuring an bundle of pre-built daisyUI components, designed
                    to effortlessly elevate the aesthetics of your frontend pages.
                </p>

                <p className="mt-3 text-base font-medium">What Technology we use</p>
                <ul className="mt-3 list-disc px-5">
                    <li>
                        <Link href="https://nodejs.org" target="_blank">
                            Node.js
                        </Link>{" "}
                        &gt;=18.18.0
                    </li>
                    <li>
                        <Link href="https://www.typescriptlang.org/" target="_blank">
                            Vite
                        </Link>{" "}
                        5.2.x
                    </li>
                    <li>
                        <Link href="https://daisyui.com/" target="_blank">
                            Daisyui
                        </Link>{" "}
                        4.12.x
                    </li>
                </ul>
            </CardBody>
        </Card>
    );
};

const IntroductionPage = () => {
    return (
        <>
            <PageTitle
                title={"Introduction"}
                breadCrumbItems={[{ label: "Documentation" }, { label: "Introduction", active: true }]}
            />
            <div className="mt-5">
                <Tabs variant="boxed" className={"bg-transparent"}>
                    <RadioTab name="frameworks" label="Next.JS" contentClassName={"mt-4"} defaultChecked>
                        <NextJSIntro />
                    </RadioTab>
                    <RadioTab name="frameworks" label="React" contentClassName={"mt-4"}>
                        <ReactIntro />
                    </RadioTab>
                    {/*<RadioTab name="frameworks" label="HTML" contentClassName={"mt-4"}>*/}
                    {/*    <HTMLIntro />*/}
                    {/*</RadioTab>*/}
                </Tabs>

                <Card className="mt-5 bg-base-100">
                    <CardBody className="p-5">
                        <p className="text-base font-medium">Support</p>
                        <p>
                            We are always listen your feedback at{" "}
                            <Link href={routes.externalLinks.discord} target={"_blank"} className="text-primary">
                                Discord
                            </Link>
                        </p>
                    </CardBody>
                </Card>
            </div>
        </>
    );
};

export default IntroductionPage;
