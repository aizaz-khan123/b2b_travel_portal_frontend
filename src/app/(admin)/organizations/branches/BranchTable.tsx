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
import { usePermissionUpdateMutation, useCreateBranchMutation, useDeleteBranchMutation, useGetBranchesQuery, usePermissionListByTypeMutation, useStatusUpdateMutation, useUpdateBranchMutation } from "@/services/api";

import { useRef, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import { cities } from "@/dropdowndata/cities";
import { IBranch } from "@/types/settings/branch";
import PermissionModal from "@/components/PermissionModal";

const BranchRow = ({
    branch,
    showDeleteBranchConfirmation,
    showUpdateBranchConfirmation,
    showUpdatePermissionModal,
}: {
    branch: IBranch;
    showDeleteBranchConfirmation: (uuid: string) => void;
    showUpdateBranchConfirmation: any
    showUpdatePermissionModal: (uuid: any) => void;
}) => {
    const toaster = useToast();
    const { id, uuid, name, branch_manager, branch_employees_count, branch_agencies_count } = branch;
    const [updateStatus] = useStatusUpdateMutation();
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
                <div className="flex items-center space-x-3 truncate">{branch_manager?.name}</div>
                <div className="flex items-center space-x-3 truncate">{branch_manager?.email}</div>
                <div className="flex items-center space-x-3 truncate">{branch_manager?.phone_number}</div>
                <div className="flex items-center space-x-3 truncate">
                    {branch_manager?.address?.length > 20 ? `${branch_manager?.address.slice(0, 20)}...` : branch_manager?.address}
                </div>
                <div className="inline-flex w-fit ml-8">
                    <Tooltip message={`Branch Associate ${branch_employees_count} Employess`} position="top" color="primary">
                        <Button color="primary" size="xs">
                            {branch_employees_count}
                        </Button>
                    </Tooltip>
                </div>
                <div className="inline-flex w-fit ml-8">
                    <Tooltip message={`Branch Associate ${branch_agencies_count} Agencies`} position="top" color="primary">
                        <Button color="primary" size="xs">
                            {branch_agencies_count}
                        </Button>
                    </Tooltip>
                </div>
                <div className="inline-flex w-fit">
                    <Tooltip message="Change Status" position="top" color="primary">
                        <Toggle className="m-2" color="primary" defaultChecked={branch_manager?.status == '1' ? true : false} onChange={() => handleStatusChange(branch_manager?.uuid)} />
                    </Tooltip>
                </div>
                <div className="inline-flex w-fit">
                    <Tooltip message="Update Branch" position="top" color="primary">
                        <Button color="primary" size="xs" onClick={(event) => {
                            event.stopPropagation();
                            showUpdateBranchConfirmation(branch);
                        }}>
                            Update
                        </Button>
                    </Tooltip>
                    <div className="ml-1">
                        <Tooltip message="Update Branch Permission" position="top" color="primary">
                            <Button color="primary" size="xs" onClick={(event) => {
                                event.stopPropagation();
                                showUpdatePermissionModal(branch_manager?.uuid);
                            }}>
                                Update Permission
                            </Button>
                        </Tooltip>
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
                                showDeleteBranchConfirmation(uuid);
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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPermissionModal, setIsPermissionModal] = useState<boolean>(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [branchId, setBranchId] = useState<string>("");
    const [permissionList, setPermissionList] = useState<any>();
    const [selectedPermissions, setSelectedPermissions] = useState<any>();
    const [userUUid,setuserUUid] = useState<any>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { data: detail_data } = useGetBranchesQuery({ searchText, pageUrl });
    const branches = detail_data?.data;
    const links = detail_data?.links;
    const [createBranch, { isLoading: createLoading }] = useCreateBranchMutation();
    const [deleteBranch, { isLoading: deleteBranchLoading }] = useDeleteBranchMutation();
    const [updateBranch, { isLoading: branchLoading }] = useUpdateBranchMutation();
    const [updatePermissions] = usePermissionUpdateMutation();
    const [permissionListByType] = usePermissionListByTypeMutation();
    const branchSchema = z.object({
        branch_name: z.string({ required_error: "Branch Name Required!" }).min(5, "Branch Name cannot be empty!"),
        manager_name: z.string({ required_error: "Branch Manager Name Required!" }).min(5, "Branch Manager Name Should be greater than 5"),
        phone_number: z.string().regex(/^\+?\d{1,4}?[\d\s\-\(\)]{7,15}$/, "Invalid phone number!"),
        city: z.string({ required_error: "City is required!" }).min(1, "City cannot be empty!"),
        address: z.string({ required_error: "Address is required!" }).min(1, "Address cannot be empty!"),
        email: z.string({ required_error: "Email Required!" }).email({ message: "Invalid email address!" }).min(1, "Email is required!"),
    });

    const [BranchToBeDelete, setBranchToBeDelete] = useState<IBranch>();
    const BranchDeleteConfirmationRef = useRef<HTMLDialogElement | null>(null);

    const { control: filterControl } = useForm({
        defaultValues: {
            category: "default",
            search: "",
        },
    });

    const showDeleteBranchConfirmation = (uuid: any) => {
        BranchDeleteConfirmationRef.current?.showModal();
        setBranchToBeDelete(branches?.find((b: any) => uuid === b.uuid));
    };

    const showUpdateBranchConfirmation = (branch: any) => {
        reset({
            branch_name: branch.name,
            manager_name: branch.branch_manager.name,
            phone_number: branch.branch_manager.phone_number,
            city: branch.branch_manager.city,
            address: branch.branch_manager.address,
            email: branch.branch_manager.email,
        });
        setBranchId(branch.uuid);
        setIsEditMode(true)
        setIsModalOpen(true)
    }

    const handleDeleteBranch = async () => {
        if (BranchToBeDelete) {
            deleteBranch(BranchToBeDelete.uuid).then((response: any) => {
                if (response?.data.code == 200) {
                    toaster.success(response?.data.message);
                } else {
                    toaster.error(response?.data.message);
                }
            });
        }
    };

    const showUpdatePermissionModal = async (uuid: any) => {
        const type = 'branch';
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

    const paginationClickHandler = (url: string | null) => {
        if (url) {
            setPageUrl(url)
        }
    };

    const { control, handleSubmit, setError, reset } = useForm<z.infer<typeof branchSchema>>({
        resolver: zodResolver(branchSchema),
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
            await updateBranch({ branchId, updated_data }).then((response: any) => {
                if ("error" in response) {
                    setErrors(response?.error?.data?.errors);
                    return;
                }
                toaster.success(`Branch has been Updated`);
                reset({
                    branch_name: "",
                    manager_name: "",
                    phone_number: "",
                    city: "",
                    address: "",
                    email: "",
                });
                setBranchId("");
                setIsModalOpen(false);
            })
        } else {
            await createBranch(data).then((response: any) => {
                if ("error" in response) {
                    setErrors(response?.error?.data?.errors);
                    return;
                }
                const { data } = response?.data;
                toaster.success(`${data.name} has been created`);
                reset({
                    branch_name: "",
                    manager_name: "",
                    phone_number: "",
                    city: "",
                    address: "",
                    email: "",
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
    const handleSubmitPermissions = async (selectedPermissionUUIDs: string[]) => {
        setIsLoading(true)
        await updatePermissions({ userUUid, selectedPermissionUUIDs }).then((response: any) => {
            if ("error" in response) {
                setErrors(response?.error?.data?.errors);
                return;
            }
            toaster.success(`Permissions has been Updated`);
            setPermissionList('');
            setSelectedPermissions('')
            setIsLoading(true)
            setIsPermissionModal(false)            
        })
        setIsLoading(true)
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
                                {branches?.map((branch: any, index: any) => (
                                    <BranchRow
                                        branch={branch}
                                        key={index}
                                        showDeleteBranchConfirmation={showDeleteBranchConfirmation}
                                        showUpdateBranchConfirmation={showUpdateBranchConfirmation}
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
            <Modal ref={BranchDeleteConfirmationRef} backdrop>
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
                    You are about to delete <b>{BranchToBeDelete?.name}</b>. Would you like to proceed further ?
                </ModalBody>
                <ModalActions>
                    <form method="dialog">
                        <Button color="error" size="sm">
                            No
                        </Button>
                    </form>
                    <form method="dialog">
                        <Button loading={deleteBranchLoading} color="primary" size="sm" onClick={() => handleDeleteBranch()}>
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
                        aria-label="Close modal" onClick={handleClose} >
                        <Icon icon={xIcon} className="h-4" />
                    </Button>
                </form>
                <ModalHeader className="font-bold">{isEditMode ? "Edit Branch" : "Add Branch"}</ModalHeader>
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
                                    <FormLabel title={"Branch Manager Name"} htmlFor="manager_name"></FormLabel>
                                    <FormInput
                                        className="w-full border-0 focus:outline-0"
                                        control={control}
                                        size="md"
                                        id="manager_name"
                                        name="manager_name"
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
                            </div>
                        </CardBody>
                    </Card>
                </ModalBody>

                <ModalActions>
                    <form method="dialog">
                        <Button color="primary" size="md" loading={createLoading || branchLoading} onClick={() => onSubmit()}>
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

export { BranchTable };
