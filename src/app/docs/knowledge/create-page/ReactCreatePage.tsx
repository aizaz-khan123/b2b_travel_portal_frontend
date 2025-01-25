"use client";

import Link from "next/link";

import { Card, CardBody } from "@/components/daisyui";

const ReactCreatePage = () => {
    return (
        <>
            <Card className="bg-base-100">
                <CardBody className="p-5">
                    <p className="text-lg font-medium">Basic Instruction</p>
                    <ul className="ms-5 mt-2 list-disc">
                        <li>
                            You can create a page in /pages directory. Also you need to add routes into{" "}
                            <code>/src/lib/routes/register.{"{tsx/jsx}"}</code>
                        </li>
                        <li>
                            If you also create own types for that page then you need to create types in{" "}
                            <code>/types</code> directory
                        </li>
                        <li>
                            If you need any api function like fetching, create, edit data then you need to write that
                            type of functions into <code>/api</code> directory
                        </li>
                        <li>
                            If you need any database related function then it will goes to <code>/database</code>{" "}
                            directory (Currently it has dummy database & dummy data, But in your case, if you want to
                            setup own database with ORM then this folder good for consideration)
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
            <Card className="mt-5 bg-base-100">
                <CardBody className="p-5">
                    <p className="text-lg font-medium">Creating Admin Page</p>
                    <ul className="ms-5 mt-2 list-disc">
                        <li>
                            You can create a page in <code>/src/pages/admin/</code> directory. Hence you can add it any
                            where and add it to routes. But for consistency, this folder is good.
                        </li>
                        <li>
                            Remaining thing you should use <span>Basic Instruction</span> as above instruction
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
                <li>
                    <Link href={"https://reactrouter.com/en/main"} target="_blank" className="text-primary">
                        React Router Routing
                    </Link>
                </li>
            </ul>
        </>
    );
};

export { ReactCreatePage };
