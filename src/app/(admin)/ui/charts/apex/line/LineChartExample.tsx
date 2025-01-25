"use client";

import dynamic from "next/dynamic";
import { ReactElement } from "react";

import { LoadingEffect } from "@/components/LoadingEffect";
import { Card, CardBody } from "@/components/daisyui";

const LabelLineChart = dynamic(() => import("./LabelLineChart"), {
    ssr: false,
    loading: () => <LoadingEffect height={380} className="mb-4" />,
});
const StepLineChart = dynamic(() => import("./StepLineChart"), {
    ssr: false,
    loading: () => <LoadingEffect height={380} className="mb-4" />,
});
const SyncingLineChart = dynamic(() => import("./SyncingLineChart"), {
    ssr: false,
    loading: () => <LoadingEffect height={380} className="mb-4" />,
});
const AnnotationLineChart = dynamic(() => import("./AnnotationLineChart"), {
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

const LineChartExample = () => {
    return (
        <>
            <div className="mt-6 grid gap-6 xl:grid-cols-2">
                <SingleChart label="Label Line" chartComponent={<LabelLineChart />} />
                <SingleChart label="Step Line" chartComponent={<StepLineChart />} />
                <SingleChart label="Syncing Line" chartComponent={<SyncingLineChart />} />
                <SingleChart label="Annotation Line" chartComponent={<AnnotationLineChart />} />
            </div>
        </>
    );
};

export default LineChartExample;
