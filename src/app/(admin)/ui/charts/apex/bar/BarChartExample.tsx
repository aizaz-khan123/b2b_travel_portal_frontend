"use client";

import dynamic from "next/dynamic";
import { ReactElement } from "react";

import { LoadingEffect } from "@/components/LoadingEffect";
import { Card, CardBody } from "@/components/daisyui";

const BarWithMarkerChart = dynamic(() => import("./BarWithMarkerChart"), {
    ssr: false,
    loading: () => <LoadingEffect height={380} className="mb-4" />,
});
const GroupedBarChart = dynamic(() => import("./GroupedBarChart"), {
    ssr: false,
    loading: () => <LoadingEffect height={380} className="mb-4" />,
});
const StackedBarChart = dynamic(() => import("./StackedBarChart"), {
    ssr: false,
    loading: () => <LoadingEffect height={380} className="mb-4" />,
});
const NegativeValueBarChart = dynamic(() => import("./NegativeValueBarChart"), {
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

const BarChartExample = () => {
    return (
        <>
            <div className="mt-6 grid gap-6 xl:grid-cols-2">
                <SingleChart label={"Bar With Goals"} chartComponent={<BarWithMarkerChart />} />
                <SingleChart label={"Grouped Bar"} chartComponent={<GroupedBarChart />} />
                <SingleChart label={"Stacked Bar"} chartComponent={<StackedBarChart />} />
                <SingleChart label={"Negative Value"} chartComponent={<NegativeValueBarChart />} />
            </div>
        </>
    );
};

export default BarChartExample;
