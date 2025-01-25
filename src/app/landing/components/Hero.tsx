import heroDashboardDarkLandingImg from "@/assets/images/landing/dashboard-hero-dark.png";
import heroDashboardLandingImg from "@/assets/images/landing/dashboard-hero.png";
import hero1LandingImg from "@/assets/images/landing/hero-1.jpg";
import hero2LandingImg from "@/assets/images/landing/hero-2.jpg";
import heroDark1LandingImg from "@/assets/images/landing/hero-dark-1.jpg";
import heroDark2LandingImg from "@/assets/images/landing/hero-dark-2.jpg";
import heroGradientImg from "@/assets/images/landing/hero-gradient.png";
import daisyuiLandingImg from "@/assets/images/landing/logo-daisyui.svg";
import htmlLandingImg from "@/assets/images/landing/logo-html.svg";
import javascriptLandingImg from "@/assets/images/landing/logo-js.svg";
import nextLandingImg from "@/assets/images/landing/logo-next.svg";
import reactLandingImg from "@/assets/images/landing/logo-react.svg";
import typescriptLandingImg from "@/assets/images/landing/logo-ts.svg";
import viteLandingImg from "@/assets/images/landing/logo-vite.svg";

import airplayIcon from "@iconify/icons-lucide/airplay";
import boxIcon from "@iconify/icons-lucide/box";

import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/Icon";
import { Button, Tooltip } from "@/components/daisyui";
import { routes } from "@/lib/routes";

const Hero = () => {
    return (
        <div>
            <div
                className="absolute inset-0 rotate-180 bg-cover bg-center bg-no-repeat opacity-20 dark:hidden"
                style={{ backgroundImage: `url(${heroGradientImg.src})`, filter: "blur(4px)" }}></div>
            <div className="container relative z-10 py-20 xl:py-48">
                <div className="grid items-center gap-8 xl:grid-cols-7 xl:gap-20">
                    <div className="order-2 xl:order-1 xl:col-span-3">
                        <Link
                            className="inline rounded-full bg-primary/20 px-2.5 py-0.5 text-sm font-medium text-primary"
                            href={"/docs/support/changelog"}
                            target="_blank">
                            What&apos;s New in 1.1
                        </Link>
                        <p className="mt-3 text-3xl font-semibold leading-normal">
                            Nexus - The Ultimate <br /> Admin & Client Dashboard
                        </p>

                        <p className="mt-8 max-w-[500px]">
                            Begin your next project with a foundation built on daisyUI, with effortless customization to
                            accelerate development process
                        </p>
                        <div className={"mt-8 inline-flex items-center gap-3"}>
                            <Link href={routes.dashboards.ecommerce}>
                                <Button color={"primary"} startIcon={<Icon icon={airplayIcon} fontSize={18} />}>
                                    Dashboard
                                </Button>
                            </Link>
                            <Link href={routes.ui.components.accordion}>
                                <Button color={"ghost"} startIcon={<Icon icon={boxIcon} fontSize={18} />}>
                                    Components
                                </Button>
                            </Link>
                        </div>
                        <div className="mt-8">
                            <p className="font-medium text-base-content/70">Development Stack</p>
                            <div className="mt-3 flex items-center gap-5">
                                <Tooltip message={"HTML"}>
                                    <Image src={htmlLandingImg} className="size-7" width={28} height={28} alt="HTML" />
                                </Tooltip>

                                <Tooltip message={"daisyUI - Component Library"}>
                                    <Image
                                        src={daisyuiLandingImg}
                                        className="size-7"
                                        width={28}
                                        height={28}
                                        alt="Next"
                                    />
                                </Tooltip>
                                <Tooltip message={"Javascript"}>
                                    <Image
                                        src={javascriptLandingImg}
                                        className="size-7"
                                        width={28}
                                        height={28}
                                        alt="Javascript"
                                    />
                                </Tooltip>
                                <Tooltip message={"Typescript"}>
                                    <Image
                                        src={typescriptLandingImg}
                                        className="size-7"
                                        width={28}
                                        height={28}
                                        alt="Typescript"
                                    />
                                </Tooltip>
                                <Tooltip message={"React"}>
                                    <Image
                                        src={reactLandingImg}
                                        className="size-6"
                                        width={28}
                                        height={28}
                                        alt="React"
                                    />
                                </Tooltip>
                                <Tooltip message={"Next.JS"}>
                                    <Image
                                        src={nextLandingImg}
                                        className="size-7 dark:invert"
                                        width={28}
                                        height={28}
                                        alt="Next"
                                    />
                                </Tooltip>
                                <Tooltip message={"Vite"}>
                                    <Image src={viteLandingImg} className="size-7" width={28} height={28} alt="Vite" />
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                    <div className="relative order-1 xl:order-2 xl:col-span-4">
                        <img
                            src={heroDashboardLandingImg.src}
                            className="inline rounded-md shadow-xl dark:hidden"
                            alt="hero-landing"
                        />
                        <img
                            src={heroDashboardDarkLandingImg.src}
                            className="hidden rounded-md shadow-xl dark:inline"
                            alt="hero-landing"
                        />
                        <img
                            src={hero1LandingImg.src}
                            className="absolute -start-16 top-[65%] hidden rounded-md shadow-xl dark:hidden xl:inline"
                            alt="hero-landing"
                        />
                        <img
                            src={heroDark1LandingImg.src}
                            className="absolute -start-16 top-[65%] hidden rounded-md shadow-xl dark:xl:inline"
                            alt="hero-landing"
                        />
                        <img
                            src={hero2LandingImg.src}
                            className="animate-bounce-2 absolute -end-32 top-3/4 hidden rounded-md shadow-xl dark:hidden xl:inline"
                            alt="hero-landing"
                        />
                        <img
                            src={heroDark2LandingImg.src}
                            className="animate-bounce-2 absolute -end-32 top-3/4 hidden rounded-md shadow-xl dark:xl:inline"
                            alt="hero-landing"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
