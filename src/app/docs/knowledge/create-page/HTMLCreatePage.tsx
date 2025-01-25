"use client";

import Link from "next/link";

import { Card, CardBody } from "@/components/daisyui";

const HTMLCreatePage = () => {
    return (
        <>
            <Card className="bg-base-100">
                <CardBody className="p-5">
                    <p className="text-lg font-medium">Basic Instruction</p>
                    <ul className="ms-5 mt-2 list-disc">
                        <li>
                            You can create a page in <code>/src</code> directory.
                        </li>
                        <li>
                            If you need any custom js for that page then add it to <code>/src/assets/js/</code>{" "}
                            directory
                        </li>
                        <li>
                            If you need to use specific assets (images, videos or any assets), then you use{" "}
                            <code>
                                /assets/
                                {"{images/videos/data}"}/
                            </code>
                        </li>
                    </ul>
                </CardBody>
            </Card>
            <p className="mt-4">
                <span className="text-success">Note:</span> For more details about folder structure you should look into
            </p>
            <ul className="ms-5 mt-2 list-disc">
                <li>
                    <Link href={"/docs/knowledge/folder-structure"} className="text-primary">
                        Folder Structure
                    </Link>
                </li>
            </ul>
        </>
    );
};

export { HTMLCreatePage };
