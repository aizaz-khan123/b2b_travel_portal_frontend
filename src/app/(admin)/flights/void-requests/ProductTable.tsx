"use client";

import chevronLeftIcon from "@iconify/icons-lucide/chevron-left";
import chevronRightIcon from "@iconify/icons-lucide/chevron-right";
import copyPlusIcon from "@iconify/icons-lucide/copy-plus";
import downloadCloudIcon from "@iconify/icons-lucide/download-cloud";
import eyeIcon from "@iconify/icons-lucide/eye";
import pencilIcon from "@iconify/icons-lucide/pencil";
import searchIcon from "@iconify/icons-lucide/search";
import settings2Icon from "@iconify/icons-lucide/settings-2";
import starIcon from "@iconify/icons-lucide/star";
import trashIcon from "@iconify/icons-lucide/trash";
import wandIcon from "@iconify/icons-lucide/wand";
import xIcon from "@iconify/icons-lucide/x";

import Image from "next/image";
import Link from "next/link";

import { Icon } from "@/components/Icon";
import {
    Button,
    Card,
    CardBody,
    Checkbox,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Modal,
    ModalActions,
    ModalBody,
    ModalHeader,
    Pagination,
    Table,
    TableBody,
    TableHead,
    TableRow,
} from "@/components/daisyui";
import { FormInput, FormSelect } from "@/components/forms";
import { cn, currencyHelper, dateHelper } from "@/helpers";
import { routes } from "@/lib/routes";
import { IEcommerceProduct } from "@/types/apps/ecommerce";

import { useEcommerceProducts } from "./use-products";

const ProductRow = ({ product }: { product: IEcommerceProduct }) => {
    const { showDeleteProductConfirmation, handleSelectProduct, selectedProductIds } = useEcommerceProducts();
    const { id, name, date, price, stock, category, sku, image, ratings, ratingsCount, orders } = product;

    return (
        <>
            <TableRow className="cursor-pointer hover:bg-base-200/40" onClick={() => handleSelectProduct(id)}>
                <Checkbox
                    size={"xs"}
                    checked={selectedProductIds.includes(id)}
                    aria-label="Single check"
                    onChange={() => {}}
                />
                <div className="font-medium">{id}</div>
                <div className="flex items-center space-x-3 truncate">
                    <Image src={image} height={40} width={40} className="size-10 rounded-box" alt="Product Image" />
                    <div>
                        <div className="font-medium">{name}</div>
                        <div className="text-xs font-medium text-base-content/70">#{sku}</div>
                    </div>
                </div>
                <div className="font-medium">{category}</div>
                <div className="text-sm font-medium">
                    {currencyHelper.sign}
                    {price}
                </div>
                <div className="flex items-center gap-2">
                    <Icon
                        icon={starIcon}
                        fontSize={16}
                        className={cn({
                            "text-error": ratings > 0,
                            "text-warning": ratings > 3,
                            "text-success": ratings > 4,
                        })}
                    />
                    {ratings} <span className="text-sm text-base-content/70">({ratingsCount})</span>
                </div>
                <div>{orders}</div>
                <div>
                    {stock > 20 ? (
                        <span className="text-success">Available</span>
                    ) : stock > 0 ? (
                        <span className="text-warning">Low</span>
                    ) : (
                        <span className="text-error">Out of Stock</span>
                    )}
                </div>
                <div className="text-sm">{dateHelper.formatted(date)}</div>
                <div className="inline-flex w-fit">
                    <Link
                        href={routes.apps.flight.search}
                        aria-label={"Edit product link"}
                        onClick={(event) => {
                            event.stopPropagation();
                        }}>
                        <Button color="ghost" size="sm" shape={"square"} aria-label="Edit product">
                            <Icon icon={pencilIcon} className="text-base-content/70" fontSize={20} />
                        </Button>
                    </Link>
                    <Button color="ghost" size="sm" shape={"square"} aria-label="Dummy show product">
                        <Icon icon={eyeIcon} className="text-base-content/70" fontSize={16} />
                    </Button>
                    <Button
                        color="ghost"
                        className="text-error/70 hover:bg-error/20"
                        size="sm"
                        shape={"square"}
                        aria-label="Dummy delete product"
                        onClick={(event) => {
                            event.stopPropagation();
                            showDeleteProductConfirmation(id);
                        }}>
                        <Icon icon={trashIcon} fontSize={22} />
                    </Button>
                </div>
            </TableRow>
        </>
    );
};

const EcommerceProductTable = () => {
    const {
        products,
        productCategories,
        filterControl,
        productDeleteConfirmationRef,
        productToBeDelete,
        handleDeleteProduct,
        handleSelectAllProduct,
        productsSelectionStatus,
    } = useEcommerceProducts();

    return (
        <>
            <Card className="mt-5 bg-base-100">
                <CardBody className={"p-0"}>
                    <div className="flex items-center justify-between px-5 pt-5">
                        <div className="inline-flex items-center gap-3">
                            <FormInput
                                startIcon={<Icon icon={searchIcon} className="text-base-content/60" fontSize={15} />}
                                size="sm"
                                placeholder="Search along products"
                                bordered={false}
                                borderOffset={false}
                                control={filterControl}
                                name="search"
                                className="w-full focus:border-transparent focus:outline-0"
                            />
                            <div className="hidden sm:block">
                                <FormSelect
                                    control={filterControl}
                                    instanceId="category"
                                    name={"category"}
                                    size="sm"
                                    id="category"
                                    className="w-full border-0 text-base"
                                    options={productCategories.map((product) => ({
                                        label: product.title,
                                        value: product.id,
                                    }))}
                                    placeholder={"Category"}
                                />
                            </div>
                        </div>
                        <div className="inline-flex items-center gap-3">
                            <Dropdown horizontal="left" vertical="bottom">
                                <DropdownToggle
                                    button={false}
                                    className="btn btn-ghost btn-xs h-8 border border-base-content/20">
                                    <Icon icon={settings2Icon} fontSize={16} />
                                </DropdownToggle>
                                <DropdownMenu className="w-52 text-sm">
                                    <DropdownItem anchor={false}>
                                        <div>
                                            <Icon icon={wandIcon} fontSize={16} />
                                            Bulk Actions
                                        </div>
                                    </DropdownItem>
                                    <hr className="-mx-2 my-1 border-base-content/10" />
                                    <DropdownItem anchor={false}>
                                        <div>
                                            <Icon icon={downloadCloudIcon} fontSize={16} />
                                            Import from Store
                                        </div>
                                    </DropdownItem>
                                    <DropdownItem anchor={false}>
                                        <div>
                                            <Icon icon={copyPlusIcon} fontSize={16} />
                                            Create from Existing
                                        </div>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                    </div>
                    <div className="overflow-auto">
                        <Table className="mt-2 rounded-box">
                            <TableHead>
                                <Checkbox
                                    size={"xs"}
                                    indeterminate={productsSelectionStatus === "intermediate"}
                                    checked={productsSelectionStatus === "all"}
                                    onChange={() => handleSelectAllProduct()}
                                    aria-label="Check all"
                                />
                                <span className="text-sm font-medium text-base-content/80">Booking ID</span>
                                <span className="text-sm font-medium text-base-content/80">PNR</span>
                                <span className="text-sm font-medium text-base-content/80">Booking By</span>
                                <span className="text-sm font-medium text-base-content/80">Request By</span>
                                <span className="text-sm font-medium text-base-content/80">Booked At</span>
                                <span className="text-sm font-medium text-base-content/80">Requested DateTime</span>
                                <span className="text-sm font-medium text-base-content/80">Airline</span>
                                <span className="text-sm font-medium text-base-content/80">Supplier</span>
                                <span className="text-sm font-medium text-base-content/80">Base Fare</span>
                                <span className="text-sm font-medium text-base-content/80">Tax</span>
                                <span className="text-sm font-medium text-base-content/80">Request Status</span>
                                <span className="text-sm font-medium text-base-content/80">Action</span>
                            </TableHead>

                            <TableBody>
                                {products.slice(0, 11).map((product, index) => (
                                    <ProductRow product={product} key={index} />
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                    <div className="flex items-center justify-end px-5 pb-5 pt-3">
                        <Pagination>
                            <Button
                                size="sm"
                                aria-label="pagination-prev"
                                className="join-item"
                                startIcon={<Icon icon={chevronLeftIcon} fontSize={16} />}></Button>
                            <Button size="sm" className="join-item" active color="primary" aria-label="pagination-1">
                                1
                            </Button>
                            <Button size="sm" className="join-item" aria-label="pagination-2">
                                2
                            </Button>
                            <Button
                                size="sm"
                                aria-label="pagination-next"
                                className="join-item"
                                startIcon={<Icon icon={chevronRightIcon} fontSize={16} />}></Button>
                        </Pagination>
                    </div>
                </CardBody>
            </Card>
            <Modal ref={productDeleteConfirmationRef} backdrop>
                <form method="dialog">
                    <Button
                        size="sm"
                        color="ghost"
                        shape="circle"
                        className="absolute right-2 top-2"
                        aria-label="Close modal">
                        <Icon icon={xIcon} className="h-4" />
                    </Button>
                </form>
                <ModalHeader className="font-bold">Confirm Delete</ModalHeader>
                <ModalBody>
                    You are about to delete <b>{productToBeDelete?.name}</b>. Would you like to proceed further ?
                </ModalBody>
                <ModalActions>
                    <form method="dialog">
                        <Button color="error" size="sm">
                            No
                        </Button>
                    </form>
                    <form method="dialog">
                        <Button color="primary" size="sm" onClick={() => handleDeleteProduct()}>
                            Yes
                        </Button>
                    </form>
                </ModalActions>
            </Modal>
        </>
    );
};

export { EcommerceProductTable };
