"use client";

import dynamic from "next/dynamic";
import { ReactElement } from "react";

import { LoadingEffect } from "@/components/LoadingEffect";
import { Card, CardBody } from "@/components/daisyui";

const StackedColumnChart = dynamic(() => import("./StackedColumnChart"), {
    ssr: false,
    loading: () => <LoadingEffect height={380} className="mb-4" />,
});
const DumbbellColumnChart = dynamic(() => import("./DumbbellColumnChart"), {
    ssr: false,
    loading: () => <LoadingEffect height={380} className="mb-4" />,
});
const DynamicLoadingColumnChart = dynamic(() => import("./DynamicLoadingColumnChart"), {
    ssr: false,
    loading: () => <LoadingEffect height={380} className="mb-4" />,
});
const RangeColumnChart = dynamic(() => import("./RangeColumnChart"), {
    ssr: false,
    loading: () => <LoadingEffect height={380} className="mb-4" />,
});

const SingleChart = ({ label, chartComponent }: { label: string; chartComponent: ReactElement }) => (
    <Card className="bg-base-100">
        <CardBody className="gap-3 pb-0">
            <p className="font-medium">{label}</p>
            {chartComponent}
        </CardBody>
    </Card>
);

const ColumnChartExample = () => {
    return (
        <>
            <div className="mt-6 grid gap-6 xl:grid-cols-2">
                <SingleChart label={"Stacked Column"} chartComponent={<StackedColumnChart />} />
                <SingleChart label={"Dumbbell Column"} chartComponent={<DumbbellColumnChart />} />
                <SingleChart label={"Range Column"} chartComponent={<RangeColumnChart />} />
                <SingleChart label={"Dynamic Desaturate Column"} chartComponent={<DynamicLoadingColumnChart />} />
            </div>
        </>
    );
};

export default ColumnChartExample;
