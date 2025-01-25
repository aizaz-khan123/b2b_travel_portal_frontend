"use client";

import { useState } from "react";

import { Alert, Button, Card, CardBody, CardTitle, Toast } from "@/components/daisyui";

type ToastIds = "default" | "alert" | "multiple";

const ToastExample = () => {
    const [showToast, setShowToast] = useState<ToastIds | null>(null);

    return (
        <>
            <div className="grid gap-6 xl:grid-cols-2">
                <Card className="bg-base-100">
                    <CardBody>
                        <CardTitle>Default</CardTitle>
                        <div className="mt-1 flex">
                            <Button onClick={() => setShowToast("default")}>Show Default</Button>

                            {showToast == "default" && (
                                <Toast vertical={"bottom"} horizontal={"end"}>
                                    Default toast
                                </Toast>
                            )}
                        </div>
                    </CardBody>
                </Card>
                <Card className="bg-base-100">
                    <CardBody>
                        <CardTitle>Alert</CardTitle>
                        <div className="mt-1 flex">
                            <Button onClick={() => setShowToast("alert")}>Show Alert</Button>

                            {showToast == "alert" && (
                                <Toast vertical={"bottom"} horizontal={"end"}>
                                    <Alert status="info">New message arrived.</Alert>
                                </Toast>
                            )}
                        </div>
                    </CardBody>
                </Card>
                <Card className="bg-base-100">
                    <CardBody>
                        <CardTitle>Multiple</CardTitle>
                        <div className="mt-1 flex">
                            <Button onClick={() => setShowToast("multiple")}>Show Multiple</Button>

                            {showToast == "multiple" && (
                                <Toast vertical={"bottom"} horizontal={"end"}>
                                    <Alert status="info">New message arrived.</Alert>
                                    <Alert status="success">Message sent successfully.</Alert>
                                </Toast>
                            )}
                        </div>
                    </CardBody>
                </Card>
            </div>
        </>
    );
};

export default ToastExample;
