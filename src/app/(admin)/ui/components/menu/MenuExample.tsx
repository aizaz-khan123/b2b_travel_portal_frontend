import barChart3Icon from "@iconify/icons-lucide/bar-chart-3";
import homeIcon from "@iconify/icons-lucide/home";
import infoIcon from "@iconify/icons-lucide/info";

import { Icon } from "@/components/Icon";
import { Card, CardBody, CardTitle, Menu, MenuDetails, MenuItem, MenuTitle } from "@/components/daisyui";

const MenuExample = () => {
    return (
        <>
            <div className="grid gap-6 xl:grid-cols-2">
                <Card className="bg-base-100">
                    <CardBody>
                        <CardTitle>Default</CardTitle>
                        <div className="mt-1">
                            <Menu className="w-48 rounded bg-base-200">
                                <MenuItem>
                                    <a aria-label="Menu item link">Item 1</a>
                                </MenuItem>
                                <MenuItem>
                                    <a aria-label="Menu item link">Item 2</a>
                                </MenuItem>
                                <MenuItem disabled>
                                    <a aria-label="Menu item link">Item 3</a>
                                </MenuItem>
                            </Menu>
                        </div>
                    </CardBody>
                </Card>

                <Card className="bg-base-100">
                    <CardBody>
                        <CardTitle>Icons</CardTitle>
                        <div className="mt-1">
                            <Menu className="w-fit rounded bg-base-200">
                                <MenuItem>
                                    <a aria-label="Menu item link">
                                        <Icon icon={homeIcon} className="size-5" />
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a aria-label="Menu item link">
                                        <Icon icon={infoIcon} className="size-5" />
                                    </a>
                                </MenuItem>
                                <MenuItem disabled>
                                    <a aria-label="Menu item link">
                                        <Icon icon={barChart3Icon} className="size-5" />
                                    </a>
                                </MenuItem>
                            </Menu>
                        </div>
                    </CardBody>
                </Card>

                <Card className="bg-base-100">
                    <CardBody>
                        <CardTitle>Horizontal</CardTitle>
                        <div className="mt-1">
                            <Menu className="rounded bg-base-200" horizontal>
                                <MenuItem>
                                    <a aria-label="Menu item link">Item 1</a>
                                </MenuItem>
                                <MenuItem>
                                    <a aria-label="Menu item link">Item 2</a>
                                </MenuItem>
                                <MenuItem>
                                    <a aria-label="Menu item link">Item 3</a>
                                </MenuItem>
                            </Menu>
                        </div>
                    </CardBody>
                </Card>

                <Card className="bg-base-100">
                    <CardBody>
                        <CardTitle>Horizontal Icons</CardTitle>
                        <div className="mt-1">
                            <Menu className="w-fit rounded bg-base-200" horizontal>
                                <MenuItem>
                                    <a aria-label="Menu item link">
                                        <Icon icon={homeIcon} className="size-5" />
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a aria-label="Menu item link">
                                        <Icon icon={infoIcon} className="size-5" />
                                    </a>
                                </MenuItem>
                                <MenuItem disabled>
                                    <a aria-label="Menu item link">
                                        <Icon icon={barChart3Icon} className="size-5" />
                                    </a>
                                </MenuItem>
                            </Menu>
                        </div>
                    </CardBody>
                </Card>

                <Card className="bg-base-100">
                    <CardBody>
                        <CardTitle>Icons & Label</CardTitle>
                        <div className="mt-1">
                            <Menu className="w-48 rounded bg-base-200">
                                <MenuItem>
                                    <a aria-label="Menu item link">
                                        <Icon icon={homeIcon} className="size-5" />
                                    </a>
                                </MenuItem>
                                <MenuItem>
                                    <a aria-label="Menu item link">
                                        <Icon icon={infoIcon} className="size-5" />
                                    </a>
                                </MenuItem>
                                <MenuItem disabled>
                                    <a aria-label="Menu item link">
                                        <Icon icon={barChart3Icon} className="size-5" />
                                    </a>
                                </MenuItem>
                            </Menu>
                        </div>
                    </CardBody>
                </Card>
                <Card className="bg-base-100">
                    <CardBody>
                        <CardTitle>Title</CardTitle>
                        <div className="mt-1">
                            <Menu className="w-48 rounded bg-base-200">
                                <MenuTitle>Title</MenuTitle>

                                <MenuItem>
                                    <a aria-label="Menu item link">Item 1</a>
                                </MenuItem>
                                <MenuItem>
                                    <a aria-label="Menu item link">Item 2</a>
                                </MenuItem>
                                <MenuItem disabled>
                                    <a aria-label="Menu item link">Item 3</a>
                                </MenuItem>
                            </Menu>
                        </div>
                    </CardBody>
                </Card>
                <Card className="bg-base-100">
                    <CardBody>
                        <CardTitle>SubMenu</CardTitle>
                        <div className="mt-1">
                            <Menu className="w-56 rounded bg-base-200">
                                <MenuItem>
                                    <a aria-label="Menu item link">Item 1</a>
                                </MenuItem>
                                <MenuItem>
                                    <MenuDetails open={true} label={"Level 2"}>
                                        <MenuItem>
                                            <a aria-label="Menu item link">Level 2 item 1</a>
                                        </MenuItem>
                                        <MenuItem>
                                            <a aria-label="Menu item link">Level 2 item 2</a>
                                        </MenuItem>
                                        <MenuItem>
                                            <MenuDetails open={true} label={"Level 3"}>
                                                <MenuItem>
                                                    <a aria-label="Menu item link">Level 3 item 1</a>
                                                </MenuItem>
                                                <MenuItem>
                                                    <a aria-label="Menu item link">Level 3 item 2</a>
                                                </MenuItem>
                                            </MenuDetails>
                                        </MenuItem>
                                    </MenuDetails>
                                </MenuItem>
                                <MenuItem>
                                    <a aria-label="Menu item link">Item 3</a>
                                </MenuItem>
                            </Menu>
                        </div>
                    </CardBody>
                </Card>
                <Card className="bg-base-100">
                    <CardBody>
                        <CardTitle>SubMenu</CardTitle>
                        <div className="mt-1">
                            <Menu className="rounded bg-base-200" horizontal>
                                <MenuItem>
                                    <a aria-label="Menu item link">Item 1</a>
                                </MenuItem>
                                <MenuItem>
                                    <MenuDetails open={true} label={"Level 2"}>
                                        <MenuItem>
                                            <a aria-label="Menu item link">Level 2 item 1</a>
                                        </MenuItem>
                                        <MenuItem>
                                            <a aria-label="Menu item link">Level 2 item 2</a>
                                        </MenuItem>
                                        <MenuItem>
                                            <MenuDetails open={true} label={"Level 3"} className="w-48">
                                                <MenuItem>
                                                    <a aria-label="Menu item link">Level 3 item 1</a>
                                                </MenuItem>
                                                <MenuItem>
                                                    <a aria-label="Menu item link">Level 3 item 2</a>
                                                </MenuItem>
                                            </MenuDetails>
                                        </MenuItem>
                                    </MenuDetails>
                                </MenuItem>
                                <MenuItem>
                                    <a aria-label="Menu item link">Item 3</a>
                                </MenuItem>
                            </Menu>
                        </div>
                    </CardBody>
                </Card>
            </div>
        </>
    );
};

export default MenuExample;
