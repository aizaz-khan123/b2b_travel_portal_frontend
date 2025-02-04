"use client";

import { Button, Card, CardBody, FormLabel, Modal, ModalBody, ModalHeader } from "@/components/daisyui";
import { FormInput, FormRadio, FormSelect } from "@/components/forms";
import { Icon } from "@/components/Icon";
import calendarIcon from "@iconify/icons-lucide/calendar";
import searchIcon from "@iconify/icons-lucide/search";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import authImage from "@/assets/images/auth/auth-hero.png";
import refreshCcw from "@iconify/icons-lucide/refresh-ccw";
import plus from "@iconify/icons-lucide/plus";
import info from "@iconify/icons-lucide/info";

import { Fragment, useRef, useState } from "react";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';



const countries = [
    {
        id: 1,
        title: "Pak",
    }, {
        id: 2,
        title: "Aus",
    }, {
        id: 3,
        title: "Ind",
    }, {
        id: 4,
        title: "South",
    },
];

const FlightCarousal = () => {
    return (
        <Carousel autoPlay className="rounded-lg shadow-md mb-5">
            <div>
                <Image src={authImage}
                    className="max-h-[400px] object-contain"
                    alt="Auth Image" />
            </div>
            <div>
                <Image src={authImage}
                    className="max-h-[400px] object-contain"
                    alt="Auth Image" />
            </div>
            <div>
                <Image src={authImage}
                    className="max-h-[400px] object-contain"
                    alt="Auth Image" />
            </div>
        </Carousel>
    );
};



const FlightSearch = () => {
    const { control, handleSubmit, setValue, watch } = useForm();

    const [flights, setFlights] = useState([
        { id: 1, from: null, to: null, departureDate: "" },
        { id: 2, from: null, to: null, departureDate: "" },
    ]);

    const swapLocations = () => {
        const from = watch("from");
        const to = watch("to");
        setValue("from", to);
        setValue("to", from);
    };

    const addFlight = () => {
        if (flights.length < 5) {
            setFlights([...flights, { id: Date.now(), from: null, to: null, departureDate: "" }]);
        }
    };

    const removeFlight = (id: any) => {
        setFlights(flights.filter((flight) => flight.id !== id));
    };

    const onSubmit = (data: any) => {
        console.log("Form submitted:", data);
    };
    const travelType = watch("travelType", "oneWay");
    return (
        <Card className="bg-base-100/80 backdrop-blur-lg rounded-lg shadow-md mb-5">
            <CardBody className="p-6">
                <h2 className="text-xl font-semibold mb-4">Search Flights</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex items-center gap-4 mb-4">
                        <span className="font-medium">Travel Type:</span>
                        {["oneWay", "roundTrip", "multiCity"].map((type) => (
                            <div key={type} className="flex items-center gap-1">
                                <FormRadio
                                    name="travelType"
                                    control={control}
                                    id={type}
                                    value={type}
                                    size="sm"
                                />
                                <FormLabel title={type.replace(/([A-Z])/g, " $1")} htmlFor={type} className="capitalize" />
                            </div>
                        ))}
                    </div>

                    {travelType !== "multiCity" ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
                            <div className="relative">
                                <FormLabel title="From" htmlFor="from" />
                                <FormSelect
                                    control={control}
                                    name="from"
                                    id="from"
                                    size="md"
                                    className="w-full border-0 text-base"
                                    options={countries.map((location) => ({
                                        label: location.title,
                                        value: location.id,
                                    }))}
                                    placeholder="Leaving from"
                                />
                                <button
                                    onClick={swapLocations}
                                    type="button"
                                    className="absolute right-[-30px] bottom-1 p-2 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-300"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M8 3 4 7l4 4" />
                                        <path d="M4 7h16" />
                                        <path d="m16 21 4-4-4-4" />
                                        <path d="M20 17H4" />
                                    </svg>
                                </button>
                            </div>
                            <div>
                                <FormLabel title="To" htmlFor="to" />
                                <FormSelect
                                    control={control}
                                    name="to"
                                    id="to"
                                    size="md"
                                    className="w-full border-0 text-base"
                                    options={countries.map((location) => ({
                                        label: location.title,
                                        value: location.id,
                                    }))}
                                    placeholder="Going to"
                                />
                            </div>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DateRangePicker']}>
                                    <DateRangePicker localeText={{ start: 'Check-in', end: 'Check-out' }} />
                                </DemoContainer>
                            </LocalizationProvider>
                            <div>
                                <FormLabel title="Departure Date" htmlFor="departureDate" />
                                <FormInput
                                    type="date"
                                    size="md"
                                    control={control}
                                    name="departureDate"
                                    id="departureDate"
                                    className="w-full"
                                />
                            </div>
                            <div>
                                <FormLabel title="Return Date" htmlFor="returnDate" />
                                <FormInput
                                    type="date"
                                    size="md"
                                    control={control}
                                    name="returnDate"
                                    id="returnDate"
                                    className="w-full"
                                    disabled={travelType !== "roundTrip"}
                                />
                            </div>
                            <div>
                                <FormLabel title={"Travelers"} htmlFor="travelers" />
                                <FormSelect
                                    control={control}
                                    name="travelers"
                                    instanceId="travelers"
                                    id="travelers"
                                    size="md"
                                    className="w-full border-0 text-base"
                                    options={countries.map((location) => ({
                                        label: location.title,
                                        value: location.id,
                                    }))}
                                    placeholder="Travelers"
                                />
                            </div>
                            <div>
                                <FormLabel title={"Financial Profiles"} htmlFor="financialProfiles" />
                                <FormSelect
                                    control={control}
                                    name="financialProfiles"
                                    instanceId="financialProfiles"
                                    id="financialProfiles"
                                    size="md"
                                    className="w-full border-0 text-base"
                                    options={countries.map((location) => ({
                                        label: location.title,
                                        value: location.id,
                                    }))}
                                    placeholder="Financial Profiles"
                                />
                            </div>
                            <div>
                                <FormLabel title={"Cabin Class"} htmlFor="cabinClass" />
                                <FormSelect
                                    control={control}
                                    name="cabinClass"
                                    instanceId="cabinClass"
                                    id="cabinClass"
                                    size="md"
                                    className="w-full border-0 text-base"
                                    options={countries.map((location) => ({
                                        label: location.title,
                                        value: location.id,
                                    }))}
                                    placeholder="Cabin Class"
                                />
                            </div>
                            <div>
                                <Button color="primary" size="md" aria-label="Search Flights" className="px-5">
                                    Search Flights
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <div className="grid grid-cols-12 gap-4 items-center">
                                {flights.map((flight, index) => (
                                    <Fragment key={flight.id}>
                                        <div className="col-span-1">
                                            <p className="mt-8 text-blue-500">Flight {index + 1}</p>
                                        </div>
                                        <div className="col-span-3">
                                            <div className="relative">
                                                <FormLabel title="From" htmlFor={`from-${flight.id}`} />
                                                <FormSelect
                                                    control={control}
                                                    name={`from-${flight.id}`}
                                                    id={`from-${flight.id}`}
                                                    size="md"
                                                    className="w-full border-0 text-base"
                                                    options={countries.map((location) => ({
                                                        label: location.title,
                                                        value: location.id,
                                                    }))}
                                                    placeholder="Leaving from"
                                                />
                                                <button
                                                    onClick={swapLocations}
                                                    type="button"
                                                    className="absolute right-[-30px] bottom-1 p-2 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-300"
                                                >
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path d="M8 3 4 7l4 4" />
                                                        <path d="M4 7h16" />
                                                        <path d="m16 21 4-4-4-4" />
                                                        <path d="M20 17H4" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-span-3">
                                            <FormLabel title="To" htmlFor={`to-${flight.id}`} />
                                            <FormSelect
                                                control={control}
                                                name={`to-${flight.id}`}
                                                id={`to-${flight.id}`}
                                                size="md"
                                                className="w-full border-0 text-base"
                                                options={countries.map((location) => ({
                                                    label: location.title,
                                                    value: location.id,
                                                }))}
                                                placeholder="Going to"
                                            />
                                        </div>
                                        <div className="col-span-3">
                                            <FormLabel title="Departure Date" htmlFor={`departureDate-${flight.id}`} />
                                            <FormInput
                                                type="date"
                                                size="md"
                                                control={control}
                                                name={`departureDate-${flight.id}`}
                                                id={`departureDate-${flight.id}`}
                                                className="w-full"
                                            />
                                        </div>
                                        <div className="col-span-2">
                                            {index >= 2 && (
                                                <button
                                                    type="button"
                                                    onClick={() => removeFlight(flight.id)}
                                                    className="text-red-500 hover:text-red-700 cursor-pointer mt-8"
                                                >
                                                    ✖ Remove
                                                </button>
                                            )}
                                        </div>
                                    </Fragment>
                                ))}
                            </div>
                            <div className="mt-4">
                                <h2 onClick={addFlight} className="cursor-pointer text-blue-500 mt-2 underline">
                                    + Add Another Flight
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
                                <div>
                                    <FormLabel title={"Travelers"} htmlFor="travelers" />
                                    <FormSelect
                                        control={control}
                                        name="travelers"
                                        instanceId="travelers"
                                        id="travelers"
                                        size="md"
                                        className="w-full border-0 text-base"
                                        options={countries.map((location) => ({
                                            label: location.title,
                                            value: location.id,
                                        }))}
                                        placeholder="Travelers"
                                    />
                                </div>
                                <div>
                                    <FormLabel title={"Financial Profiles"} htmlFor="financialProfiles" />
                                    <FormSelect
                                        control={control}
                                        name="financialProfiles"
                                        instanceId="financialProfiles"
                                        id="financialProfiles"
                                        size="md"
                                        className="w-full border-0 text-base"
                                        options={countries.map((location) => ({
                                            label: location.title,
                                            value: location.id,
                                        }))}
                                        placeholder="Financial Profiles"
                                    />
                                </div>
                                <div>
                                    <FormLabel title={"Cabin Class"} htmlFor="cabinClass" />
                                    <FormSelect
                                        control={control}
                                        name="cabinClass"
                                        instanceId="cabinClass"
                                        id="cabinClass"
                                        size="md"
                                        className="w-full border-0 text-base"
                                        options={countries.map((location) => ({
                                            label: location.title,
                                            value: location.id,
                                        }))}
                                        placeholder="Cabin Class"
                                    />
                                </div>
                                <div>
                                    <Button color="primary" size="md" aria-label="Search Flights" className="px-5">
                                        Search Flights
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                </form>
            </CardBody>
        </Card>
    );
};


const RecentSearch = () => {
    return (
        <Card className="bg-base-100/80 backdrop-blur-lg rounded-lg shadow-md mb-5">
            <CardBody className="p-6">
                <div>
                    <h2 className="text-lg font-semibold mb-4">Recent Searches</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            {
                                from: "LHR",
                                to: "ISL",
                                date: "Sat, 25 Jan, 25 - Sun, 26 Jan, 25",
                                details: "Round-Trip • 2 Travelers • Economy",
                            },
                            {
                                from: "DXB",
                                to: "JFK",
                                date: "Mon, 27 Jan, 25 - Wed, 29 Jan, 25",
                                details: "One-Way • 1 Traveler • Business",
                            },
                            {
                                from: "SFO",
                                to: "ORD",
                                date: "Fri, 31 Jan, 25 - Sun, 2 Feb, 25",
                                details: "Round-Trip • 3 Travelers • First Class",
                            },
                            {
                                from: "LAX",
                                to: "SEA",
                                date: "Tues, 4 Feb, 25 - Thurs, 6 Feb, 25",
                                details: "Multi-City • 4 Travelers • Economy",
                            },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="border-2 border-gray rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
                            >
                                <div className="flex justify-between items-center">
                                    <div className="text-lg font-semibold text-primary">
                                        {item.from} <span className="text-gray-500">↔</span> {item.to}
                                    </div>
                                    <a
                                        href="#"
                                        className="text-blue-500 hover:text-blue-700"
                                        aria-label="View Details"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17.25 6.75L21 10.5m0 0l-3.75 3.75M21 10.5H3"
                                            />
                                        </svg>
                                    </a>
                                </div>
                                <div className="text-sm text-gray-500 mt-2 flex items-center gap-2">
                                    <Icon icon={calendarIcon} className="text-base-content/70" fontSize={15} />
                                    {item.date}
                                </div>
                                <div className="text-sm text-gray-500 mt-1 flex items-center gap-2">
                                    <Icon icon={calendarIcon} className="text-base-content/70" fontSize={15} />
                                    {item.details}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

const FlightFound = () => {
    const { control, handleSubmit } = useForm();
    const onSubmit = (data: any) => {
        console.log("Form submitted:", data);
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            {/* Flight Filters & Results */}
            <div className="grid grid-cols-12 gap-6">
                {/* Filters Section */}
                <div className="col-span-3">
                    <div className=" bg-white p-4 rounded-md shadow-md mb-4">
                        <h4 className="text-gray-700 font-medium text-center gap-2">
                            ⏳ 00:09:53
                        </h4>
                    </div>
                    <p className="text-sm text-center my-2">Book before the search expires!</p>
                    <div className="bg-white p-4 rounded-md shadow-md">
                        <h3 className="text-lg font-semibold mb-4">Filters</h3>
                        <div className="mb-2">
                            <FormLabel title={"Price Range"} htmlFor="priceRange" />
                            <FormSelect
                                control={control}
                                name="priceRange"
                                // instanceId="priceRange"
                                size="md"
                                id="priceRange"
                                className="w-full border-0 text-base"
                                options={countries.map((location) => ({
                                    label: location.title,
                                    value: location.id,
                                }))}
                                placeholder="Price Range"
                            />
                        </div>
                        <div className="mb-2">
                            <FormLabel title={"Stops"} htmlFor="stops" />
                            <FormSelect
                                control={control}
                                name="stops"
                                // instanceId="stops"
                                size="md"
                                id="stops"
                                className="w-full border-0 text-base"
                                options={countries.map((location) => ({
                                    label: location.title,
                                    value: location.id,
                                }))}
                                placeholder="Stops"
                            />
                        </div>
                        <div className="mb-2">
                            <FormLabel title={"Departure Time"} htmlFor="departureTime" />
                            <FormSelect
                                control={control}
                                name="departureTime"
                                // instanceId="departureTime"
                                size="md"
                                id="departureTime"
                                className="w-full border-0 text-base"
                                options={countries.map((location) => ({
                                    label: location.title,
                                    value: location.id,
                                }))}
                                placeholder="Departure Time"
                            />
                        </div>
                    </div>
                </div>

                {/* Flight Results */}
                <div className="col-span-9">
                    <Card className="bg-base-100/80 backdrop-blur-lg rounded-lg shadow-md mb-5">
                        <CardBody>
                            <div className="flex justify-between items-center">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-semibold text-lg mb-0">LHR</h3>
                                        <span>✈</span>
                                        <h3 className="font-semibold text-lg mb-0">ISL</h3>
                                        <span>|</span>
                                    </div>
                                    <span className="text-gray-500 text-sm">Round-Trip • 2 Travelers Mon • Economy</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button color="primary" variant="outline" size="md">
                                        <Icon icon={plus} className="text-primary" fontSize={22} />
                                        Add Commission
                                    </Button>

                                    <Button color="primary" size="md">
                                        <Icon icon={refreshCcw} className="text-white" fontSize={17} />
                                        Change Search
                                    </Button>

                                </div>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="bg-base-100/80 backdrop-blur-lg rounded-lg shadow-md mb-5">
                        <CardBody>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2 mb-2">
                                    <img src="" alt="img" />
                                    <div>
                                        <h3 className="font-semibold text-lg">Pakistan International Airlines</h3>
                                        <span className="text-gray-500">PK-233 • Mon, Jan 27, 2025</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div>
                                        <h3 className="font-semibold text-lg mb-0">LHR</h3>
                                        <span className="text-gray-500">02:15</span>
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-gray-500 text-md mb-0">1 hr 15 mins</h3>
                                        <span className="text-gray-500">----------✈----------</span>
                                        <h3 className="text-gray-500 text-md mb-0">Non-Stop</h3>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-0">ISL</h3>
                                        <span className="text-gray-500">02:15</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h1 className="bg-gray-300 w-fit px-3 py-1 rounded-md">PIAAPI</h1>
                                        <span>|</span>
                                        <Icon icon={calendarIcon} className="text-primary" fontSize={22} />
                                    </div>
                                    <Button color="secondary" variant="outline" className="border-0" size="md">
                                        <Icon icon={calendarIcon} className="text-secondary" fontSize={17} />
                                        View Detail
                                    </Button>
                                </div>
                            </div>
                            <div>
                                {[
                                    { label: "VALUE", baggage: "No Baggage", price: "PKR 205,021.8" },
                                    { label: "FLEXI", baggage: "Total 10.0 KGs (1 pc)", price: "PKR 205,021.8" },
                                    { label: "XTRA", baggage: "Total 20.0 KGs (1 pc)", price: "PKR 205,021.8" },
                                ].map((option, idx) => (
                                    <>
                                        <div className="grid grid-cols-12 items-center gap-6 border-t border-b py-2">
                                            <div className="col-span-4 border-r-2 pe-5">
                                                <div className="flex justify-between items-center">
                                                    <p className="font-medium">{option.label}</p>
                                                    <Icon icon={calendarIcon} className="text-primary" fontSize={22} />
                                                </div>
                                            </div>
                                            <div className="col-span-4">
                                                <div className="flex gap-2 justify-start">
                                                    <Icon icon={calendarIcon} className="text-primary" fontSize={22} />
                                                    <p className="font-medium">{option.baggage}</p>
                                                </div>
                                            </div>
                                            <div className="col-span-4">
                                                <div className="flex items-center justify-end gap-2">
                                                    <span className="font-semibold">{option.price}</span>
                                                    <Icon icon={info} className="text-primary" fontSize={22} />
                                                    <Button color="primary" className="py-1">Book Fare</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="bg-base-100/80 backdrop-blur-lg rounded-lg shadow-md mb-5">
                        <CardBody>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-2 mb-2">
                                    <img src="" alt="img" />
                                    <div>
                                        <h3 className="font-semibold text-lg">Airblue</h3>
                                        <span className="text-gray-500">PK-233 • Mon, Jan 27, 2025</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div>
                                        <h3 className="font-semibold text-lg mb-0">LHR</h3>
                                        <span className="text-gray-500">02:15</span>
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-gray-500 text-md mb-0">1 hr 15 mins</h3>
                                        <span className="text-gray-500">----------✈----------</span>
                                        <h3 className="text-gray-500 text-md mb-0">Non-Stop</h3>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-0">ISL</h3>
                                        <span className="text-gray-500">02:15</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h1 className="bg-gray-300 w-fit px-3 py-1 rounded-md">PIAAPI</h1>
                                        <span>|</span>
                                        <Icon icon={calendarIcon} className="text-primary" fontSize={22} />
                                    </div>
                                    <Button color="secondary" variant="outline" className="border-0" size="md">
                                        <Icon icon={calendarIcon} className="text-secondary" fontSize={17} />
                                        View Detail
                                    </Button>
                                </div>
                            </div>
                            <div>
                                {[
                                    { label: "VALUE", baggage: "No Baggage", price: "PKR 205,021.8" },
                                    { label: "FLEXI", baggage: "Total 10.0 KGs (1 pc)", price: "PKR 205,021.8" },
                                    { label: "XTRA", baggage: "Total 20.0 KGs (1 pc)", price: "PKR 205,021.8" },
                                ].map((option, idx) => (
                                    <>
                                        <div className="grid grid-cols-12 items-center gap-6 border-t border-b py-2">
                                            <div className="col-span-4 border-r-2 pe-5">
                                                <div className="flex justify-between items-center">
                                                    <p className="font-medium">{option.label}</p>
                                                    <Icon icon={calendarIcon} className="text-primary" fontSize={22} />
                                                </div>
                                            </div>
                                            <div className="col-span-4">
                                                <div className="flex gap-2 justify-start">
                                                    <Icon icon={calendarIcon} className="text-primary" fontSize={22} />
                                                    <p className="font-medium">{option.baggage}</p>
                                                </div>
                                            </div>
                                            <div className="col-span-4">
                                                <div className="flex items-center justify-end gap-2">
                                                    <span className="font-semibold">{option.price}</span>
                                                    <Icon icon={info} className="text-primary" fontSize={22} />
                                                    <Button color="primary" className="py-1">Book Fare</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))}
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div >
    );
};


const Page = () => {
    const [productToBeDelete, setProductToBeDelete] = useState(false);

    // const productDeleteConfirmationRef = useRef<HTMLDialogElement | null>(null);
    // const showDeleteProductConfirmation = () => {
    //     productDeleteConfirmationRef.current?.showModal();
    //     setProductToBeDelete();
    // };
    return (
        <div>
            <FlightCarousal />
            <FlightSearch />
            <RecentSearch />
            <FlightFound />
            <Modal backdrop >
                <form method="dialog">
                    <Button
                        size="sm"
                        color="ghost"
                        shape="circle"
                        className="absolute right-2 top-2"
                        aria-label="Close modal">
                        {/* <Icon icon={xIcon} className="h-4" /> */}
                    </Button>
                </form>
                <ModalHeader className="font-bold">Flight Search</ModalHeader>
                <ModalBody>
                    <FlightSearch />
                </ModalBody>
            </Modal>
        </div>
    );
};

export default Page;
