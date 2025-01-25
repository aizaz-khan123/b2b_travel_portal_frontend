import type { Metadata } from "next";
import Link from "next/link";

import { PageTitle } from "@/components/PageTitle";
import { Card, CardBody, RadioTab, Tabs } from "@/components/daisyui";

export const metadata: Metadata = {
    title: "Quick Start",
};

const NextJSStart = () => {
    return (
        <Card className="bg-base-100">
            <CardBody className="p-5">
                <p className="text-base font-medium">
                    Installation{" "}
                    <span className="mt-3 text-sm italic text-base-content/70">(Run following commands)</span>
                </p>
                <p className="mt-2">1. Bun (Recommended for Linux/MacOS)</p>
                <div className="mt-2 rounded border border-base-content/20">
                    <table className="min-w-full divide-y divide-base-content/20">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-medium">Command</th>
                                <th className="px-6 py-3 text-left text-sm font-medium">Description</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-base-content/10">
                            <tr>
                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                                    <code className="select-all px-2 py-1">bun i</code>
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    This would install all required dependencies in{" "}
                                    <code className="italic text-orange-600">node_modules</code> folder.
                                </td>
                            </tr>
                            <tr>
                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                                    <code className="select-all px-2 py-1">bun dev</code>
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    Runs the project locally, starts the development server.
                                </td>
                            </tr>
                            <tr>
                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                                    <code className="select-all px-2 py-1">bun run build</code>
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    It bundles with production mode. Your app is now ready to be deployed.
                                </td>
                            </tr>
                            <tr>
                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                                    <code className="select-all px-2 py-1">bun run start</code>
                                </td>
                                <td className="px-6 py-4 text-sm">It previewed (serve) production build version.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="mt-2">2. Yarn (Recommended for Windows)</p>
                <div className="mt-2 rounded border border-base-content/20">
                    <table className="min-w-full divide-y divide-base-content/20">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-medium">Command</th>
                                <th className="px-6 py-3 text-left text-sm font-medium">Description</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-base-content/10">
                            <tr>
                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                                    <code className="select-all px-2 py-1">yarn i</code>
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    This would install all required dependencies in{" "}
                                    <code className="italic text-orange-600">node_modules</code> folder.
                                </td>
                            </tr>
                            <tr>
                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                                    <code className="select-all px-2 py-1">yarn dev</code>
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    Runs the project locally, starts the development server.
                                </td>
                            </tr>
                            <tr>
                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                                    <code className="select-all px-2 py-1">yarn run build</code>
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    It bundles with production mode. Your app is now ready to be deployed.
                                </td>
                            </tr>
                            <tr>
                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                                    <code className="select-all px-2 py-1">yarn start</code>
                                </td>
                                <td className="px-6 py-4 text-sm">It previewed (serve) production build version.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="mt-2">3. NPM</p>
                <div className="mt-2 rounded border border-base-content/20">
                    <table className="min-w-full divide-y divide-base-content/20">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-medium">Command</th>
                                <th className="px-6 py-3 text-left text-sm font-medium">Description</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-base-content/10">
                            <tr>
                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                                    <code className="select-all px-2 py-1">npm i</code>
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    This would install all required dependencies in{" "}
                                    <code className="italic text-orange-600">node_modules</code> folder.
                                </td>
                            </tr>
                            <tr>
                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                                    <code className="select-all px-2 py-1">npm run dev</code>
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    Runs the project locally, starts the development server.
                                </td>
                            </tr>
                            <tr>
                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                                    <code className="select-all px-2 py-1">npm run build</code>
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    It bundles with production mode. Your app is now ready to be deployed.
                                </td>
                            </tr>
                            <tr>
                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                                    <code className="select-all px-2 py-1">npm run start</code>
                                </td>
                                <td className="px-6 py-4 text-sm">It previewed (serve) production build version.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
};

const ReactStart = () => {
    return (
        <Card className="bg-base-100">
            <CardBody className="p-5">
                <p className="text-base font-medium">
                    Installation{" "}
                    <span className="mt-3 text-sm italic text-base-content/70">(Run following commands)</span>
                </p>
                <p className="mt-2">1. Bun (Recommended for Linux/MacOS)</p>
                <div className="mt-2 rounded border border-base-content/20">
                    <table className="min-w-full divide-y divide-base-content/20">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-medium">Command</th>
                                <th className="px-6 py-3 text-left text-sm font-medium">Description</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-base-content/10">
                            <tr>
                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                                    <code className="select-all px-2 py-1">bun i</code>
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    This would install all required dependencies in{" "}
                                    <code className="italic text-orange-600">node_modules</code> folder.
                                </td>
                            </tr>
                            <tr>
                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                                    <code className="select-all px-2 py-1">bun dev</code>
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    Runs the project locally, starts the development server.
                                </td>
                            </tr>
                            <tr>
                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                                    <code className="select-all px-2 py-1">bun run build</code>
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    It bundles with production mode. Your app is now ready to be deployed.
                                </td>
                            </tr>
                            <tr>
                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                                    <code className="select-all px-2 py-1">bun run preview</code>
                                </td>
                                <td className="px-6 py-4 text-sm">It previewed (serve) production build version.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="mt-2">2. Yarn (Recommended for Windows)</p>
                <div className="mt-2 rounded border border-base-content/20">
                    <table className="min-w-full divide-y divide-base-content/20">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-medium">Command</th>
                                <th className="px-6 py-3 text-left text-sm font-medium">Description</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-base-content/10">
                            <tr>
                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                                    <code className="select-all px-2 py-1">yarn i</code>
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    This would install all required dependencies in{" "}
                                    <code className="italic text-orange-600">node_modules</code> folder.
                                </td>
                            </tr>
                            <tr>
                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                                    <code className="select-all px-2 py-1">yarn dev</code>
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    Runs the project locally, starts the development server.
                                </td>
                            </tr>
                            <tr>
                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                                    <code className="select-all px-2 py-1">yarn run build</code>
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    It bundles with production mode. Your app is now ready to be deployed.
                                </td>
                            </tr>
                            <tr>
                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                                    <code className="select-all px-2 py-1">yarn preview</code>
                                </td>
                                <td className="px-6 py-4 text-sm">It previewed (serve) production build version.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="mt-2">3. NPM</p>
                <div className="mt-2 rounded border border-base-content/20">
                    <table className="min-w-full divide-y divide-base-content/20">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-medium">Command</th>
                                <th className="px-6 py-3 text-left text-sm font-medium">Description</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-base-content/10">
                            <tr>
                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                                    <code className="select-all px-2 py-1">npm i</code>
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    This would install all required dependencies in{" "}
                                    <code className="italic text-orange-600">node_modules</code> folder.
                                </td>
                            </tr>
                            <tr>
                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                                    <code className="select-all px-2 py-1">npm run dev</code>
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    Runs the project locally, starts the development server.
                                </td>
                            </tr>
                            <tr>
                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                                    <code className="select-all px-2 py-1">npm run build</code>
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    It bundles with production mode. Your app is now ready to be deployed.
                                </td>
                            </tr>
                            <tr>
                                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                                    <code className="select-all px-2 py-1">npm run preview</code>
                                </td>
                                <td className="px-6 py-4 text-sm">It previewed (serve) production build version.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
};

const QuickStartPage = () => {
    return (
        <>
            <PageTitle
                title={"Quick Start"}
                breadCrumbItems={[{ label: "Documentation" }, { label: "Quick Start", active: true }]}
            />

            <div className="mt-5">
                <Card className="bg-base-100">
                    <CardBody className="p-5">
                        <p className="text-base font-medium">Requirements</p>
                        <ul className="mt-3 list-disc px-5">
                            <li>
                                <Link href="https://nodejs.org/en" target="_blank">
                                    Node.js
                                </Link>{" "}
                                18.18.x or higher
                            </li>
                            <li>
                                It is compatible with{" "}
                                <Link href="https://www.npmjs.com/" target="_blank">
                                    NPM
                                </Link>
                                ,{" "}
                                <Link href="https://yarnpkg.com/" target="_blank">
                                    Yarn
                                </Link>{" "}
                                &{" "}
                                <Link href="https://bun.sh/" target="_blank">
                                    Bun
                                </Link>
                                , so if you have any of this then it is works (We recommended to use bun, for faster
                                installation)
                            </li>
                        </ul>
                    </CardBody>
                </Card>
                <div className="mt-5">
                    <Tabs variant="boxed" className={"bg-transparent"}>
                        <RadioTab name="frameworks" label="Next.JS" contentClassName={"mt-4"} defaultChecked>
                            <NextJSStart />
                        </RadioTab>
                        <RadioTab name="frameworks" label="React" contentClassName={"mt-4"}>
                            <ReactStart />
                        </RadioTab>
                        {/*<RadioTab name="frameworks" label="HTML" contentClassName={"mt-4"}>*/}
                        {/*    <ReactStart />*/}
                        {/*</RadioTab>*/}
                    </Tabs>
                </div>
            </div>
        </>
    );
};

export default QuickStartPage;
