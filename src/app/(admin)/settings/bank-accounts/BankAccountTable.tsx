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

import { IBankAccount } from "@/types/settings/bank_accounts";
import { useDeleteBankAccountMutation, useGetBankAccountsQuery } from "@/services/api";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import Image from "next/image";

const BankAccountRow = ({
    bank_account,
    showDeleteBankAccountConfirmation
}: {
    bank_account: IBankAccount;
    showDeleteBankAccountConfirmation: (uuid: string) => void;
}) => {

    const { id, uuid, account_number, bank_name, account_holder_name, bank_address, contact_number, iban } = bank_account;

    return (
        <>
            <TableRow className="hover:bg-base-200/40">
                <div className="font-medium">{id}</div>
                <div className="flex items-center space-x-3 truncate">{account_holder_name}</div>
                <div className="flex items-center space-x-3 truncate">
                    <Image src={product1Img.src} height={40} width={40} className="size-10 rounded-box" alt="Product Image" />
                    <div>
                        <div className="font-medium">{bank_name}</div>
                    </div>
                </div>
                <div className="text-sm font-medium">{account_number}</div>
                <div className="flex items-center gap-2">{iban}</div>
                <div>{contact_number}</div>
                <div className="text-sm">
                    {bank_address?.length > 20 ? `${bank_address.slice(0, 20)}...` : bank_address}
                </div>
                <div className="inline-flex w-fit">
                    <Link
                        href={routes.apps.settings.bank_account_edit(uuid)}
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
                            showDeleteBankAccountConfirmation(uuid);
                        }}
                    >
                        <Icon icon={trashIcon} fontSize={22} />
                    </Button>
                </div>
            </TableRow>
        </>
    );
};

const BankAccountTable = () => {
    const toaster = useToast();
    const [searchText, setSearchText] = useState<string>("");
    const [pageUrl, setPageUrl] = useState<string>("");
    const { data:detail_data } = useGetBankAccountsQuery({searchText,  pageUrl});
    const bank_accounts = detail_data?.data;
    const links = detail_data?.links;
    const [deleteBankAccount, {
        isLoading: deleteBankAccountLoading,
    }] = useDeleteBankAccountMutation();

    const [bankAccountToBeDelete, setBankAccountToBeDelete] = useState<IBankAccount>();
    const bankAccountDeleteConfirmationRef = useRef<HTMLDialogElement | null>(null);

    const { control: filterControl } = useForm({
        defaultValues: {
            category: "default",
            search: "",
        },
    });

    const showDeleteBankAccountConfirmation = (uuid: any) => {
        bankAccountDeleteConfirmationRef.current?.showModal();
        setBankAccountToBeDelete(bank_accounts?.find((b:any) => uuid === b.uuid));
    };

    const handleDeleteBankAccount = async () => {
        if (bankAccountToBeDelete) {
            deleteBankAccount(bankAccountToBeDelete.uuid).then((response: any) => {
                console.log(response?.data.code);
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
                                onChange={(e)=>setSearchText(e.target.value)}
                            />
                        </div>
                        <div className="inline-flex items-center gap-3">
                            <Link href={routes.apps.settings.bank_account_create} aria-label={"Create product link"}>
                                <Button color="primary" size="md" className="hidden md:flex">
                                    <Icon icon={plusIcon} fontSize={16} />
                                    <span>New Bank Account</span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="overflow-auto">
                        <Table className="mt-2 rounded-box">
                            <TableHead>
                                <span className="text-sm font-medium text-base-content/80">ID</span>
                                <span className="text-sm font-medium text-base-content/80">Account Holder Name</span>
                                <span className="text-sm font-medium text-base-content/80">Bank Name</span>
                                <span className="text-sm font-medium text-base-content/80">Account Number</span>
                                <span className="text-sm font-medium text-base-content/80">IBAN</span>
                                <span className="text-sm font-medium text-base-content/80">Contact Number</span>
                                <span className="text-sm font-medium text-base-content/80">Bank Address</span>
                                <span className="text-sm font-medium text-base-content/80">Action</span>
                            </TableHead>

                            <TableBody>
                                {bank_accounts?.map((bank_account:any, index:any) => (
                                    <BankAccountRow
                                        bank_account={bank_account}
                                        key={index}
                                        showDeleteBankAccountConfirmation={showDeleteBankAccountConfirmation}
                                    />
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                    <div className="flex items-center justify-end px-5 pb-5 pt-3">
                        {/* <Pagination>
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
                        </Pagination> */}
                        <Pagination pagination={links} clickHandler={paginationClickHandler} />
                    </div>
                </CardBody>
            </Card>
            <Modal ref={bankAccountDeleteConfirmationRef} backdrop>
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
                    You are about to delete <b>{bankAccountToBeDelete?.bank_name}</b>. Would you like to proceed further ?
                </ModalBody>
                <ModalActions>
                    <form method="dialog">
                        <Button color="error" size="sm">
                            No
                        </Button>
                    </form>
                    <form method="dialog">
                        <Button loading={deleteBankAccountLoading} color="primary" size="sm" onClick={() => handleDeleteBankAccount()}>
                            Yes
                        </Button>
                    </form>
                </ModalActions>
            </Modal>
        </>
    );
};

export { BankAccountTable };
