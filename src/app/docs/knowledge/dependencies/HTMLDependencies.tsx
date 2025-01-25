import { Card, CardBody, Table, TableBody, TableHead, TableRow } from "@/components/daisyui";

const NecessaryDependenciesTable = () => {
    return (
        <Table className="custom-table" aria-label="Example static collection table">
            <TableHead>
                <div>Dependencies</div>
                <div>Description</div>
            </TableHead>
            <TableBody>
                <TableRow>
                    <p>daisyui</p>
                    <p>Tailwind CSS Components</p>
                </TableRow>
                <TableRow>
                    <p>vite</p>
                    <p>Bundling toolkit</p>
                </TableRow>
            </TableBody>
        </Table>
    );
};

const FormDependenciesTable = () => {
    return (
        <Table className="custom-table" aria-label="Example static collection table">
            <TableHead>
                <div>Dependencies</div>
                <div>Description</div>
            </TableHead>
            <TableBody>
                <TableRow>
                    <p>filepond</p>
                    <p>React component for File upload</p>
                </TableRow>
                <TableRow>
                    <p>filepond-plugin-image-preview</p>
                    <p>Image preview plugin for filepond, to see preview when click on image (uploaded)</p>
                </TableRow>
                <TableRow>
                    <p>quill</p>
                    <p>WYSIWYG Quill Editor</p>
                </TableRow>
            </TableBody>
        </Table>
    );
};

const ComponentDependenciesTable = () => {
    return (
        <Table className="custom-table" aria-label="Example static collection table">
            <TableHead>
                <div>Dependencies</div>
                <div>Description</div>
            </TableHead>
            <TableBody>
                <TableRow>
                    <p>apexcharts</p>
                    <p>ApexCharts</p>
                </TableRow>
            </TableBody>
        </Table>
    );
};

const UtilityDependenciesTable = () => {
    return (
        <Table className="custom-table" aria-label="Example static collection table">
            <TableHead>
                <div>Dependencies</div>
                <div>Description</div>
            </TableHead>
            <TableBody>
                <TableRow>
                    <p>simplebar</p>
                    <p>Custom scrollbar for vanilla javascript</p>
                </TableRow>
                <TableRow>
                    <p>dayjs</p>
                    <p>Day utilities alternative to moment.js</p>
                </TableRow>
            </TableBody>
        </Table>
    );
};

const DevDependenciesTable = () => {
    return (
        <Table className="custom-table" aria-label="Example static collection table">
            <TableHead>
                <div>Dependencies</div>
                <div>Description</div>
            </TableHead>
            <TableBody>
                <TableRow>
                    <p>tailwindcss</p>
                    <p>utility-first CSS framework</p>
                </TableRow>
                <TableRow>
                    <p>postcss</p>
                    <p>Post processor for tailwindcss</p>
                </TableRow>
                <TableRow>
                    <p>glob</p>
                    <p>Use for checking file in vite config</p>
                </TableRow>
                <TableRow>
                    <p>path</p>
                    <p>Getting path for vite config</p>
                </TableRow>
                <TableRow>
                    <p>prettier</p>
                    <p>Code formatter</p>
                </TableRow>
                <TableRow>
                    <p>prettier-plugin-tailwindcss</p>
                    <p>Class sorting for tailwindcss (+ prettier)</p>
                </TableRow>
            </TableBody>
        </Table>
    );
};

const HTMLDependencies = () => {
    return (
        <>
            <Card className="bg-base-100">
                <CardBody className="p-5">
                    <p className="mb-3 text-base font-medium">Necessary</p>
                    <NecessaryDependenciesTable />
                </CardBody>
            </Card>
            <Card className="mt-5 bg-base-100">
                <CardBody className="p-5">
                    <p className="mb-3 text-base font-medium">Component</p>
                    <ComponentDependenciesTable />
                </CardBody>
            </Card>
            <Card className="mt-5 bg-base-100">
                <CardBody className="p-5">
                    <p className="mb-3 text-base font-medium">Form</p>
                    <FormDependenciesTable />
                </CardBody>
            </Card>
            <Card className="mt-5 bg-base-100">
                <CardBody className="p-5">
                    <p className="mb-3 text-base font-medium">Utility</p>
                    <UtilityDependenciesTable />
                </CardBody>
            </Card>
            <Card className="mt-5 bg-base-100">
                <CardBody className="p-5">
                    <p className="mb-3 text-base font-medium">Dev</p>
                    <DevDependenciesTable />
                </CardBody>
            </Card>
        </>
    );
};

export { HTMLDependencies };
