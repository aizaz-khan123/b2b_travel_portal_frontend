"use client";

import dynamic from "next/dynamic";
import { ReactElement } from "react";

import { LoadingEffect } from "@/components/LoadingEffect";
import { Card, CardBody } from "@/components/daisyui";

const SimplePieChart = dynamic(() => import("./SimplePieChart"), {
    ssr: false,
    loading: () => <LoadingEffect height={370} className="mb-4" />,
});
const GradientDonutChart = dynamic(() => import("./GradientDonutChart"), {
    ssr: false,
    loading: () => <LoadingEffect height={370} className="mb-4" />,
});
const DonutPatternChart = dynamic(() => import("./DonutPatternChart"), {
    ssr: false,
    loading: () => <LoadingEffect height={370} className="mb-4" />,
});
const MonochromePieChart = dynamic(() => import("./MonochromePieChart"), {
    ssr: false,
    loading: () => <LoadingEffect height={370} className="mb-4" />,
});

const SingleChart = ({ label, chartComponent }: { label: string; chartComponent: ReactElement }) => (
    <Card className="bg-base-100">
        <CardBody className="gap-3 pb-0">
            <p className="font-medium">{label}</p>
            {chartComponent}
        </CardBody>
    </Card>
);

const PieChartExample = () => {
    return (
        <>
            <div className="mt-6 grid gap-6 xl:grid-cols-2">
                <SingleChart label="Simple Pie" chartComponent={<SimplePieChart />} />
                <SingleChart label="Gradient Donut" chartComponent={<GradientDonutChart />} />
                <SingleChart label="Pattern Donut" chartComponent={<DonutPatternChart />} />
                <SingleChart label="Monochrome Pie" chartComponent={<MonochromePieChart />} />
            </div>
        </>
    );
};

export default PieChartExample;
