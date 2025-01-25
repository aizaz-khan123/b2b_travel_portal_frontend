import barChart3Icon from "@iconify/icons-lucide/bar-chart-3";
import boxIcon from "@iconify/icons-lucide/box";
import homeIcon from "@iconify/icons-lucide/home";
import layers2Icon from "@iconify/icons-lucide/layers-2";
import plusIcon from "@iconify/icons-lucide/plus";

import { Icon } from "@/components/Icon";
import {
    Breadcrumbs,
    BreadcrumbsItem,
    Card,
    CardBody,
    CardTitle,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
} from "@/components/daisyui";
import { routes } from "@/lib/routes";

const BreadcrumbExample = () => {
    return (
        <div className="grid gap-6 xl:grid-cols-2">
            <Card className="bg-base-100">
                <CardBody>
                    <CardTitle>Default</CardTitle>
                    <div className="mt-1 space-y-1">
                        <Breadcrumbs>
                            <BreadcrumbsItem href={routes.dashboards.ecommerce}>Home</BreadcrumbsItem>
                            <BreadcrumbsItem href={routes.apps.ecommerce.shops.index}>Shops</BreadcrumbsItem>
                            <BreadcrumbsItem href={routes.apps.ecommerce.shops.create}>Add Shop</BreadcrumbsItem>
                        </Breadcrumbs>
                    </div>
                </CardBody>
            </Card>
            <Card className="bg-base-100">
                <CardBody>
                    <CardTitle>With Icons</CardTitle>
                    <div className="mt-1 space-y-1">
                        <Breadcrumbs>
                            <BreadcrumbsItem href={routes.dashboards.ecommerce}>
                                <Icon icon={homeIcon} className="me-2 size-3.5" />
                                Home
                            </BreadcrumbsItem>
                            <BreadcrumbsItem href={routes.apps.ecommerce.products.index}>
                                <Icon icon={boxIcon} className="me-2 size-3.5" />
                                Products
                            </BreadcrumbsItem>
                            <BreadcrumbsItem href={routes.apps.ecommerce.products.create}>
                                <Icon icon={plusIcon} className="me-2 size-3.5" />
                                Create
                            </BreadcrumbsItem>
                        </Breadcrumbs>
                    </div>
                </CardBody>
            </Card>
            <Card className="bg-base-100">
                <CardBody>
                    <CardTitle>With Dropdown</CardTitle>
                    <div className="mt-1 space-y-1">
                        <Breadcrumbs className="overflow-x-visible">
                            <BreadcrumbsItem href={routes.dashboards.ecommerce}>
                                <Icon icon={homeIcon} className="me-2 size-3.5" />
                                Home
                            </BreadcrumbsItem>
                            <BreadcrumbsItem>
                                <Dropdown>
                                    <DropdownToggle button={false} className="flex items-center">
                                        <div className="cursor-pointer rounded bg-base-200 px-3 py-0 transition-all hover:bg-base-300">
                                            •••
                                        </div>
                                    </DropdownToggle>
                                    <DropdownMenu className="w-52">
                                        <DropdownItem anchor={false}>
                                            <div>
                                                <Icon icon={boxIcon} className="size-4" />
                                                Element
                                            </div>
                                        </DropdownItem>

                                        <DropdownItem anchor={false}>
                                            <div>
                                                <Icon icon={layers2Icon} className="size-4" />
                                                Components
                                            </div>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </BreadcrumbsItem>
                            <BreadcrumbsItem href={routes.ui.charts.apex.bar}>
                                <Icon icon={barChart3Icon} className="me-2 size-3.5" />
                                Charts
                            </BreadcrumbsItem>
                        </Breadcrumbs>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default BreadcrumbExample;
