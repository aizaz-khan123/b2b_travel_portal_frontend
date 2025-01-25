"use client";

import eyeIcon from "@iconify/icons-lucide/eye";
import globe2Icon from "@iconify/icons-lucide/globe-2";

import dynamic from "next/dynamic";

import { Icon } from "@/components/Icon";
import { LoadingEffect } from "@/components/LoadingEffect";
import { Button, Card, CardBody } from "@/components/daisyui";

const TopCountryChart = dynamic(() => import("./TopCountryChart").then((d) => d.DashboardTopCountryChart), {
    ssr: false,
    loading: () => <LoadingEffect height={290} className="m-5" />,
});

const DashboardTopCountry = () => {
    return (
        <Card className="bg-base-100">
            <CardBody className="gap-0 p-0">
                <div className="flex items-center gap-3 px-5 pt-5">
                    <Icon icon={globe2Icon} className="text-base-content/80" fontSize={16} />
                    <span className="grow font-medium">Top Countries (% in Sales)</span>
                    <Button
                        startIcon={<Icon icon={eyeIcon} fontSize={16} />}
                        color="ghost"
                        className={"bg-base-content/5"}
                        size={"sm"}>
                        Overview
                    </Button>
                </div>
                <div className="mb-3 me-5">
                    <TopCountryChart />
                </div>
            </CardBody>
        </Card>
    );
};

export { DashboardTopCountry };
