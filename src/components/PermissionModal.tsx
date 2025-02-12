import { Modal, ModalHeader, ModalBody, ModalActions } from "@/components/daisyui/Modal";
import { Button } from "@/components/daisyui/Button";
import { Card, CardBody } from "@/components/daisyui/Card";
import xIcon from "@iconify/icons-lucide/x";
import { Icon } from "@/components/Icon";
import { FormLabel } from "@/components/daisyui";
import React, { useState } from "react";

interface Permission {
    uuid: string;
    name: string;
    module: string;
}

interface Props {
    isOpen: boolean;
    handleClose: () => void;
    control: any;
    permissionList: Permission[];
    selectedPermissions: string[];
    onSubmit: (selectedPermissionUUIDs: any) => void;
    loading: any;
}
const formatPermission = (str:any) => {
    return str.replace(/_/g, ' ').replace(/\b\w/g, (char:any) => char.toUpperCase());
};

const PermissionModal: React.FC<Props> = ({ isOpen, handleClose, permissionList, selectedPermissions, onSubmit, loading }) => {

    const [selected, setSelected] = useState<any>(selectedPermissions);

    const handleToggle = (permissionUUID: any) => {
        setSelected((prevSelected:any) =>
            prevSelected.includes(permissionUUID)
                ? prevSelected.filter((uuid:any) => uuid !== permissionUUID)
                : [...prevSelected, permissionUUID]
        );
    };

    const handleSubmit = () => {
        onSubmit(selected);
    };

    return (
        <Modal open={isOpen} className="w-11/12 max-w-5xl h-11/12">
            <form method="dialog">
                <Button
                    size="sm"
                    color="ghost"
                    shape="circle"
                    className="absolute right-2 top-2"
                    aria-label="Close modal"
                    onClick={handleClose}
                >
                    <Icon icon={xIcon} className="h-4" />
                </Button>
            </form>
            <h3 className="text-md font-semibold mb-2">Manage Permissions</h3>
            <ModalBody>
                <Card className="bg-base-100">
                    <CardBody className="gap-0">
                        <div className="mt-4">
                            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {permissionList.map((permission:any) => (
                                    <div key={permission.uuid} className="flex items-center justify-between bg-gray-100 p-2 rounded-md cursor-pointer">
                                        <FormLabel title={formatPermission(permission.name)} htmlFor={permission.module + '-' + permission.name} className="cursor-pointer"></FormLabel>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                className="sr-only peer"
                                                checked={selected.includes(permission.name)}
                                                onChange={() => handleToggle(permission.name)}
                                                id={permission.module + '-' + permission.name}
                                            />
                                            <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-1/2 after:left-1 after:-translate-y-1/2 after:w-5 after:h-5 after:bg-white after:rounded-full after:transition-all"></div>
                                        </label>
                                    </div>
                                ))}
                            </div> */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {permissionList.map((permission) => (
                                    <div key={permission.uuid} className="flex items-center justify-between bg-gray-100 p-2 rounded-md cursor-pointer">
                                        <FormLabel title={formatPermission(permission.name)} htmlFor={permission.uuid} className="cursor-pointer"></FormLabel>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input
                                                type="checkbox"
                                                className="sr-only peer"
                                                checked={selected.includes(permission.uuid)}
                                                onChange={() => handleToggle(permission.uuid)}
                                                id={permission.uuid}
                                            />
                                            <div className="w-11 h-6 bg-gray-200 rounded-full peer-checked:bg-blue-600 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-1/2 after:left-1 after:-translate-y-1/2 after:w-5 after:h-5 after:bg-white after:rounded-full after:transition-all"></div>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </ModalBody>
            <ModalActions>
                <form method="dialog">
                    <Button color="primary" size="md" onClick={handleSubmit} loading={loading}>
                        Update Permission
                    </Button>
                </form>
            </ModalActions>
        </Modal>
    );
};

export default PermissionModal;