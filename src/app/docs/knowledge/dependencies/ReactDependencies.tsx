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
                    <p>react</p>
                    <p>JavaScript library for building user interfaces.</p>
                </TableRow>
                <TableRow>
                    <p>react-dom</p>
                    <p>React package for working with the DOM.</p>
                </TableRow>
                <TableRow>
                    <p>daisyui</p>
                    <p>Tailwind CSS Components</p>
                </TableRow>
                <TableRow>
                    <p>typescript</p>
                    <p>Language for application scale JavaScript development</p>
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
                    <p>react-filepond</p>
                    <p>React component wrapper for filepond</p>
                </TableRow>
                <TableRow>
                    <p>filepond-plugin-image-preview</p>
                    <p>Image preview plugin for filepond, to see preview when click on image (uploaded)</p>
                </TableRow>
                <TableRow>
                    <p>react-quill</p>
                    <p>React component wrapper for Quill Editor</p>
                </TableRow>
                <TableRow>
                    <p>react-hook-form</p>
                    <p>Form utility hook (use it for validation)</p>
                </TableRow>
                <TableRow>
                    <p>@hookform/resolvers</p>
                    <p>It provide form validation resolver to validate data comes form forms</p>
                </TableRow>
                <TableRow>
                    <p>zod</p>
                    <p>Schema validation for form</p>
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
                    <p>@googlemaps/react-wrapper</p>
                    <p>It&apos;s a wrapper for google map (in react)</p>
                </TableRow>
                <TableRow>
                    <p>@iconify/react</p>
                    <p>React wrapper for iconify icons</p>
                </TableRow>
                <TableRow>
                    <p>@iconify/icons-lucide</p>
                    <p>Lucide icon provider for iconify icon</p>
                </TableRow>
                <TableRow>
                    <p>input-otp</p>
                    <p>React component for otp input (in current use case we using in auth verification)</p>
                </TableRow>
                <TableRow>
                    <p>lottie-web</p>
                    <p>Animated json images web component</p>
                </TableRow>
                <TableRow>
                    <p>lord-icon-element</p>
                    <p>It is web component wrapper of lottie for react</p>
                </TableRow>
                <TableRow>
                    <p>react-apexcharts</p>
                    <p>React component for ApexCharts</p>
                </TableRow>
                <TableRow>
                    <p>react-svg-worldmap</p>
                    <p>React component wrapper for worldmap (svg)</p>
                </TableRow>
                <TableRow>
                    <p>simplebar-react</p>
                    <p>React component for simplebar</p>
                </TableRow>
                <TableRow>
                    <p>sonner</p>
                    <p>Toast component for react</p>
                </TableRow>
                <TableRow>
                    <p>styled-components</p>
                    <p>Write actual css into js </p>
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
                    <p>framer-motion</p>
                    <p>Make complex animation done with framer motion (in js)</p>
                </TableRow>
                <TableRow>
                    <p>next-themes</p>
                    <p>Theme changing provider for next.js</p>
                </TableRow>
                <TableRow>
                    <p>simplebar</p>
                    <p>Custom scrollbar for vanilla javascript</p>
                </TableRow>
                <TableRow>
                    <p>clsx</p>
                    <p>Utility for constructing `className` strings conditionally.</p>
                </TableRow>
                <TableRow>
                    <p>tailwind-merge</p>
                    <p>Merge Tailwind CSS classes without style conflicts.</p>
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
                    <p>@types/**</p>
                    <p>Typescript types for other dependencies</p>
                </TableRow>
                <TableRow>
                    <p>tailwindcss</p>
                    <p>utility-first CSS framework</p>
                </TableRow>
                <TableRow>
                    <p>postcss</p>
                    <p>Post processor for tailwindcss</p>
                </TableRow>
                <TableRow>
                    <p>postcss-import</p>
                    <p>It can import other css in css</p>
                </TableRow>
                <TableRow>
                    <p>postcss-nesting</p>
                    <p>Nesting css processor</p>
                </TableRow>
                <TableRow>
                    <p>@tailwindcss/nesting</p>
                    <p>It is use for nesting css (in postcss)</p>
                </TableRow>
                <TableRow>
                    <p>prettier</p>
                    <p>Code formatter</p>
                </TableRow>
                <TableRow>
                    <p>prettier-plugin-tailwindcss</p>
                    <p>Class sorting for tailwindcss (+ prettier)</p>
                </TableRow>
                <TableRow>
                    <p>@trivago/prettier-plugin-sort-imports</p>
                    <p>Import sorting in specific order (+ prettier)</p>
                </TableRow>
                <TableRow>
                    <p>eslint</p>
                    <p>Linting for javascript</p>
                </TableRow>
                <TableRow>
                    <p>eslint-config-next</p>
                    <p>Predefine next.js configuration for eslint</p>
                </TableRow>
                <TableRow>
                    <p>eslint-plugin-tailwindcss</p>
                    <p>Predefine tailwindcss configuration for eslint</p>
                </TableRow>
            </TableBody>
        </Table>
    );
};

const ReactDependencies = () => {
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

export { ReactDependencies };
