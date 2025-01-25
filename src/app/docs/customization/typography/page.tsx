import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import typographyCustomization1Image from "@/app/docs/assets/images/typography-customization-1.jpg";
import { PageTitle } from "@/components/PageTitle";
import { Card, CardBody, RadioTab, Tabs } from "@/components/daisyui";

export const metadata: Metadata = {
    title: "Customization Typography",
};

const NextJSTypo = () => {
    return (
        <Card className="bg-base-100">
            <CardBody className="p-5">
                <p className="text-base">
                    You can change the font family easily. You need to customize font family in
                    <code className="mx-1 rounded bg-base-content/10 px-1 py-0.5 text-base">
                        src/assets/css/_root.css
                    </code>
                    file.
                </p>
                <Image
                    src={typographyCustomization1Image}
                    alt="Color customization image"
                    className="mt-2 inline w-fit"
                />
                <p className="mt-2">
                    <span className="text-info">Note:</span> We recommended to use Google Font.
                </p>
                <ul className="ms-5 list-disc">
                    <li>
                        <Link href="https://fonts.google.com/" target="_blank" className="text-primary">
                            Google Font
                        </Link>
                    </li>
                </ul>
            </CardBody>
        </Card>
    );
};

const ThemeCustomizationPage = () => {
    return (
        <>
            <PageTitle
                title={"Typography Customization"}
                breadCrumbItems={[{ label: "Documentation" }, { label: "Customization", active: true }]}
            />

            <div className="mt-5">
                <Tabs variant="boxed" className={"bg-transparent"}>
                    <RadioTab name="frameworks" label="Next.JS" contentClassName={"mt-4"} defaultChecked>
                        <NextJSTypo />
                    </RadioTab>
                    <RadioTab name="frameworks" label="React" contentClassName={"mt-4"}>
                        <NextJSTypo />
                    </RadioTab>
                    {/*<RadioTab name="frameworks" label="HTML" contentClassName={"mt-4"}>*/}
                    {/*    <NextJSTypo />*/}
                    {/*</RadioTab>*/}
                </Tabs>
            </div>
        </>
    );
};

export default ThemeCustomizationPage;
