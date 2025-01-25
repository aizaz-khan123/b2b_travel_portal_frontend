import checkCircle2Icon from "@iconify/icons-lucide/check-circle-2";
import clockIcon from "@iconify/icons-lucide/clock";
import microscopeIcon from "@iconify/icons-lucide/microscope";

import type { Metadata } from "next";
import Link from "next/link";

import { Icon } from "@/components/Icon";
import { PageTitle } from "@/components/PageTitle";
import { Card, CardBody, CardTitle } from "@/components/daisyui";

export const metadata: Metadata = {
    title: "Roadmap",
};

const DoneIcon = () => <Icon icon={checkCircle2Icon} className="text-success" fontSize={17} />;
const RemainIcon = () => <Icon icon={clockIcon} className="text-base-content/50" fontSize={17} />;
const CouldBeIcon = () => <Icon icon={microscopeIcon} className="text-base-content/50" fontSize={17} />;

const PackagePage = () => {
    return (
        <>
            <PageTitle
                title={"Roadmap"}
                breadCrumbItems={[{ label: "Documentation" }, { label: "Support", active: true }]}
            />

            <div className="mt-5">
                <div className="space-y-5">
                    <Card className="bg-base-100">
                        <CardBody className="p-5">
                            <CardTitle>v1.1 (Available Now)</CardTitle>
                            <ol>
                                <li className="my-2 flex items-center gap-2">
                                    <DoneIcon />
                                    <Link href={"/docs/support/changelog"} className="text-primary">
                                        Changelog
                                    </Link>
                                </li>
                            </ol>
                        </CardBody>
                    </Card>
                    <Card className="bg-base-100">
                        <CardBody className="p-5">
                            <CardTitle>v1.2 (Next Release) - Collecting Feedbacks</CardTitle>
                            <ol>
                                <li className="my-2 space-y-2">
                                    <div className="flex items-center gap-2">
                                        <CouldBeIcon />
                                        <span>Could Be: One More Dashboard</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <CouldBeIcon />
                                        <span>Could Be: Figma Version</span>
                                    </div>
                                </li>
                            </ol>
                        </CardBody>
                    </Card>
                    <div className="py-3">
                        <div className="space-y-4">
                            <div className={"ms-2 flex items-center gap-3 text-base-content/60"}>
                                <div className="size-2 rounded-full bg-base-content/50"></div>
                                v1.3
                            </div>
                            <div className={"ms-2 flex items-center gap-3 text-base-content/60"}>
                                <div className="size-2 rounded-full bg-base-content/50"></div>
                                v1.4
                            </div>
                            <hr className={"ms-3 h-16 w-fit border-s border-dashed border-base-content/40"} />
                        </div>
                    </div>
                    <Card className="bg-base-100">
                        <CardBody className="p-5">
                            <CardTitle>v2.0 (Major Release) - Collecting Feedback</CardTitle>
                            <p>
                                <span className={"text-info"}>Note:</span> You can send us feedback on discord at{" "}
                                <Link
                                    className={"text-primary"}
                                    href={"https://discord.com/channels/1204154732978118716/1204716339500032000"}
                                    target="_blank">
                                    suggestions channel
                                </Link>{" "}
                                or{" "}
                                <Link
                                    href={"https://forms.gle/UeX3jgsjFNFcZsq9A"}
                                    target={"_blank"}
                                    className="text-primary">
                                    Fill Feedback Form
                                </Link>
                            </p>
                            <ol>
                                <li className="my-2 flex items-center gap-2">
                                    <RemainIcon />
                                    <span className="text-base-content/60">Feature: Multilingual</span>
                                </li>
                            </ol>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </>
    );
};

export default PackagePage;
