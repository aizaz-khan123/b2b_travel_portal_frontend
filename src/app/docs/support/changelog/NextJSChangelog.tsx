import Link from "next/link";

import { Card } from "@/components/daisyui";

const NextJSChangelog = () => {
    return (
        <>
            <div className="">
                <Card className="bg-base-100">
                    <div className="p-5">
                        <p className="text-lg font-medium">
                            1.1 <span className="text-sm text-base-content/70">(Latest)</span>
                        </p>
                        <div className="mt-3 inline-block rounded bg-blue-500/10 px-2 py-1 text-sm font-medium text-blue-600">
                            Pages / UI
                        </div>
                        <ul className="mt-3 list-disc px-5">
                            <li>8 New Pages: CRUD Pages for ecommerce products, sellers, shops & customers</li>
                            <li>5 Types of New Chart: Apex Charts Examples (Area, Bar, Column, Line & Pie)</li>
                        </ul>
                        <div className="mt-3 inline-block rounded bg-emerald-500/10 px-2 py-1 text-sm font-medium text-emerald-600">
                            <p>Technology Stack (Upgrades)</p>
                        </div>
                        <ul className="mt-3 list-disc px-5">
                            <li>Minor: Next.js 14.2.x</li>
                            <li>Minor: React 18.3.x</li>
                            <li>Minor: Typescript 5.4.x</li>
                            <li>Minor: daisyUI 4.12.x</li>
                        </ul>
                        <div className="mt-3 inline-block rounded bg-purple-500/10 px-2 py-1 text-sm font-medium text-purple-600">
                            Features
                        </div>
                        <ul className="mt-3 list-disc px-5">
                            <li>Server Actions (Instead of axios)</li>
                            <li>Authentication using cookie (middleware)</li>
                        </ul>

                        <div className="mt-3 inline-block rounded bg-violet-500/10 px-2 py-1 text-sm font-medium text-violet-600">
                            Component
                        </div>
                        <ul className="mt-3 list-disc px-5">
                            <li>
                                Add select element with form validator (
                                <Link className="text-primary" href={"https://react-select.com/"} target="_blank">
                                    React-Select
                                </Link>
                                )
                            </li>
                            <li>Radio input with validator</li>
                        </ul>
                        <div className="mt-3 inline-block rounded bg-orange-500/10 px-2 py-1 text-sm font-medium text-orange-600">
                            Improvement
                        </div>
                        <ul className="mt-3 list-disc px-5">
                            <li>Add loading effect for all dynamic components</li>
                            <li>Add url support in breadcrumb for easy navigation</li>
                            <li>Enhancing documentation for better use</li>
                        </ul>
                        <div className="mt-3 inline-block rounded bg-red-500/10 px-2 py-1 text-sm font-medium text-red-600">
                            Fixes
                        </div>
                        <ul className="mt-3 list-disc px-5">
                            <li>Hydration issue, when you refresh page</li>
                            <li>Toast font family now matching to admin fonts</li>
                            <li>Autocomplete input has weird background color</li>
                            <li>Some other minor issues</li>
                        </ul>
                    </div>
                </Card>
            </div>
            <div className="mt-5">
                <Card className="bg-base-100">
                    <div className="p-5">
                        <p className="text-lg font-medium">
                            1.0 <span className="text-sm text-base-content/70">(Initial Release)</span>
                        </p>
                        <div className="mt-3 inline-block rounded bg-emerald-500/10 px-2 py-1 text-sm font-medium text-emerald-600">
                            <p>Technology Stack</p>
                        </div>

                        <ul className="mt-3 list-disc px-5">
                            <li>
                                Next.JS 14.1.x <span className="text-base-content/70">(App directory)</span>
                            </li>
                            <li>React 18.2.x</li>
                            <li>Typescript 5.3.x</li>
                            <li>daisyUI 4.7.x</li>
                        </ul>
                        <div className="mt-3 inline-block rounded bg-purple-500/10 px-2 py-1 text-sm font-medium text-purple-600">
                            <p>Features</p>
                        </div>
                        <ul className="mt-3 list-disc px-5">
                            <li>Initial Release</li>
                        </ul>
                    </div>
                </Card>
            </div>
        </>
    );
};

export { NextJSChangelog };
