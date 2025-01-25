import type { Metadata } from "next";
import Image from "next/image";

import logoCustomization1Image from "@/app/docs/assets/images/logo-customization-1.png";
import { PageTitle } from "@/components/PageTitle";
import { Card, CardBody, RadioTab, Tabs } from "@/components/daisyui";

export const metadata: Metadata = {
    title: "Customization Logo",
};

const NextJSLogo = () => {
    return (
        <Card className="bg-base-100">
            <CardBody className="p-5">
                <p className="text-base">You can change the logo easily by replacing image assets</p>
                <ol className="ms-5 list-decimal">
                    <li>
                        <p className="font-medium">SVG Logo</p>
                        <p>
                            If you are using .svg (SVG) image for logo Then you need to replace (.svg)
                            <code className="mx-1 rounded bg-base-content/10 px-2 py-0.5 text-base">
                                src/assets/images/logo/logo-light.svg
                            </code>
                            &
                            <code className="mx-1 rounded bg-base-content/10 px-2 py-0.5 text-base">
                                src/assets/images/logo/logo-dark.svg
                            </code>
                        </p>
                    </li>
                    <li className="mt-2">
                        <p className="font-medium">PNG/JPEG Logo</p>
                        <p>If you are using image for logo (except then svg), The you need to do following step</p>
                        <ul className="ms-5 list-disc">
                            <li>
                                <p>
                                    You need to replace (.png) images at
                                    <code className="mx-1 rounded bg-base-content/10 px-2 py-0.5 text-base">
                                        src/assets/images/logo/logo-light.png
                                    </code>
                                    &
                                    <code className="mx-1 rounded bg-base-content/10 px-2 py-0.5 text-base">
                                        src/assets/images/logo/logo-dark.png
                                    </code>
                                </p>
                            </li>
                            <li>
                                <p>
                                    You need to uncomment the png import line (also comment the svg logo import line) as
                                    image in
                                    <code className="mx-1 rounded bg-base-content/10 px-2 py-0.5 text-base">
                                        src/components/Logo.{"{tsx/jsx}"}
                                    </code>
                                    file
                                </p>
                                <Image
                                    src={logoCustomization1Image}
                                    alt="Logo customization image"
                                    className="mt-4 rounded"
                                />
                            </li>
                        </ul>
                    </li>
                </ol>
            </CardBody>
        </Card>
    );
};
const HTMLLogo = () => {
    return (
        <Card className="bg-base-100">
            <CardBody className="p-5">
                <p className="text-base">You can change the logo easily by replacing image assets</p>
                <ol className="ms-5 list-disc">
                    <li>
                        <p>
                            <code className="mx-1 rounded bg-base-content/10 px-2 py-0.5 text-base">
                                src/assets/images/logo/logo-light.png
                            </code>
                            &
                            <code className="mx-1 rounded bg-base-content/10 px-2 py-0.5 text-base">
                                src/assets/images/logo/logo-dark.png
                            </code>
                        </p>
                    </li>
                </ol>
            </CardBody>
        </Card>
    );
};

const LogoCustomizationPage = () => {
    return (
        <>
            <PageTitle
                title={"Logo Customization"}
                breadCrumbItems={[{ label: "Documentation" }, { label: "Customization", active: true }]}
            />

            <div className="mt-5">
                <Tabs variant="boxed" className={"bg-transparent"}>
                    <RadioTab name="frameworks" label="Next.JS" contentClassName={"mt-4"} defaultChecked>
                        <NextJSLogo />
                    </RadioTab>
                    <RadioTab name="frameworks" label="React" contentClassName={"mt-4"}>
                        <NextJSLogo />
                    </RadioTab>
                    {/*<RadioTab name="frameworks" label="HTML" contentClassName={"mt-4"}>*/}
                    {/*    <HTMLLogo />*/}
                    {/*</RadioTab>*/}
                </Tabs>
            </div>
        </>
    );
};

export default LogoCustomizationPage;
