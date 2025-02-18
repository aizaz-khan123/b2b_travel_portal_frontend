"use client";

import searchIcon from "@iconify/icons-lucide/search";
import trashIcon from "@iconify/icons-lucide/trash";
import xIcon from "@iconify/icons-lucide/x";
import plusIcon from "@iconify/icons-lucide/plus";
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
import { useCreateAgencyMutation, useDeleteAgencyMutation, useGetAgenciesQuery, useAgencystatusUpdateMutation,usePermissionListByTypeMutation, useUpdateAgencyMutation, useBranchDropDownQuery, usePermissionUpdateMutation } from "@/services/api";

import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import { cities } from "@/dropdowndata/cities";
import PermissionModal from "@/components/PermissionModal";

const AgencyRow = ({
    agency,
    showDeleteAgencyConfirmation,
    showUpdateAgencyConfirmation,
    showUpdatePermissionModal,
}: {
    agency: any;
    showDeleteAgencyConfirmation: (uuid: string) => void;
    showUpdateAgencyConfirmation: any,
    showUpdatePermissionModal: (uuid: any) => void;
}) => {
    const toaster = useToast();

    const { id, uuid, name, email, phone_number, status, agency_wallet, branch } = agency;
    const [updateStatus] = useAgencystatusUpdateMutation();
    const handleStatusChange = (uuid: string) => {
        const body = {
            _method: 'patch',
        }
        updateStatus({ uuid, body }).then((response) => {
            toaster.success('Status Changed!');
        });
    }
    return (
        <>
            <TableRow className="hover:bg-base-200/40">
                <div className="font-medium">{id}</div>
                <div className="flex items-center space-x-3 truncate">{name}</div>
                <div className="flex items-center space-x-3 truncate">{branch?.name}</div>
                <div className="flex items-center space-x-3 truncate">{email}</div>
                <div className="flex items-center space-x-3 truncate">{phone_number}</div>
                <div className="flex items-center space-x-3 truncate">{agency_wallet?.per_credit_limit}</div>
                <div className="flex items-center space-x-3 truncate">{agency_wallet?.temp_credit_limit || 0}</div>
                <div className="flex items-center space-x-3 truncate">{agency_wallet?.payable_amount || 0}</div>
                <div className="inline-flex w-fit">
                    <Tooltip message="Change Status" position="top" color="primary">
                        <Toggle className="m-2" color="primary" defaultChecked={status == '1' ? true : false} onChange={() => handleStatusChange(uuid)} />
                    </Tooltip>
                </div>
                <div className="inline-flex w-fit">
                    <Tooltip message="Update Agency" position="top" color="primary">
                        <Button color="primary" size="xs" onClick={(event) => {
                            event.stopPropagation();
                            showUpdateAgencyConfirmation(agency);
                        }}>
                            Update
                        </Button>
                    </Tooltip>
                    <div className="ml-1">
                        <Tooltip message="Update Agency Permission" position="top" color="primary">
                            <Button color="primary" size="xs" onClick={(event) => {
                                event.stopPropagation();
                                showUpdatePermissionModal(uuid);
                            }}>
                                Update Permission
                            </Button>
                        </Tooltip>
                    </div>
                </div>
                <div className="inline-flex w-fit">
                    <Tooltip message="Delete Agency" position="top" color="error">
                        <Button
                            color="ghost"
                            className="text-error/70 hover:bg-error/20"
                            size="sm"
                            shape="square"
                            aria-label="Delete bank account"
                            onClick={(event) => {
                                event.stopPropagation();
                                showDeleteAgencyConfirmation(uuid);
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

const AgencyTable = () => {
    const toaster = useToast();
    const [searchText, setSearchText] = useState<string>("");
    const [pageUrl, setPageUrl] = useState<string>("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [agencyId, setAgencyId] = useState<string>("");
    const [permissionList, setPermissionList] = useState<any>();
    const [selectedPermissions, setSelectedPermissions] = useState<any>();
    const [userUUid,setuserUUid] = useState<any>();
    const [isPermissionModal, setIsPermissionModal] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { data: detail_data } = useGetAgenciesQuery({ searchText, pageUrl });
    const agencies = detail_data?.data;
    const links = detail_data?.links;
    const [createAgency, { isLoading: createLoading }] = useCreateAgencyMutation();
    const [deleteAgency, { isLoading: deleteAgencyLoading }] = useDeleteAgencyMutation();
    const [updateAgency, { isLoading: agencyLoading }] = useUpdateAgencyMutation();
    const [permissionListByType] = usePermissionListByTypeMutation();
    const [updatePermissions] = usePermissionUpdateMutation();
    const { data: branchesDropDown } = useBranchDropDownQuery();

    const agencySchema = z.object({
        name: z.string({ required_error: "Agency Name Required!" }).min(5, "Agency Name cannot be empty!"),
        branch_id: z.number({ required_error: "Branch ID is required!" }).min(1, "Branch ID cannot be empty!"),
        phone_number: z.string().regex(/^\+?\d{1,4}?[\d\s\-\(\)]{7,15}$/, "Invalid phone number!"),
        city: z.string({ required_error: "City is required!" }).min(1, "City cannot be empty!"),
        address: z.string({ required_error: "Address is required!" }).min(1, "Address cannot be empty!"),
        email: z.string({ required_error: "Email Required!" }).email({ message: "Invalid email address!" }).min(1, "Email is required!"),
        per_credit_limit: z.string({ required_error: "Per Credit Limit is required!" }).min(1, "Per Credit Limit must be at least 1!")
    });

    const [AgencyToBeDelete, setAgencyToBeDelete] = useState<any>();
    const agencyDeleteConfirmationRef = useRef<HTMLDialogElement | null>(null);

    const { control: filterControl } = useForm({
        defaultValues: {
            category: "default",
            search: "",
        },
    });

    const showDeleteAgencyConfirmation = (uuid: any) => {
        agencyDeleteConfirmationRef.current?.showModal();
        setAgencyToBeDelete(agencies?.find((b:any) => uuid === b.uuid));
    };

    const showUpdateAgencyConfirmation = (agency: any) => {
        reset({
            name: agency.name,
            branch_id: agency.branch_id,
            phone_number: agency.phone_number,
            city: agency.city,
            address: agency.address,
            per_credit_limit: agency.agency_wallet.per_credit_limit,
            email: agency.email
        });
        setAgencyId(agency.uuid);
        setIsEditMode(true)
        setIsModalOpen(true)
    }

    const handleDeleteAgency = async () => {
        if (AgencyToBeDelete) {
            deleteAgency(AgencyToBeDelete.uuid).then((response: any) => {
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

    const { control, handleSubmit, setError, reset } = useForm<z.infer<typeof agencySchema>>({
        resolver: zodResolver(agencySchema),
    });

    const setErrors = (errors: Record<string, any>) => {
        Object.entries(errors).forEach(([key, value]: any[]) => setError(key, { message: value }));
    };

    const onSubmit = handleSubmit(async (data: any) => {

        if (isEditMode) {
            const updated_data = {
                _method: 'put',
                ...data
            }
            await updateAgency({ agencyId, updated_data }).then((response: any) => {
                if ("error" in response) {
                    setErrors(response?.error?.data?.errors);
                    return;
                }
                toaster.success(`Agency has been Updated`);
                reset({
                    name: "",
                    phone_number: "",
                    city: "",
                    address: "",
                    email: "",
                    per_credit_limit: "",
                });
                setAgencyId("");
                setIsModalOpen(false);
            })
        } else {
            await createAgency(data).then((response: any) => {
                if ("error" in response) {
                    setErrors(response?.error?.data?.errors);
                    return;
                }
                toaster.success(`${data.name} has been created`);
                reset({
                    name: "",
                    phone_number: "",
                    city: "",
                    address: "",
                    email: "",
                    per_credit_limit: "",
                });
                setIsModalOpen(false);
            });
        }
    });

    const handleShow = () => {
        setIsModalOpen(true)
    };

    const handleClose = () => {
        setIsModalOpen(false)
    }

    const showUpdatePermissionModal = async (uuid: any) => {
        const type = 'agency';
        await permissionListByType({uuid, type}).then((response: any) => {
            if ("error" in response) {
                toaster.error("something went wrong.");
                return false;
            }
            setPermissionList(response?.data?.permission_list);
            setSelectedPermissions(response?.data?.selected_permissions)
            setIsPermissionModal(true);
            setuserUUid(uuid);
        })
    }

    const handleSubmitPermissions = async (selectedPermissionUUIDs: string[]) => {
        setIsLoading(true)
        await updatePermissions({ userUUid, selectedPermissionUUIDs }).then((response: any) => {
            if ("error" in response) {
                setErrors(response?.error?.data?.errors);
                return;
            }
            toaster.success(`Permissions has been Updated`);
            setPermissionList('')
            setSelectedPermissions('')
            setIsLoading(false)
            setIsPermissionModal(false)        
        })
        setIsLoading(false)
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
                            <Button onClick={handleShow} color="primary" size="md" className="hidden md:flex">
                                <Icon icon={plusIcon} fontSize={16} />
                                <span>New Agency</span>
                            </Button>
                        </div>
                    </div>
                    <div className="overflow-auto">
                        <Table className="mt-2 rounded-box">
                            <TableHead>
                                <span className="text-sm font-medium text-base-content/80">ID</span>
                                <span className="text-sm font-medium text-base-content/80">Agency Name</span>
                                <span className="text-sm font-medium text-base-content/80">Branch Name</span>
                                <span className="text-sm font-medium text-base-content/80">Email</span>
                                <span className="text-sm font-medium text-base-content/80">Phone Number</span>
                                <span className="text-sm font-medium text-base-content/80">Permanent Limit</span>
                                <span className="text-sm font-medium text-base-content/80">Temporary Limit</span>
                                <span className="text-sm font-medium text-base-content/80">Payable Amount</span>
                                <span className="text-sm font-medium text-base-content/80">Status</span>
                                <span className="text-sm font-medium text-base-content/80">Action</span>
                                <span className="text-sm font-medium text-base-content/80">Delete</span>
                            </TableHead>

                            <TableBody>
                                {agencies?.map((agency: any, index: any) => (
                                    <AgencyRow
                                        agency={agency}
                                        key={index}
                                        showDeleteAgencyConfirmation={showDeleteAgencyConfirmation}
                                        showUpdateAgencyConfirmation={showUpdateAgencyConfirmation}
                                        showUpdatePermissionModal={showUpdatePermissionModal}
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
            <Modal ref={agencyDeleteConfirmationRef} backdrop>
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
                    You are about to delete <b>{AgencyToBeDelete?.name}</b>. Would you like to proceed further ?
                </ModalBody>
                <ModalActions>
                    <form method="dialog">
                        <Button color="error" size="sm">
                            No
                        </Button>
                    </form>
                    <form method="dialog">
                        <Button loading={deleteAgencyLoading} color="primary" size="sm" onClick={() => handleDeleteAgency()}>
                            Yes
                        </Button>
                    </form>
                </ModalActions>
            </Modal>


            <Modal open={isModalOpen} className="w-11/12 max-w-5xl h-11/12">
                <form method="dialog">
                    <Button
                        size="sm"
                        color="ghost"
                        shape="circle"
                        className="absolute right-2 top-2"
                        aria-label="Close modal" onClick={handleClose}>
                        <Icon icon={xIcon} className="h-4"/>
                    </Button>
                </form>
                <ModalHeader className="font-bold">{isEditMode ? "Edit Agency" : "Add Agency"}</ModalHeader>
                <ModalBody>
                    <Card className="bg-base-100">
                        <CardBody className="gap-0">
                            <div className="mt-1 grid grid-cols-1 gap-5 gap-y-3 md:grid-cols-2">
                                <div>
                                    <FormLabel title={"Agency Name"} htmlFor="name"></FormLabel>
                                    <FormInput
                                        className="w-full border-0 focus:outline-0"
                                        control={control}
                                        size="md"
                                        id="name"
                                        name="name"
                                        placeholder="Agency Name"
                                    />
                                </div>
                                <div>
                                    <FormLabel title={"Branches"} htmlFor="branch_id"></FormLabel>
                                    {branchesDropDown ? (
                                        <FormSelect
                                            control={control}
                                            name="branch_id"
                                            size="md"
                                            id="branch_id"
                                            className="w-full border-0 text-base"
                                            options={branchesDropDown.map((branch: any) => ({
                                                label: branch.name,
                                                value: branch.id,
                                            }))}
                                            placeholder="Select Branches"
                                        />
                                    ) : (
                                        <p>Loading...</p>
                                    )}
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
                                        placeholder="agency@example.com"
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
                                                country="pk"
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

                                <div>
                                    <FormLabel title="Permanent Limit" htmlFor="per_credit_limit" />
                                    <FormInput
                                        className="w-full border-0 focus:outline-0"
                                        control={control}
                                        size="md"
                                        id="per_credit_limit"
                                        name="per_credit_limit"
                                        placeholder="Enter Permanent Limit"
                                    />
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </ModalBody>

                <ModalActions>
                    <form method="dialog">
                        <Button color="primary" size="md" loading={createLoading || agencyLoading} onClick={() => onSubmit()}>
                            {isEditMode ? "Update" : "Add"}
                        </Button>
                    </form>
                </ModalActions>
            </Modal>

            {permissionList &&
                <PermissionModal
                    isOpen={isPermissionModal}
                    handleClose={()=>{
                        setIsPermissionModal(false)
                        setPermissionList('');
                        setSelectedPermissions('')
                    }}
                    control={control}
                    permissionList={permissionList}
                    selectedPermissions={selectedPermissions}
                    onSubmit={handleSubmitPermissions}
                    loading={isLoading}
                />
            }
        </>
    );
};

export { AgencyTable };