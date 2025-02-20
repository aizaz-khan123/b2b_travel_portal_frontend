"use client";
import {
    Accordion,
    AccordionContent,
    AccordionTitle,
    Button,
    Card,
    CardBody,
    CardTitle,
    Input
} from "@/components/daisyui";
import MuiDropdown from "@/components/mui/MuiDropdown";
import DateRangeIcon from "@mui/icons-material/DateRange";
import PersonIcon from "@mui/icons-material/Person";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import { Divider } from "@mui/material";
import Link from "next/link";
import { gender, genderTitle } from "../Dropdownvalues";
import { useForm } from "react-hook-form";
import MuiTextField from "@/components/mui/MuiTextField";
import MuiDatePicker from "@/components/mui/MuiDatePicker";
import { useState } from "react";
import Tesseract from "tesseract.js";

const page = () => {
    const { control, handleSubmit } = useForm();
    const onSubmit = (data: any) => {
        console.log("Form submitted:", data);
    };
    const [image, setImage] = useState<File | null>(null);
    const [extractedText, setExtractedText] = useState("");

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setImage(event.target.files[0]);
            extractText(event.target.files[0]);
        }
    };

    // const extractText = async (file: File) => {
    //     const { data } = await Tesseract.recognize(file, "eng");
    //     setExtractedText(data.text);
    // };
    const [passportData, setPassportData] = useState<Record<string, string>>({});

    const extractText = async (file: File) => {
        const { data } = await Tesseract.recognize(file, "eng");
        const parsedData = parseMRZ(data.text);
        setPassportData(parsedData);
    };


    const parseMRZ = (mrz: string) => {
        const lines = mrz.split("\n");
        if (lines.length < 2) return {};

        const firstLine = lines[0].replace(/<+/g, " ").trim().split(" ");
        const secondLine = lines[1];

        return {
            surname: firstLine[1] || "",
            givenName: firstLine[2] || "",
            passportNumber: secondLine.substring(0, 9),
            nationality: secondLine.substring(10, 13),
            birthDate: `19${secondLine.substring(13, 19)}`, // Needs conversion
            gender: secondLine[20] === "M" ? "Male" : "Female",
            expiryDate: `20${secondLine.substring(21, 27)}`, // Needs conversion
        };
    };


    return (
        <>
            <div className="grid grid-cols-12 gap-3">
                <div className="col-span-12">
                    <div>
                        {/* Booking Header */}
                        <Card className="bg-base-100 mb-5">
                            <CardBody>
                                <div className="flex justify-between items-cente">
                                    <div>
                                        <p className="text-gray-600">LHR - DXB</p>
                                        <div className="flex gap-3">
                                            <div className="flex gap-2">
                                                <DateRangeIcon />
                                                <p className="text-gray-600 text-md font-bold">
                                                    Mar 7{" "}
                                                </p>
                                            </div>
                                            <div className="flex gap-2">
                                                <PersonIcon />
                                                <p className="text-gray-600 text-md font-bold">
                                                    1 Adult
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="text-md font-semibold text-primary">
                                            Booking Confirmation
                                        </h2>

                                        <h2 className="text-xl font-semibold">W3T6AFHTQLN</h2>
                                    </div>

                                    {/* <span className="bg-blue-500 text-white px-4 py-2 rounded-lg">Confirmed</span> */}
                                </div>
                            </CardBody>
                        </Card>

                        {/* ---------------------- Contact Details----------- */}

                        <div className="grid grid-cols-12 gap-3">
                            <div className="col-span-9">
                                <div>
                                    {/* Booking Header */}
                                    <Card className="bg-base-100 mb-5">
                                        <CardBody>
                                            <div className="space-y-4">
                                                {/* Heading */}
                                                <div className="flex gap-2 items-center">
                                                    <div className="bg-blue-600 rounded-lg p-1">
                                                        <PhoneEnabledIcon className="text-white" />
                                                    </div>
                                                    <h2 className="text-xl font-semibold">
                                                        Contact Details
                                                    </h2>
                                                </div>

                                                <Divider sx={{ marginTop: "0.5rem" }} />

                                                {/* Lead Traveler */}
                                                <div className="flex justify-between">
                                                    <div>
                                                        <p className="text-sm font-medium">Lead Traveler</p>
                                                        <div className="flex border border-gray-300 rounded-lg overflow-hidden mt-1 w-full">
                                                            <select className="px-3 py-2 bg-white text-sm outline-none">
                                                                <option>Country Code</option>

                                                                <option>+1</option>
                                                                <option>+44</option>
                                                                <option>+92</option>
                                                                <option>+91</option>
                                                            </select>
                                                            <input
                                                                type="text"
                                                                placeholder="Phone number"
                                                                className="w-full border-b-none focus:ring-0 focus:outline-none"
                                                            />
                                                        </div>
                                                        <p className="text-xs text-gray-500 mt-1">
                                                            Please input the traveler's number here to receive
                                                            flight updates
                                                        </p>
                                                    </div>

                                                    {/* Contact Details Button */}
                                                    <div className="bg-green-100 p-3 rounded-lg w-fit">
                                                        <p className="text-green-900 font-medium">
                                                            Contact Details
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </div>

                                <div>
                                    {/* Booking Header */}
                                    <Card className="bg-base-100 mb-5">
                                        <CardBody>
                                            <div className="space-y-4">
                                                {/* Heading */}
                                                <div className="flex gap-2 items-center">
                                                    <div className="bg-blue-600 rounded-lg p-1">
                                                        <PhoneEnabledIcon className="text-white" />
                                                    </div>
                                                    <h2 className="text-xl font-semibold">
                                                        Traveler Details-International
                                                    </h2>
                                                </div>

                                                <Divider sx={{ marginTop: "0.5rem" }} />

                                                {/* Lead Traveler */}
                                                <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
                                                    <div className="col-span-1 lg:col-span-3">
                                                        <p className="text-lg mb-3 font-medium">
                                                            Traveler 1: Adult
                                                        </p>

                                                        <div className="flex border border-gray-300 rounded-lg overflow-hidden mt-1 w-full">
                                                            <select className="w-full p-2 border-none outline-none">
                                                                <option value="option1">Option 1</option>
                                                                <option value="option2">Option 2</option>
                                                                <option value="option3">Option 3</option>
                                                                <option value="option4">Option 4</option>
                                                            </select>
                                                        </div>

                                                        <div className="flex items-center justify-center w-full my-4">
                                                            <hr className="w-full border-gray-300" />
                                                            <span className="mx-2 text-gray-600 font-semibold">
                                                                OR
                                                            </span>
                                                            <hr className="w-full border-gray-300" />
                                                        </div>
                                                        <div className="flex justify-center items-center">

                                                            <Link href={'#'} className="text-blue-600 text-center w-full font-bold">Add New Traveler</Link>
                                                        </div>
                                                    </div>


                                                    <div className="col-span-1 lg:col-span-3 "></div>
                                                </div>
                                                <div className="grid grid-cols-12 gap-5">
                                                    <div className="p-4">
                                                        <input
                                                            type="file"
                                                            accept="image/*"
                                                            onChange={handleImageUpload}
                                                            className="border p-2"
                                                        />
                                                        {image && <img src={URL.createObjectURL(image)} alt="Passport" className="mt-4 w-80" />}
                                                        {passportData && (
                                                            <div className="mt-4 border p-4 bg-gray-100">
                                                                <h3 className="font-bold">Passenger Details</h3>
                                                                <p><strong>Name:</strong> {passportData.givenName} {passportData.surname}</p>
                                                                <p><strong>Passport No:</strong> {passportData.passportNumber}</p>
                                                                <p><strong>Nationality:</strong> {passportData.nationality}</p>
                                                                <p><strong>Date of Birth:</strong> {passportData.birthDate}</p>
                                                                <p><strong>Gender:</strong> {passportData.gender}</p>
                                                                <p><strong>Expiry Date:</strong> {passportData.expiryDate}</p>
                                                            </div>
                                                        )}

                                                        {/* {extractedText && (
                                                            <pre className="mt-4 p-2 bg-gray-100 border">{extractedText}</pre>
                                                        )} */}
                                                    </div>

                                                    <div className="col-span-12 mb-5">
                                                        <Input
                                                            className="w-full"
                                                            type="file" />
                                                    </div>
                                                    <div className="col-span-6 mb-5">

                                                        <MuiDropdown
                                                            control={control}
                                                            name="title"
                                                            label="Title"
                                                            options={genderTitle.map((title) => ({
                                                                value: title,
                                                                label: `${title}`,
                                                            }))}
                                                        // onChange={handleCityChange}
                                                        />
                                                    </div>
                                                    <div className="col-span-6 mb-5">

                                                        <MuiTextField
                                                            control={control}
                                                            name="firstName"
                                                            label="First Name and Middle Name (if any)*"
                                                        // onChange={handleCityChange}
                                                        />
                                                    </div>
                                                    <div className="col-span-6 mb-5">
                                                        <MuiTextField
                                                            control={control}
                                                            name="lastName"
                                                            label="Last Name"
                                                        // onChange={handleCityChange}
                                                        />
                                                    </div>
                                                    <div className="col-span-6 mb-5">
                                                        <MuiDatePicker
                                                            control={control}
                                                            name="dob"
                                                            label="Date of Birth*"
                                                        // onChange={handleCityChange}
                                                        />
                                                    </div>
                                                    <div className="col-span-6 mb-5">
                                                        <MuiDatePicker
                                                            control={control}
                                                            name="dob"
                                                            label="Date of Birth*"
                                                        // onChange={handleCityChange}
                                                        />
                                                    </div>
                                                    <div className="col-span-6 mb-5">
                                                        <MuiDropdown
                                                            control={control}
                                                            name="gender"
                                                            label="Gender"
                                                            options={gender.map((gender) => ({
                                                                value: gender,
                                                                label: `${gender}`,
                                                            }))}
                                                        // onChange={handleCityChange}
                                                        />
                                                    </div>
                                                    <div className="col-span-6 mb-5">
                                                        <MuiDropdown
                                                            control={control}
                                                            name="nationality"
                                                            label="Nationality"
                                                            options={gender.map((gender) => ({
                                                                value: gender,
                                                                label: `${gender}`,
                                                            }))}
                                                        // onChange={handleCityChange}
                                                        />
                                                    </div>
                                                    <div className="col-span-6 mb-5">
                                                        <MuiDatePicker
                                                            control={control}
                                                            name="cnic"
                                                            label="CNIC Number"
                                                        // onChange={handleCityChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>

                            <div className="col-span-3">
                                <div>
                                    {/* Booking Header */}
                                    <Card className="bg-base-100 mb-5">
                                        <CardBody>
                                            <CardTitle>
                                                <h2 className="font-semibold text-lg">Price Summary</h2>
                                            </CardTitle>
                                            <div>
                                                <div className="flex justify-between border-b pb-2">
                                                    <p className="font-semibold">PIA (Adult) x 2:</p>
                                                    <p className=" text-gray-400">PKR 18,963.11</p>
                                                </div>

                                                <div className="flex justify-between mt-4">
                                                    <h4 className="font-semibold">Price you Pay:</h4>
                                                    <h4 className="text-blue-600 font-bold">
                                                        PKR 56,788.52
                                                    </h4>
                                                </div>
                                            </div>

                                            <Accordion className="p-0" icon="arrow">
                                                <AccordionTitle className="text-lg font-semibold px-0">
                                                    Fair Breakdown
                                                </AccordionTitle>
                                                <AccordionContent className="p-0">
                                                    <div className="mb-5 border p-2 rounded-md">
                                                        <CardTitle className="px-0">
                                                            <h2 className="font-semibold text-lg py-3">
                                                                Adult
                                                            </h2>
                                                        </CardTitle>
                                                        <hr className="mb-2 mt-0" />
                                                        <div>
                                                            <div className="flex justify-between items-center mb-1">
                                                                <p className="text-gray-800 text-sm font-semibold">
                                                                    Base Fare:
                                                                </p>
                                                                <p className="text-gray text-sm font-semibold text-end">
                                                                    PKR 88,358.41
                                                                </p>
                                                            </div>
                                                            <div className="flex justify-between items-center mb-1">
                                                                <p className="text-gray-800 text-sm font-semibold">
                                                                    Tax:
                                                                </p>
                                                                <p className="text-gray text-sm font-semibold text-end">
                                                                    PKR 88,358.41
                                                                </p>
                                                            </div>
                                                            <div className="flex justify-between items-center mb-1">
                                                                <p className="text-gray-800 text-sm font-semibold">
                                                                    Processing Fee:
                                                                </p>
                                                                <p className="text-gray text-sm font-semibold text-end">
                                                                    PKR 88,358.41
                                                                </p>
                                                            </div>
                                                            <hr className="border mt-3" />
                                                            <div className="flex justify-between mt-4">
                                                                <h4 className="font-semibold text-lg">
                                                                    Total to Pay:
                                                                </h4>
                                                                <h4 className="text-blue-600 font-bold text-lg">
                                                                    PKR 56,788.52
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mb-5 border p-2 rounded-md">
                                                        <CardTitle>
                                                            <h2 className="font-semibold text-lg py-3">
                                                                Child
                                                            </h2>
                                                        </CardTitle>
                                                        <hr className="mb-2 mt-0" />
                                                        <div>
                                                            <div className="flex justify-between items-center mb-1">
                                                                <p className="text-gray-800 text-sm font-semibold">
                                                                    Base Fare:
                                                                </p>
                                                                <p className="text-gray text-sm font-semibold text-end">
                                                                    PKR 88,358.41
                                                                </p>
                                                            </div>
                                                            <div className="flex justify-between items-center mb-1">
                                                                <p className="text-gray-800 text-sm font-semibold">
                                                                    Tax:
                                                                </p>
                                                                <p className="text-gray text-sm font-semibold text-end">
                                                                    PKR 88,358.41
                                                                </p>
                                                            </div>
                                                            <div className="flex justify-between items-center mb-1">
                                                                <p className="text-gray-800 text-sm font-semibold">
                                                                    Processing Fee:
                                                                </p>
                                                                <p className="text-gray text-sm font-semibold text-end">
                                                                    PKR 88,358.41
                                                                </p>
                                                            </div>
                                                            <hr className="border mt-3" />
                                                            <div className="flex justify-between mt-4">
                                                                <h4 className="font-semibold text-lg">
                                                                    Total to Pay:
                                                                </h4>
                                                                <h4 className="text-blue-600 font-bold text-lg">
                                                                    PKR 56,788.52
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mb-5 border p-2 rounded-md">
                                                        <CardTitle className="px-0">
                                                            <h2 className="font-semibold text-lg py-3">
                                                                Infant
                                                            </h2>
                                                        </CardTitle>
                                                        <hr className="mb-2 mt-0" />
                                                        <div>
                                                            <div className="flex justify-between items-center mb-1">
                                                                <p className="text-gray-800 text-sm font-semibold">
                                                                    Base Fare:
                                                                </p>
                                                                <p className="text-gray text-sm font-semibold text-end">
                                                                    PKR 88,358.41
                                                                </p>
                                                            </div>
                                                            <div className="flex justify-between items-center mb-1">
                                                                <p className="text-gray-800 text-sm font-semibold">
                                                                    Tax:
                                                                </p>
                                                                <p className="text-gray text-sm font-semibold text-end">
                                                                    PKR 88,358.41
                                                                </p>
                                                            </div>
                                                            <div className="flex justify-between items-center mb-1">
                                                                <p className="text-gray-800 text-sm font-semibold">
                                                                    Processing Fee:
                                                                </p>
                                                                <p className="text-gray text-sm font-semibold text-end">
                                                                    PKR 88,358.41
                                                                </p>
                                                            </div>
                                                            <hr className="border mt-3" />
                                                            <div className="flex justify-between mt-4">
                                                                <h4 className="font-semibold text-lg">
                                                                    Total to Pay:
                                                                </h4>
                                                                <h4 className="text-blue-600 font-bold text-lg">
                                                                    PKR 56,788.52
                                                                </h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-center">
                                                        <img
                                                            src="/media/images/study-abroad.svg"
                                                            alt="img"
                                                        />
                                                    </div>
                                                </AccordionContent>
                                            </Accordion>
                                        </CardBody>
                                    </Card>
                                </div>

                                <div>
                                    {/* Booking Header */}
                                    <Card className="bg-base-100 mb-5">
                                        <CardBody>
                                            <CardTitle>
                                                <h2 className="font-semibold text-lg">Trip Summary</h2>
                                            </CardTitle>
                                            <div>
                                                <Button
                                                    color="primary"
                                                    className="text-base font-semibold px-6"
                                                >
                                                    Flight 1
                                                </Button>
                                                <div className="flex items-center justify-between mt-5">
                                                    <div className=" border-b pb-2">
                                                        <p className="font-semibold">Departure</p>
                                                        <p className=" text-gray-400">7 Mar 2025</p>
                                                    </div>

                                                    <div className="">
                                                        <p className="font-semibold">Departure</p>
                                                        <p className=" text-gray-400">7 Mar 2025</p>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    <div className="text-center">
                                                        <h3 className="font-semibold text-base mb-0 h-4">
                                                            LHR
                                                        </h3>
                                                        <span className="text-gray-500 text-xs">
                                                            02:15 AM
                                                        </span>
                                                    </div>
                                                    <div className="text-center">
                                                        {/* <h3 className="text-gray text-xs mb-0">1 hr 15 mins</h3> */}
                                                        <span className="text-gray-500 flex">
                                                            -------{" "}
                                                            <img src="/media/icons/plane.svg" alt="" />{" "}
                                                            -------
                                                        </span>
                                                        {/* <h3 className="text-gray text-xs mb-0">Non-Stop</h3> */}
                                                    </div>
                                                    <div className="text-center">
                                                        <h3 className="font-semibold text-base mb-0 h-4">
                                                            ISL
                                                        </h3>
                                                        <span className="text-gray-500 text-xs">
                                                            02:15 AM
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default page