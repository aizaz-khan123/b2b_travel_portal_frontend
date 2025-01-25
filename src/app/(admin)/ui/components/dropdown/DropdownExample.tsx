"use client";

import infoIcon from "@iconify/icons-lucide/info";

import { useEffect, useState } from "react";

import { Icon } from "@/components/Icon";
import { Card, CardBody, CardTitle, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "@/components/daisyui";

const DropdownExample = () => {
    const [value, setValue] = useState<number>(59);
    useEffect(() => {
        const timer = setTimeout(() => {
            setValue((v) => (v <= 0 ? 59 : v - 1));
        }, 1000);
        return () => {
            clearTimeout(timer);
        };
    }, [value]);

    return (
        <>
            <div className="grid gap-6 xl:grid-cols-2">
                <Card className="bg-base-100">
                    <CardBody>
                        <CardTitle>Default</CardTitle>
                        <div className="mt-1 flex flex-wrap gap-4">
                            <Dropdown>
                                <DropdownToggle>Click</DropdownToggle>
                                <DropdownMenu className="w-52">
                                    <DropdownItem anchor={false}>
                                        <div>Item 1</div>
                                    </DropdownItem>
                                    <DropdownItem anchor={false}>
                                        <div>Item 2</div>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <Dropdown hover>
                                <DropdownToggle>Hover</DropdownToggle>
                                <DropdownMenu className="w-52">
                                    <DropdownItem anchor={false}>
                                        <div>Item 1</div>
                                    </DropdownItem>
                                    <DropdownItem anchor={false}>
                                        <div>Item 2</div>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <Dropdown>
                                <DropdownToggle disabled>Disabled</DropdownToggle>
                            </Dropdown>
                        </div>
                    </CardBody>
                </Card>
                <Card className="bg-base-100">
                    <CardBody>
                        <CardTitle>As a Card</CardTitle>
                        <div className="mt-1 flex flex-wrap gap-4">
                            <Dropdown>
                                <DropdownToggle>Click</DropdownToggle>
                                <DropdownMenu className="card card-compact m-1 w-64 bg-primary p-2 text-primary-content shadow">
                                    <CardBody>
                                        <CardTitle tag={"h3"}>Card title!</CardTitle>
                                        <p>you can use any element as a dropdown</p>
                                    </CardBody>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </CardBody>
                </Card>
                <Card className="bg-base-100">
                    <CardBody>
                        <CardTitle>Position</CardTitle>
                        <div className="mt-1 flex flex-wrap gap-4">
                            <Dropdown vertical="top">
                                <DropdownToggle>Top</DropdownToggle>
                                <DropdownMenu className="w-52">
                                    <DropdownItem anchor={false}>
                                        <div>Item 1</div>
                                    </DropdownItem>
                                    <DropdownItem anchor={false}>
                                        <div>Item 2</div>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>

                            <Dropdown vertical="bottom">
                                <DropdownToggle>Bottom</DropdownToggle>
                                <DropdownMenu className="w-52">
                                    <DropdownItem anchor={false}>
                                        <div>Item 1</div>
                                    </DropdownItem>
                                    <DropdownItem anchor={false}>
                                        <div>Item 2</div>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>

                            <Dropdown horizontal="left">
                                <DropdownToggle>Left</DropdownToggle>
                                <DropdownMenu className="w-52">
                                    <DropdownItem anchor={false}>
                                        <div>Item 1</div>
                                    </DropdownItem>
                                    <DropdownItem anchor={false}>
                                        <div>Item 2</div>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>

                            <Dropdown horizontal="right">
                                <DropdownToggle>Right</DropdownToggle>
                                <DropdownMenu className="w-52">
                                    <DropdownItem anchor={false}>
                                        <div>Item 1</div>
                                    </DropdownItem>
                                    <DropdownItem anchor={false}>
                                        <div>Item 2</div>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </CardBody>
                </Card>
                <Card className="bg-base-100">
                    <CardBody>
                        <CardTitle>Color</CardTitle>
                        <div className="mt-1 flex flex-wrap gap-4">
                            <Dropdown>
                                <DropdownToggle color="primary">Primary</DropdownToggle>
                                <DropdownMenu className="w-52">
                                    <DropdownItem anchor={false}>
                                        <div>Item 1</div>
                                    </DropdownItem>
                                    <DropdownItem anchor={false}>
                                        <div>Item 2</div>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <Dropdown>
                                <DropdownToggle color="secondary">Secondary</DropdownToggle>
                                <DropdownMenu className="w-52">
                                    <DropdownItem anchor={false}>
                                        <div>Item 1</div>
                                    </DropdownItem>
                                    <DropdownItem anchor={false}>
                                        <div>Item 2</div>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <Dropdown>
                                <DropdownToggle color="success">Success</DropdownToggle>
                                <DropdownMenu className="w-52">
                                    <DropdownItem anchor={false}>
                                        <div>Item 1</div>
                                    </DropdownItem>
                                    <DropdownItem anchor={false}>
                                        <div>Item 2</div>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <Dropdown>
                                <DropdownToggle color="info">Info</DropdownToggle>
                                <DropdownMenu className="w-52">
                                    <DropdownItem anchor={false}>
                                        <div>Item 1</div>
                                    </DropdownItem>
                                    <DropdownItem anchor={false}>
                                        <div>Item 2</div>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <Dropdown>
                                <DropdownToggle color="warning">Warning</DropdownToggle>
                                <DropdownMenu className="w-52">
                                    <DropdownItem anchor={false}>
                                        <div>Item 1</div>
                                    </DropdownItem>
                                    <DropdownItem anchor={false}>
                                        <div>Item 2</div>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                            <Dropdown>
                                <DropdownToggle color="error">Error</DropdownToggle>
                                <DropdownMenu className="w-52">
                                    <DropdownItem anchor={false}>
                                        <div>Item 1</div>
                                    </DropdownItem>
                                    <DropdownItem anchor={false}>
                                        <div>Item 2</div>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </CardBody>
                </Card>
                <Card className="bg-base-100">
                    <CardBody>
                        <CardTitle>In Text</CardTitle>
                        <div className="mt-1 flex flex-wrap items-center">
                            <span className="text-sm/none">A normal text and a helper dropdown</span>
                            <Dropdown horizontal={"left"} vertical={"top"}>
                                <DropdownToggle button={false} className="btn btn-circle btn-ghost btn-xs">
                                    <Icon icon={infoIcon} className="size-4" />
                                </DropdownToggle>
                                <DropdownMenu className="card compact w-64 rounded-box bg-base-100 !p-0 shadow">
                                    <CardBody>
                                        <CardTitle tag={"h2"}>You needed more info?</CardTitle>
                                        <p>Here is a description!</p>
                                    </CardBody>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </>
    );
};

export default DropdownExample;
