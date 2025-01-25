import cssLandingImg from "@/assets/images/landing/logo-css.svg";
import htmlLandingImg from "@/assets/images/landing/logo-html.svg";
import javascriptLandingImg from "@/assets/images/landing/logo-js.svg";
import nextLandingImg from "@/assets/images/landing/logo-next.svg";
import reactLandingImg from "@/assets/images/landing/logo-react.svg";
import typescriptLandingImg from "@/assets/images/landing/logo-ts.svg";

import checkIcon from "@iconify/icons-lucide/check";
import dollarSignIcon from "@iconify/icons-lucide/dollar-sign";
import xCircleIcon from "@iconify/icons-lucide/x-circle";

import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/Icon";
import { Tooltip } from "@/components/daisyui";
import { routes } from "@/lib/routes";

const Package = () => {
    return (
        <div>
            <div className="container py-24">
                <div className="text-center">
                    <div className="inline-block rounded border border-green-500/5 bg-green-500/5 p-2.5">
                        <Icon icon={dollarSignIcon} fontSize={20} className="text-green-600" />
                    </div>
                    <p className="mt-1 text-3xl font-semibold">Packages</p>
                    <p className="mt-3 inline-block max-w-sm text-base-content/70">
                        Discover clear, flexible pricing options to fit any budget, with no hidden fees
                    </p>
                </div>
                <div className="mt-8 grid gap-6 lg:grid-cols-3 xl:gap-12">
                    <div className="rounded border border-base-content/10 p-6">
                        <div className="inline rounded bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
                            Base
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                            <div>
                                <p className="text-xl font-medium">Starter</p>
                            </div>
                            <p className="text-2xl font-semibold">$29</p>
                        </div>
                        <div className="mt-3 flex items-center gap-3">
                            <Tooltip message={"Javascript"}>
                                <Image src={javascriptLandingImg} alt="Javascript" className="size-5" />
                            </Tooltip>
                            <Tooltip message={"Typescript"}>
                                <Image src={typescriptLandingImg} alt="Typescript" className="size-5" />
                            </Tooltip>
                            <Tooltip message={"React"}>
                                <Image src={reactLandingImg} alt="React" className="size-[18px]" />
                            </Tooltip>
                        </div>
                        <p className="mt-4 text-base-content/90">One Dashboard Page (React)</p>
                        <p className="mt-4 text-sm text-base-content/70">What&apos;s Included:</p>
                        <div className="mt-3 space-y-2">
                            <div className="flex items-center gap-3">
                                <Icon icon={checkIcon} fontSize={16} className="text-green-500" />
                                <p>React Version</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Icon icon={xCircleIcon} fontSize={16} className="text-base-content/40" />
                                <p>Next.JS Version</p>
                            </div>
                            <div>
                                <div className="my-3 block border border-dashed border-base-content/10" />
                            </div>
                            <div className="flex items-center gap-3">
                                <Icon icon={checkIcon} fontSize={16} className="text-green-500" />
                                <p>Ecommerce Dashboard</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Icon icon={xCircleIcon} fontSize={16} className="text-base-content/40" />
                                <p>Apps</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Icon icon={xCircleIcon} fontSize={16} className="text-base-content/40" />
                                <p>Components</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Icon icon={xCircleIcon} fontSize={16} className="text-base-content/40" />
                                <p>Apex Charts Examples</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Icon icon={xCircleIcon} fontSize={16} className="text-base-content/40" />
                                <p>Authentication</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <Icon icon={xCircleIcon} fontSize={16} className="text-base-content/40" />
                                <p>Extra Pages</p>
                            </div>
                        </div>
                        <Link
                            className="btn btn-ghost btn-block mt-10 border-base-content/10"
                            href={routes.externalLinks.purchase}
                            target={"_blank"}>
                            Buy Now
                        </Link>
                    </div>
                    <div className="rounded border border-base-content/10 p-6">
                        <div className="inline rounded bg-primary px-3 py-1 text-sm font-medium text-primary-content">
                            Most Popular
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                            <p className="text-xl font-medium">Standard</p>
                            <p className="text-2xl font-semibold">$59</p>
                        </div>
                        <div className="mt-3 flex items-center gap-3">
                            <Tooltip message={"Javascript"}>
                                <Image src={javascriptLandingImg} className="size-5" alt="Javascript" />
                            </Tooltip>
                            <Tooltip message={"Typescript"}>
                                <Image src={typescriptLandingImg} className="size-5" alt="Typescript" />
                            </Tooltip>
                            <Tooltip message={"React"}>
                                <Image src={reactLandingImg} alt="React" className="size-[18px]" />
                            </Tooltip>
                        </div>
                        <p className="mt-4 text-base-content/90">Multi Page (React)</p>
                        <p className="mt-4 text-sm text-base-content/70">What&apos;s Included:</p>
                        <div className="mt-3 space-y-2">
                            <div className="flex items-center gap-3">
                                <Icon icon={checkIcon} fontSize={16} className="text-green-500" />
                                <p>React Version</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Icon icon={xCircleIcon} fontSize={16} className="text-base-content/40" />
                                <p>Next.JS Version</p>
                            </div>
                            <div>
                                <div className="my-3 block border border-dashed border-base-content/10" />
                            </div>
                            <div className="flex items-center gap-3">
                                <Icon icon={checkIcon} fontSize={16} className="text-green-500" />
                                <p>Dashboard</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Icon icon={checkIcon} fontSize={16} className="text-green-500" />
                                <p>3 Apps</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Icon icon={checkIcon} fontSize={16} className="text-green-500" />
                                <p>26 Components</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Icon icon={checkIcon} fontSize={16} className="text-green-500" />
                                <p>Apex Charts Examples</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Icon icon={checkIcon} fontSize={16} className="text-green-500" />
                                <p>4 Auth Pages</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <Icon icon={checkIcon} fontSize={16} className="text-green-500" />
                                <p>Extra Pages</p>
                            </div>
                        </div>
                        <Link
                            className="btn btn-primary btn-block mt-10 border-base-content/10"
                            href={routes.externalLinks.purchase}
                            target={"_blank"}>
                            Buy Now
                        </Link>
                    </div>
                    <div className="rounded border border-base-content/10 p-6">
                        <div className="inline rounded bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-600">
                            Enhanced Version
                        </div>

                        <div className="mt-2 flex items-center justify-between">
                            <p className="text-xl font-medium">Pro</p>
                            <p className="text-2xl font-semibold">$119</p>
                        </div>
                        <div className="mt-3 flex items-center gap-3">
                            <Tooltip message={"Javascript"}>
                                <Image src={javascriptLandingImg} className="size-5" alt="Javascript" />
                            </Tooltip>
                            <Tooltip message={"Typescript"}>
                                <Image src={typescriptLandingImg} className="size-5" alt="Typescript" />
                            </Tooltip>
                            <Tooltip message={"React"}>
                                <Image src={reactLandingImg} alt="React" className="size-[18px]" />
                            </Tooltip>
                            <Tooltip message={"Next.JS"}>
                                <Image src={nextLandingImg} className="size-5 dark:invert" alt="Next" />
                            </Tooltip>
                        </div>
                        <p className="mt-4 text-base-content/90">Multi Page (Next.JS)</p>
                        <p className="mt-4 text-sm text-base-content/70">What&apos;s Included:</p>
                        <div className="mt-3 space-y-2">
                            <div className="flex items-center gap-3">
                                <Icon icon={checkIcon} fontSize={16} className="text-green-500" />
                                <p>React Version</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Icon icon={checkIcon} fontSize={16} className="text-green-500" />
                                <p>Next.JS Version</p>
                            </div>
                            <div>
                                <div className="my-3 block border border-dashed border-base-content/10" />
                            </div>
                            <div className="flex items-center gap-3">
                                <Icon icon={checkIcon} fontSize={16} className="text-green-500" />
                                <p>Dashboard</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Icon icon={checkIcon} fontSize={16} className="text-green-500" />
                                <p>3 Apps</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Icon icon={checkIcon} fontSize={16} className="text-green-500" />
                                <p>26 Components</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Icon icon={checkIcon} fontSize={16} className="text-green-500" />
                                <p>Apex Charts Examples</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Icon icon={checkIcon} fontSize={16} className="text-green-500" />
                                <p>4 Auth Pages</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Icon icon={checkIcon} fontSize={16} className="text-green-500" />
                                <p>Extra Pages</p>
                            </div>
                        </div>

                        <Link
                            className="btn btn-ghost btn-outline btn-block mt-10 border-base-content/10"
                            href={routes.externalLinks.purchase}
                            target={"_blank"}>
                            Buy Now
                        </Link>
                    </div>
                    <div className="rounded border border-base-content/10 p-6">
                        <div className="inline rounded bg-teal-500/10 px-3 py-1 text-sm font-medium text-teal-600">
                            Foundation
                        </div>

                        <div className="mt-2 flex items-center justify-between">
                            <p className="text-xl font-medium">HTML</p>
                            <p className="text-2xl font-semibold text-base-content/70">Coming Soon</p>
                        </div>
                        <div className="mt-3 flex items-center gap-3">
                            <Tooltip message={"HTML"}>
                                <Image src={htmlLandingImg} className="size-5" alt="HTML" />
                            </Tooltip>
                            <Tooltip message={"CSS"}>
                                <Image src={cssLandingImg} className="size-5" alt="CSS" />
                            </Tooltip>
                            <Tooltip message={"Javascript"}>
                                <Image src={javascriptLandingImg} className="size-5" alt="Javascript" />
                            </Tooltip>
                        </div>
                        <p className="mt-4 text-base-content/90">Multi Page</p>
                        <p className="mt-4 text-sm text-base-content/70">What&apos;s Included:</p>
                        <div className="mt-3 space-y-2">
                            <div className="flex items-center gap-3">
                                <Icon icon={checkIcon} fontSize={16} className="text-green-500" />
                                <p>HTML Version</p>
                            </div>
                            <div>
                                <div className="my-3 block border border-dashed border-base-content/10" />
                            </div>
                            <div className="flex items-center gap-3">
                                <Icon icon={checkIcon} fontSize={16} className="text-green-500" />
                                <p>Dashboard</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Icon icon={checkIcon} fontSize={16} className="text-green-500" />
                                <p>3 Apps</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Icon icon={checkIcon} fontSize={16} className="text-green-500" />
                                <p>26 Components</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Icon icon={checkIcon} fontSize={16} className="text-green-500" />
                                <p>Apex Charts Examples</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Icon icon={checkIcon} fontSize={16} className="text-green-500" />
                                <p>4 Auth Pages</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Icon icon={checkIcon} fontSize={16} className="text-green-500" />
                                <p>Extra Pages</p>
                            </div>
                        </div>

                        {/*<Link*/}
                        {/*    className="btn btn-disabled btn-ghost btn-outline btn-block mt-10 border-base-content/10"*/}
                        {/*    href={routes.externalLinks.purchase}*/}
                        {/*    target={"_blank"}>*/}
                        {/*    Coming Soon*/}
                        {/*</Link>*/}
                    </div>
                </div>

                <div>
                    <p className="mt-3">
                        You can check full details:{" "}
                        <Link href={"/docs/knowledge/package"} className="text-primary" target="_blank">
                            Packages
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Package;
