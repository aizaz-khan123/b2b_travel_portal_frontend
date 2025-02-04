"use client";

import searchIcon from "@iconify/icons-lucide/search";
import trashIcon from "@iconify/icons-lucide/trash";
import xIcon from "@iconify/icons-lucide/x";
import plusIcon from "@iconify/icons-lucide/plus";
import Link from "next/link";
// import { PhoneInput } from 'react-international-phone';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Icon } from "@/components/Icon";
import {
    Button,
    Card,
    CardBody,
    FormLabel,
    Modal,
    ModalActions,
    ModalBody,
    ModalHeader,
    Table,
    TableBody,
    TableHead,
    TableRow,
    Toggle,
    Tooltip,
} from "@/components/daisyui";
import Pagination from "@/components/Pagination/Pagination";
import { FormInput, FormSelect } from "@/components/forms";
import { routes } from "@/lib/routes";
import { useDeleteSupplierMutation, useGetSuppliersQuery } from "@/services/api";

import { useRef, useCallback, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { ISupplier } from "@/types/settings/suppliers"
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import { cities } from "@/dropdowndata/cities";

const SupplierRow = ({
    supplier,
    showDeleteSupplierConfirmation
}: {
    supplier: ISupplier;
    showDeleteSupplierConfirmation: (uuid: string) => void;
}) => {

    const { id, uuid, name, slug, description, status } = supplier;

    return (
        <>
            <TableRow className="hover:bg-base-200/40">
                <div className="font-medium">{id}</div>
                <div className="flex items-center space-x-3 truncate">{name}</div>
                <div className="flex items-center space-x-3 truncate">{slug}</div>
                <div className="flex items-center space-x-3 truncate">{slug}</div>
                <div>{status ? (<span className="text-success cursor-pointer">Active</span>) : (<span className="text-warning cursor-pointer">In-Active</span>)}</div>
                <div className="text-sm">
                    {description?.length > 20 ? `${description.slice(0, 20)}...` : description}
                </div>
                <div className="text-sm">
                    {description?.length > 20 ? `${description.slice(0, 20)}...` : description}
                </div>
                <div className="inline-flex w-fit">
                    <Tooltip message="Change Status" position="top" color="primary">
                        <Toggle className="m-2" color="primary" />
                    </Tooltip>
                </div>
                <div className="inline-flex w-fit">
                    <Link
                        href={routes.apps.settings.supplier_edit(uuid)}
                        aria-label="Edit bank account"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <Tooltip message="Update Branch" position="top" color="primary">
                            <Button color="primary" size="xs">
                                Update
                            </Button>
                        </Tooltip>
                    </Link>
                    <div className="ml-1">
                        <Link
                            href={routes.apps.settings.supplier_edit(uuid)}
                            aria-label="Edit bank account"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <Tooltip message="Update Branch Permission" position="top" color="primary">
                                <Button color="primary" size="xs">
                                    Update Permission
                                </Button>
                            </Tooltip>
                        </Link>
                    </div>
                </div>
                <div className="inline-flex w-fit">
                    <Tooltip message="Delete Branch" position="top" color="error">
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
                    </Tooltip>
                </div>
            </TableRow>
        </>
    );
};

const BranchTable = () => {
    const toaster = useToast();
    const [searchText, setSearchText] = useState<string>("");
    const [pageUrl, setPageUrl] = useState<string>("");
    const [phone, setPhone] = useState('');
    const ref4 = useRef<HTMLDialogElement>(null);
    const { data: detail_data } = useGetSuppliersQuery({ searchText, pageUrl });
    const suppliers = detail_data?.data;
    const links = detail_data?.links;
    const [deleteSupplier, {
        isLoading: deleteSupplierLoading,
    }] = useDeleteSupplierMutation();

    const supplierSchema = z.object({
        name: z.string({ required_error: "Airport Name Required!" }),
        description: z.string().optional(),
        status: z.boolean(),
    });

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

    const { control, handleSubmit, setError } = useForm<any>({
        resolver: zodResolver(supplierSchema),
    });

    const setErrors = (errors: Record<string, any>) => {
        Object.entries(errors).forEach(([key, value]: any[]) => setError(key, { message: value }));
    };

    const onSubmit = handleSubmit(async (data: any) => {
    });


    // const handleCancel = () => {
    //     router.back();
    // };

    const handleShow4 = useCallback(() => {
        ref4.current?.showModal();
    }, [ref4]);

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
                            <Button onClick={handleShow4} color="primary" size="md" className="hidden md:flex">
                                <Icon icon={plusIcon} fontSize={16} />
                                <span>New Branch</span>
                            </Button>
                        </div>
                    </div>
                    <div className="overflow-auto">
                        <Table className="mt-2 rounded-box">
                            <TableHead>
                                <span className="text-sm font-medium text-base-content/100">ID</span>
                                <span className="text-sm font-medium text-base-content/100">Branch Name</span>
                                <span className="text-sm font-medium text-base-content/100">Manager Name</span>
                                <span className="text-sm font-medium text-base-content/100">Email</span>
                                <span className="text-sm font-medium text-base-content/100">Phone Number</span>
                                <span className="text-sm font-medium text-base-content/100">Branch Location</span>
                                <span className="text-sm font-medium text-base-content/100">Branch Employees</span>
                                <span className="text-sm font-medium text-base-content/100">Branch Agencies</span>
                                <span className="text-sm font-medium text-base-content/100">Status</span>
                                <span className="text-sm font-medium text-base-content/100">Action</span>
                                <span className="text-sm font-medium text-base-content/100">Delete</span>
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


            <Modal ref={ref4} className="w-11/12 max-w-5xl h-11/12">
                <form method="dialog">
                    <Button
                        size="md"
                        color="ghost"
                        shape="circle"
                        className="absolute right-2 top-2"
                        aria-label="Close modal">
                        <Icon icon={xIcon} className="h-4" />
                    </Button>
                </form>
                <ModalHeader className="font-bold">Add Branch</ModalHeader>
                <ModalBody>
                    <Card className="bg-base-100">
                        <CardBody className="gap-0">
                            <div className="mt-1 grid grid-cols-1 gap-5 gap-y-3 md:grid-cols-2">
                                <div>
                                    <FormLabel title={"Branch Name"} htmlFor="branch_name"></FormLabel>
                                    <FormInput
                                        className="w-full border-0 focus:outline-0"
                                        control={control}
                                        size="md"
                                        id="branch_name"
                                        name="branch_name"
                                        placeholder="Enter Branch Name"
                                    />
                                </div>
                                <div>
                                    <FormLabel title={"Branch Manager Name"} htmlFor="branch_manager_name"></FormLabel>
                                    <FormInput
                                        className="w-full border-0 focus:outline-0"
                                        control={control}
                                        size="md"
                                        id="branch_manager_name"
                                        name="branch_manager_name"
                                        placeholder="Enter Branch Manager Name"
                                    />
                                </div>

                                <div>
                                    <FormLabel title={"Email"} htmlFor="email"></FormLabel>
                                    <FormInput
                                        type="email"
                                        className="w-full border-0 focus:outline-0"
                                        control={control}
                                        size="md"
                                        id="email"
                                        name="email"
                                        placeholder="branch@example.com"
                                    />
                                </div>
                                <div>
                                    <FormLabel title={"Phone Number"} htmlFor="phone_number"></FormLabel>
                                    <Controller
                                        name="phone_number"
                                        control={control}
                                        render={({ field }) => (
                                            <PhoneInput
                                                {...field}
                                                country="us"
                                                onChange={(value) => field.onChange(value)}
                                                containerClass="w-full"
                                                inputClass="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                            />
                                        )}
                                    />
                                </div>
                                <div>
                                    <FormLabel title={"Address"} htmlFor="address"></FormLabel>
                                    <FormInput
                                        className="w-full border-0 focus:outline-0"
                                        control={control}
                                        size="md"
                                        id="address"
                                        name="address"
                                        placeholder="Enter Address"
                                    />
                                </div>
                                <div>
                                    <FormLabel title="City" htmlFor="city" />
                                    <FormSelect
                                        control={control}
                                        name="city"
                                        size="md"
                                        id="city"
                                        className="w-full border-0 text-base"
                                        options={cities.map((city: any) => ({
                                            label: city.label,
                                            value: city.value,
                                        }))}
                                        placeholder="Select City"
                                    />
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </ModalBody>

                <ModalActions>
                    <form method="dialog">
                        <Button color="primary" size="md" onClick={() => handleDeleteSupplier()}>
                            Add
                        </Button>
                    </form>
                </ModalActions>
            </Modal>
        </>
    );
};

export { BranchTable };
