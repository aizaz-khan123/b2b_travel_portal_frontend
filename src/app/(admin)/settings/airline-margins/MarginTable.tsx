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
    Badge,
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

import { IAirlineMargin } from "@/types/settings/airline_margins";
import { useDeleteAirlineMarginMutation, useGetAirlineMarginsQuery } from "@/services/api";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";

const AirlineMarginRow = ({
    airline_margin,
    showDeleteAirlineMarginConfirmation
}: {
    airline_margin: IAirlineMargin;
    showDeleteAirlineMarginConfirmation: (uuid: string) => void;
}) => {

    const { id, uuid, sales_channel, airline, region, margin, margin_type, rbds, is_apply_on_gross, status, remarks } = airline_margin;

    return (
        <>
            <TableRow className="hover:bg-base-200/40">
                <div className="font-medium">{id}</div>
                <div className="flex items-center space-x-3 truncate">{sales_channel}</div>
                <div className="flex items-center space-x-3 truncate">{airline?.name}</div>
                <div className="text-sm font-medium">{Number(margin) > 0 ? (<Badge color="success">{margin}{margin_type == 'amount' ? 'PKR' : '%'}</Badge>) : (<Badge color="warning">{margin}{margin_type == 'amount' ? 'PKR' : '%'}</Badge>)}</div>
                <div className="font-medium">{region}</div>
                <div className="font-medium">{is_apply_on_gross ? <Badge color="success">Yes</Badge> : <Badge color="warning">No</Badge>}</div>
                <div className="font-medium">{status ? <Badge color="success" outline>Active</Badge> : <Badge color="warning" outline>In-Active</Badge>}</div>
                <div className="font-medium">{rbds}</div>
                <div className="text-sm">
                    {remarks?.length > 20 ? `${remarks.slice(0, 20)}...` : remarks}
                </div>
                <div className="inline-flex w-fit">
                    <Link
                        href={routes.apps.settings.airline_margin_edit(uuid)}
                        aria-label="Edit bank account"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <Button color="ghost" size="sm" shape="square" aria-label="Edit bank account">
                            <Icon icon={pencilIcon} className="text-base-content/70" fontSize={15} />
                        </Button>
                    </Link>
                    <Button
                        color="ghost"
                        className="text-error/70 hover:bg-error/20"
                        size="sm"
                        shape="square"
                        onClick={(event) => {
                            event.stopPropagation();
                            showDeleteAirlineMarginConfirmation(uuid);
                        }}
                    >
                        <Icon icon={trashIcon} fontSize={16} />
                    </Button>
                </div>
            </TableRow>
        </>
    );
};

const MarginTable = () => {
    const toaster = useToast();
    const [searchText, setSearchText] = useState<string>("");
    const [pageUrl, setPageUrl] = useState<string>("");
    const { data: detail_data } = useGetAirlineMarginsQuery({ searchText, pageUrl });
    const airline_margins = detail_data?.data;
    const links = detail_data?.links;
    const [deleteAirlineMargin, {
        isLoading: deleteAirlineMarginLoading,
    }] = useDeleteAirlineMarginMutation();

    const [AirlineMarginToBeDelete, setAirlineMarginToBeDelete] = useState<IAirlineMargin>();
    const AirlineMarginDeleteConfirmationRef = useRef<HTMLDialogElement | null>(null);

    const { control: filterControl } = useForm({
        defaultValues: {
            category: "default",
            search: "",
        },
    });

    const showDeleteAirlineMarginConfirmation = (uuid: any) => {
        AirlineMarginDeleteConfirmationRef.current?.showModal();
        setAirlineMarginToBeDelete(airline_margins?.find((b) => uuid === b.uuid));
    };

    const handleDeleteAirlineMargin = async () => {
        if (AirlineMarginToBeDelete) {
            deleteAirlineMargin(AirlineMarginToBeDelete.uuid).then((response: any) => {
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
                            <Link href={routes.apps.settings.airline_margin_create} aria-label={"Create product link"}>
                                <Button color="primary" size="md" className="hidden md:flex">
                                    <Icon icon={plusIcon} fontSize={16} />
                                    <span>New Airline Margin</span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="overflow-auto">
                        <Table className="mt-2 rounded-box">
                            <TableHead>
                                <span className="text-sm font-medium text-base-content/80">ID</span>
                                <span className="text-sm font-medium text-base-content/80">Sales Channel</span>
                                <span className="text-sm font-medium text-base-content/80">Airline</span>
                                <span className="text-sm font-medium text-base-content/80">Pricing</span>
                                <span className="text-sm font-medium text-base-content/80">Region</span>
                                <span className="text-sm font-medium text-base-content/80">Apply on gross fare</span>
                                <span className="text-sm font-medium text-base-content/80">Status</span>
                                <span className="text-sm font-medium text-base-content/80">Rbds</span>
                                <span className="text-sm font-medium text-base-content/80">Remarks</span>
                                <span className="text-sm font-medium text-base-content/80">Action</span>
                            </TableHead>

                            <TableBody>
                                {airline_margins?.map((airline_margin: any, index: any) => (
                                    <AirlineMarginRow
                                        airline_margin={airline_margin}
                                        key={index}
                                        showDeleteAirlineMarginConfirmation={showDeleteAirlineMarginConfirmation}
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
            <Modal ref={AirlineMarginDeleteConfirmationRef} backdrop>
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
                    You are about to delete. Would you like to proceed further ?
                </ModalBody>
                <ModalActions>
                    <form method="dialog">
                        <Button color="error" size="sm">
                            No
                        </Button>
                    </form>
                    <form method="dialog">
                        <Button loading={deleteAirlineMarginLoading} color="primary" size="sm" onClick={() => handleDeleteAirlineMargin()}>
                            Yes
                        </Button>
                    </form>
                </ModalActions>
            </Modal>
        </>
    );
};

export { MarginTable };
