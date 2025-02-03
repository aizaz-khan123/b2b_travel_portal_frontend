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

import { IAirport } from "@/types/settings/airports";
import { useDeleteAirportMutation, useGetAirportsQuery } from "@/services/api";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";

const AirlineMarginRow = ({
    airport,
    showDeleteAirportConfirmation
}: {
    airport: IAirport;
    showDeleteAirportConfirmation: (uuid: string) => void;
}) => {

    const { id, uuid, name, municipality,iso_country, iata_code } = airport;

    return (
        <>
            <TableRow className="hover:bg-base-200/40">
                <div className="font-medium">{id}</div>
                <div className="flex items-center space-x-3 truncate">{name}</div>
                <div className="flex items-center space-x-3 truncate">{iso_country}</div>
                <div className="text-sm font-medium">{iata_code}</div>
                <div className="font-medium">{municipality}</div>

                <div className="inline-flex w-fit">
                    <Link
                        href={routes.apps.settings.airport_edit(uuid)}
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
                        aria-label="Delete bank account"
                        onClick={(event) => {
                            event.stopPropagation();
                            showDeleteAirportConfirmation(uuid);
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
    const { data: detail_data } = useGetAirportsQuery({ searchText, pageUrl });
    const airports = detail_data?.data;
    const links = detail_data?.links;
    const [deleteAirport, {
        isLoading: deleteAirportLoading,
    }] = useDeleteAirportMutation();

    const [AirportToBeDelete, setAirportToBeDelete] = useState<IAirport>();
    const AirportDeleteConfirmationRef = useRef<HTMLDialogElement | null>(null);

    const { control: filterControl } = useForm({
        defaultValues: {
            category: "default",
            search: "",
        },
    });

    const showDeleteAirportConfirmation = (uuid: any) => {
        AirportDeleteConfirmationRef.current?.showModal();
        setAirportToBeDelete(airports?.find((b) => uuid === b.uuid));
    };

    const handleDeleteAirport = async () => {
        if (AirportToBeDelete) {
            deleteAirport(AirportToBeDelete.uuid).then((response: any) => {
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
                                <span className="text-sm font-medium text-base-content/80">Rbds</span>
                                <span className="text-sm font-medium text-base-content/80">Remarks</span>
                                <span className="text-sm font-medium text-base-content/80">Action</span>
                            </TableHead>

                            <TableBody>
                                {airports?.map((airport: any, index: any) => (
                                    <AirlineMarginRow
                                        airport={airport}
                                        key={index}
                                        showDeleteAirportConfirmation={showDeleteAirportConfirmation}
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
            <Modal ref={AirportDeleteConfirmationRef} backdrop>
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
                    You are about to delete <b>{AirportToBeDelete?.name}</b>. Would you like to proceed further ?
                </ModalBody>
                <ModalActions>
                    <form method="dialog">
                        <Button color="error" size="sm">
                            No
                        </Button>
                    </form>
                    <form method="dialog">
                        <Button loading={deleteAirportLoading} color="primary" size="sm" onClick={() => handleDeleteAirport()}>
                            Yes
                        </Button>
                    </form>
                </ModalActions>
            </Modal>
        </>
    );
};

export { MarginTable };
