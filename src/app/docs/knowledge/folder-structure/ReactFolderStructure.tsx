"use client";

import { Card, CardBody, Table, TableBody, TableHead, TableRow } from "@/components/daisyui";

const RootFolderStructureTable = () => {
    return (
        <Table className="custom-table" aria-label="Example static collection table">
            <TableHead>
                <div>Folder</div>
                <div>Description</div>
            </TableHead>
            <TableBody>
                <TableRow>
                    <p>/api</p>
                    <p>Contains a functions, which is called for api requests</p>
                </TableRow>
                <TableRow>
                    <p>/assets</p>
                    <p>It&apos;s contains css, images or other assets needed for the app</p>
                </TableRow>
                <TableRow>
                    <p>/components</p>
                    <p>Containing all the common components, which use across entire app</p>
                </TableRow>
                <TableRow>
                    <p>/contexts</p>
                    <p>It&apos;s contains major context provider, which use across entire app</p>
                </TableRow>
                <TableRow>
                    <p>/database</p>
                    <p>
                        To establish a database connection on the server, you may place your database connection (ORM)
                        accordingly
                    </p>
                </TableRow>
                <TableRow>
                    <p>/helpers</p>
                    <p>Some utility functions, which are used by the entire app</p>
                </TableRow>
                <TableRow>
                    <p>/hooks</p>
                    <p>This folder contains all the essential hooks</p>
                </TableRow>
                <TableRow>
                    <p>/lib</p>
                    <p>It&apos;s contains routing, theme services (lib)</p>
                </TableRow>
                <TableRow>
                    <p>/pages</p>
                    <p>This folder contains a list of all web pages included in this website</p>
                </TableRow>

                <TableRow>
                    <p>/types</p>
                    <p>Included all the types is used in app</p>
                </TableRow>
            </TableBody>
        </Table>
    );
};

const PagesFolderStructureTable = () => {
    return (
        <Table className="custom-table" aria-label="Example static collection table">
            <TableHead>
                <div>Folder</div>
                <div>Description</div>
            </TableHead>
            <TableBody>
                <TableRow>
                    <p>/admin</p>
                    <p>Admin pages are located here</p>
                </TableRow>
                <TableRow>
                    <p>/auth</p>
                    <p>Auth pages directory</p>
                </TableRow>
                <TableRow>
                    <p>/landing</p>
                    <p>Landing Page</p>
                </TableRow>
            </TableBody>
        </Table>
    );
};

const AdminFolderStructureTable = () => {
    return (
        <Table className="custom-table" aria-label="Example static collection table">
            <TableHead>
                <div>Folder</div>
                <div>Description</div>
            </TableHead>
            <TableBody>
                <TableRow>
                    <p>/(layout)</p>
                    <p>Containing layout components and helpers</p>
                </TableRow>
                <TableRow>
                    <p>/apps</p>
                    <p>It&apos;s route for apps route</p>
                </TableRow>
                <TableRow>
                    <p>/dashboards</p>
                    <p>It&apos;s route for dashboards route</p>
                </TableRow>
                <TableRow>
                    <p>/pages</p>
                    <p>It&apos;s route for pages. it contains starter page for creating new page</p>
                </TableRow>
                <TableRow>
                    <p>/ui</p>
                    <p>It&apos;s route for ui pages</p>
                </TableRow>
                <TableRow>
                    <p>/layout.{"{tsx/jsx}"}</p>
                    <p>Layout for entire (admin)/* folder</p>
                </TableRow>
            </TableBody>
        </Table>
    );
};

const ReactFolderStructure = () => {
    return (
        <>
            <Card className="bg-base-100">
                <CardBody className="p-5">
                    <p className="mb-3 text-base font-medium">Root Folder (/src/*)</p>
                    <RootFolderStructureTable />
                </CardBody>
            </Card>
            <Card className="mt-5 bg-base-100">
                <CardBody className="p-5">
                    <p className="mb-3 text-base font-medium">Pages Folder (/src/pages/*)</p>
                    <PagesFolderStructureTable />
                </CardBody>
            </Card>
            <Card className="mt-5 bg-base-100">
                <CardBody className="p-5">
                    <p className="mb-3 text-base font-medium">Admin - Pages Folder (/src/pages/admin/*)</p>
                    <AdminFolderStructureTable />
                </CardBody>
            </Card>
        </>
    );
};

export { ReactFolderStructure };
