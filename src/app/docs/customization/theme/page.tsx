import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import colorCustomization1Image from "@/app/docs/assets/images/color-customization-1.png";
import { PageTitle } from "@/components/PageTitle";
import { Card, CardBody, RadioTab, Tabs } from "@/components/daisyui";

export const metadata: Metadata = {
    title: "Customization Theme",
};

const NextJSTheme = () => {
    return (
        <p className="text-base">
            You can change the primary, secondary, success and etc color easily. You need to customize colors in
            <code className="mx-1 rounded bg-base-content/10 px-1 py-0.5 text-base">
                src/lib/theme/daisyui.config.{"{ts/js}"}
            </code>
            file.
        </p>
    );
};

const HTMLTheme = () => {
    return (
        <p className="text-base">
            You can change the primary, secondary, success and etc color easily. You need to customize colors in
            <code className="mx-1 rounded bg-base-content/10 px-1 py-0.5 text-base">tailwind.config.cjs</code>
            file.
        </p>
    );
};

const ThemeCustomizationPage = () => {
    return (
        <>
            <PageTitle
                title={"Theme Customization"}
                breadCrumbItems={[{ label: "Documentation" }, { label: "Customization", active: true }]}
            />

            <div className="mt-5">
                <Card className="bg-base-100">
                    <CardBody className="p-5">
                        <Tabs variant="boxed" className={"bg-transparent"}>
                            <RadioTab name="frameworks" label="Next.JS" contentClassName={"mt-4"} defaultChecked>
                                <NextJSTheme />
                            </RadioTab>
                            <RadioTab name="frameworks" label="React" contentClassName={"mt-4"}>
                                <NextJSTheme />
                            </RadioTab>
                            {/*<RadioTab name="frameworks" label="HTML" contentClassName={"mt-4"}>*/}
                            {/*    <HTMLTheme />*/}
                            {/*</RadioTab>*/}
                        </Tabs>
                        <Image
                            src={colorCustomization1Image}
                            alt="Color customization image"
                            className="mt-2 inline w-fit"
                        />
                        <p className="mt-2">
                            <span className="text-info">Note:</span> We use daisyui official configuration (plugin)
                            guidelines. So if you not a familiar with daisyui configuration then visit at
                        </p>
                        <ul className="ms-5 list-disc">
                            <li>
                                <Link href="https://daisyui.com/docs/colors/" target="_blank" className="text-primary">
                                    Colors
                                </Link>
                            </li>
                            <li>
                                <Link href="https://daisyui.com/docs/themes/" target="_blank" className="text-primary">
                                    Themes
                                </Link>
                            </li>
                        </ul>
                    </CardBody>
                </Card>
            </div>
        </>
    );
};

export default ThemeCustomizationPage;
