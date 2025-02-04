"use client";

import product1Img from "@/assets/images/apps/ecommerce/products/1.jpg";
import pencilIcon from "@iconify/icons-lucide/pencil";
import searchIcon from "@iconify/icons-lucide/search";
import trashIcon from "@iconify/icons-lucide/trash";
import xIcon from "@iconify/icons-lucide/x";
import plusIcon from "@iconify/icons-lucide/plus";
import Link from "next/link";

import { Icon } from "@/components/Icon";
import {
    Button,
    Card,
    CardBody,
    Modal,
    ModalActions,
    ModalBody,
    ModalHeader,
    Table,
    TableBody,
    TableHead,
    TableRow,
} from "@/components/daisyui";
import Pagination from "@/components/Pagination/Pagination";
import { FormInput } from "@/components/forms";
import { routes } from "@/lib/routes";
import { useDeleteSupplierMutation, useGetSuppliersQuery } from "@/services/api";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import {ISupplier} from "@/types/settings/suppliers"

const SupplierRow = ({
    supplier,
    showDeleteSupplierConfirmation
}: {
    supplier: ISupplier;
    showDeleteSupplierConfirmation: (uuid: string) => void;
}) => {

    const { id, uuid, name, slug,description, status } = supplier;

    return (
        <>
            <TableRow className="hover:bg-base-200/40">
                <div className="font-medium">{id}</div>
                <div className="flex items-center space-x-3 truncate">{name}</div>
                <div className="flex items-center space-x-3 truncate">{slug}</div>
                <div>{status ? (<span className="text-success cursor-pointer">Active</span>) : (<span className="text-warning cursor-pointer">In-Active</span>)}</div>
                <div className="text-sm">
                    {description?.length > 20 ? `${description.slice(0, 20)}...` : description}
                </div>
                <div className="inline-flex w-fit">
                    <Link
                        href={routes.apps.settings.supplier_edit(uuid)}
                        aria-label="Edit bank account"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <Button color="ghost" size="sm" shape="square" aria-label="Edit bank account">
                            <Icon icon={pencilIcon} className="text-base-content/70" fontSize={20} />
                        </Button>
                    </Link>
                    <Button
                        color="ghost"
                        className="text-error/70 hover:bg-error/20"
                        size="sm"
                        shape="square"
                        aria-label="Delete bank account"
                        onClick={(event) => {
                            event.stopPropagation();
                            showDeleteSupplierConfirmation(uuid);
                        }}
                    >
                        <Icon icon={trashIcon} fontSize={22} />
                    </Button>
                </div>
            </TableRow>
        </>
    );
};

const SupplierTable = () => {
    const toaster = useToast();
    const [searchText, setSearchText] = useState<string>("");
    const [pageUrl, setPageUrl] = useState<string>("");
    const { data: detail_data } = useGetSuppliersQuery({ searchText, pageUrl });
    const suppliers = detail_data?.data;
    const links = detail_data?.links;
    const [deleteSupplier, {
        isLoading: deleteSupplierLoading,
    }] = useDeleteSupplierMutation();

    const [SupplierToBeDelete, setSupplierToBeDelete] = useState<ISupplier>();
    const SupplierDeleteConfirmationRef = useRef<HTMLDialogElement | null>(null);

    const { control: filterControl } = useForm({
        defaultValues: {
            category: "default",
            search: "",
        },
    });

    const showDeleteSupplierConfirmation = (uuid: any) => {
        SupplierDeleteConfirmationRef.current?.showModal();
        setSupplierToBeDelete(suppliers?.find((b) => uuid === b.uuid));
    };

    const handleDeleteSupplier = async () => {
        if (SupplierToBeDelete) {
            deleteSupplier(SupplierToBeDelete.uuid).then((response: any) => {
                if (response?.data.code == 200) {
                    toaster.success(response?.data.message);
                } else {
                    toaster.error(response?.data.message);
                }
            });
        }
    };

    const paginationClickHandler = (url: string | null) => {
        if (url) {
            setPageUrl(url)
        }
    };

    return (
        <>
            <Card className="mt-5 bg-base-100">
                <CardBody className={"p-0"}>
                    <div className="flex items-center justify-between px-5 pt-5">
                        <div className="inline-flex items-center gap-3">
                            <FormInput
                                startIcon={<Icon icon={searchIcon} className="text-base-content/70" fontSize={20} />}
                                size="md"
                                placeholder="Search Here"
                                bordered={false}
                                borderOffset={false}
                                control={filterControl}
                                name="search"
                                className="w-full focus:border-transparent focus:outline-0"
                                onChange={(e) => setSearchText(e.target.value)}
                            />
                        </div>
                        <div className="inline-flex items-center gap-3">
                            <Link href={routes.apps.settings.supplier_create} aria-label={"Create product link"}>
                                <Button color="primary" size="md" className="hidden md:flex">
                                    <Icon icon={plusIcon} fontSize={16} />
                                    <span>New Supplier</span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="overflow-auto">
                        <Table className="mt-2 rounded-box">
                            <TableHead>
                                <span className="text-sm font-medium text-base-content/80">ID</span>
                                <span className="text-sm font-medium text-base-content/80">Supplier Name</span>
                                <span className="text-sm font-medium text-base-content/80">Slug</span>
                                <span className="text-sm font-medium text-base-content/80">Status</span>
                                <span className="text-sm font-medium text-base-content/80">Description</span>
                                <span className="text-sm font-medium text-base-content/80">Action</span>
                            </TableHead>

                            <TableBody>
                                {suppliers?.map((supplier: any, index: any) => (
                                    <SupplierRow
                                        supplier={supplier}
                                        key={index}
                                        showDeleteSupplierConfirmation={showDeleteSupplierConfirmation}
                                    />
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                    <div className="flex items-center justify-end px-5 pb-5 pt-3">
                        <Pagination pagination={links} clickHandler={paginationClickHandler} />
                    </div>
                </CardBody>
            </Card>
            <Modal ref={SupplierDeleteConfirmationRef} backdrop>
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
                    You are about to delete <b>{SupplierToBeDelete?.name}</b>. Would you like to proceed further ?
                </ModalBody>
                <ModalActions>
                    <form method="dialog">
                        <Button color="error" size="sm">
                            No
                        </Button>
                    </form>
                    <form method="dialog">
                        <Button loading={deleteSupplierLoading} color="primary" size="sm" onClick={() => handleDeleteSupplier()}>
                            Yes
                        </Button>
                    </form>
                </ModalActions>
            </Modal>
        </>
    );
};

export { SupplierTable };
