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
                    <p>/assets</p>
                    <p>It&apos;s contains css, images or other assets needed for the app</p>
                </TableRow>
                <TableRow>
                    <p>/partials</p>
                    <p>
                        Containing all the common parts of html, which use across entire app. Like topbar, sidebar etc
                    </p>
                </TableRow>
                <TableRow>
                    <p>/{"**.html"}</p>
                    <p>All the html pages</p>
                </TableRow>
            </TableBody>
        </Table>
    );
};

const PartialFolderStructureTable = () => {
    return (
        <Table className="custom-table" aria-label="Example static collection table">
            <TableHead>
                <div>Folder</div>
                <div>Description</div>
            </TableHead>
            <TableBody>
                <TableRow>
                    <p>/leftbar</p>
                    <p>It is leftbar, which contents simple leftbar and with drawer</p>
                </TableRow>
                <TableRow>
                    <p>/leftmenu</p>
                    <p>It is left side menu, which is contains all the leftbar menu items</p>
                </TableRow>
                <TableRow>
                    <p>/title-meta</p>
                    <p>It is for meta data (SEO) & also contains some css & js, which is commonly use in entire app</p>
                </TableRow>
                <TableRow>
                    <p>/topbar</p>
                    <p>It is topbar</p>
                </TableRow>
                <TableRow>
                    <p>/footer-scripts</p>
                    <p>
                        contains some css & js, which is commonly use in entire app, which is need to fetch after body
                    </p>
                </TableRow>
            </TableBody>
        </Table>
    );
};

const AssetFolderStructureTable = () => {
    return (
        <Table className="custom-table" aria-label="Example static collection table">
            <TableHead>
                <div>Folder</div>
                <div>Description</div>
            </TableHead>
            <TableBody>
                <TableRow>
                    <p>/css</p>
                    <p>Contains all css for project</p>
                </TableRow>
                <TableRow>
                    <p>/images</p>
                    <p>Contains all images</p>
                </TableRow>
                <TableRow>
                    <p>/js</p>
                    <p>All js are placed here</p>
                </TableRow>
            </TableBody>
        </Table>
    );
};

const HTMLFolderStructure = () => {
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
                    <p className="mb-3 text-base font-medium">Assets - Folder (/src/assets/*)</p>
                    <AssetFolderStructureTable />
                </CardBody>
            </Card>
            <Card className="mt-5 bg-base-100">
                <CardBody className="p-5">
                    <p className="mb-3 text-base font-medium">Pages Folder (/src/partials/*)</p>
                    <PartialFolderStructureTable />
                </CardBody>
            </Card>
        </>
    );
};

export { HTMLFolderStructure };
