"use client";

import dynamic from "next/dynamic";
import { ReactElement } from "react";

import { LoadingEffect } from "@/components/LoadingEffect";
import { Card, CardBody, CardTitle } from "@/components/daisyui";

const AreaIrregularTimeSeriesChart = dynamic(() => import("./AreaIrregularTimeSeriesChart"), {
    ssr: false,
    loading: () => <LoadingEffect height={380} className="mb-4" />,
});
const AreaNegativeValueChart = dynamic(() => import("./AreaNegativeValueChart"), {
    ssr: false,
    loading: () => <LoadingEffect height={380} className="mb-4" />,
});
const AreaSplineChart = dynamic(() => import("./AreaSplineChart"), {
    ssr: false,
    loading: () => <LoadingEffect height={380} className="mb-4" />,
});
const AreaSelectionChart = dynamic(() => import("./AreaSelectionChart"), {
    ssr: false,
    loading: () => <LoadingEffect height={380} className="mb-4" />,
});

const ChartExample = ({ title, Chart }: { title: string; Chart: ReactElement }) => (
    <Card className="bg-base-100">
        <CardBody className="gap-3 pb-0">
            <CardTitle>{title}</CardTitle>
            {Chart}
        </CardBody>
    </Card>
);

const AreaChartExample = () => {
    return (
        <>
            <div className="mt-6 grid gap-6 xl:grid-cols-2">
                <ChartExample title={"Spline Area"} Chart={<AreaSplineChart />} />
                <ChartExample title={"Negative Value Area"} Chart={<AreaNegativeValueChart />} />
                <ChartExample title={"Irregular Time Series Area"} Chart={<AreaIrregularTimeSeriesChart />} />
                <ChartExample title={"Selection Area"} Chart={<AreaSelectionChart />} />
            </div>
        </>
    );
};

export default AreaChartExample;
