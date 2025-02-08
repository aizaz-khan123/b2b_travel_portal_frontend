"use client";

import { Button, Card, CardBody, FormLabel, Modal, ModalBody, ModalHeader } from "@/components/daisyui";
import { FormRadio, FormSelect } from "@/components/forms";
import { Icon } from "@/components/Icon";
import calendarIcon from "@iconify/icons-lucide/calendar";
import info from "@iconify/icons-lucide/info";
import plus from "@iconify/icons-lucide/plus";
import refreshCcw from "@iconify/icons-lucide/refresh-ccw";
import Image from "next/image";
import { useForm } from "react-hook-form";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import MuiDropdown from "@/components/mui/MuiDropdown";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { Fragment, useState } from "react";
import MuiDatePicker from "@/components/mui/MuiDatePicker";
import MuiDateRangePicker from "@/components/mui/MuiDateRangePicker";
import TravelersDropdown from "./TravelersDropdown";

const airports = [
    { city: "Islamabad, Pakistan", code: "ISB", name: "Islamabad International Airport" },
    { city: "Lahore, Pakistan", code: "LHE", name: "Allama Iqbal International Airport" },
    { city: "Bahawalpur, Pakistan", code: "BHV", name: "Bahawalpur Airport" },
    { city: "Bannu, Pakistan", code: "BNP", name: "Bannu Airport" },
];


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
        // <Carousel autoPlay className="rounded-lg shadow-md mb-5">
        //     <div>
        //         <Image src='media/images/Airport illustration.svg'
        //             width={100}
        //             height={300}
        //             className="max-h-[400px] object-contain"
        //             alt="Auth Image" />
        //     </div>
        //     <div>
        //         <Image src={authImage}
        //             className="max-h-[400px] object-contain"
        //             alt="Auth Image" />
        //     </div>
        //     <div>
        //         <Image src={authImage}
        //             className="max-h-[400px] object-contain"
        //             alt="Auth Image" />
        //     </div>
        // </Carousel>
        <div>
            <Image src='media/images/Airport illustration.svg'
                width={100}
                height={300}
                className="w-full object-contain"
                alt="Auth Image" />
        </div>
    );
};

type Flight = {
    id: number;
    from: string | null;
    to: string | null;
    departureDate: string;
};
type FormValues = {
    travelers: {
        adults: number;
        children: number;
        infants: number;
    };
    travelType: string;
    from: string | null;
    to: string | null;
    dateRange: string;
    cabinClass: string;
    traveler: string;
    // Include dynamic flight fields
    [key: string]: any; // Allows additional fields
};


const FlightSearch = () => {
    // const { control, handleSubmit, setValue, watch } = useForm();
    const { control, handleSubmit, setValue, watch } = useForm<FormValues>({
        defaultValues: {
            travelers: {
                adults: 0,
                children: 0,
                infants: 0,
            },
            travelType: "oneWay",
            from: null,
            to: null,
            dateRange: '',
            cabinClass: '',
            traveler: '',
        },
    });

    const cities = [
        { city: "Karachi, Pakistan", code: "KHI", name: "Jinnah International Airport", icon: <FlightTakeoffIcon color="success" /> },
        { city: "Multan, Pakistan", code: "MUX", name: "Multan International Airport", icon: <FlightTakeoffIcon color="success" /> },
    ];
    const [flights, setFlights] = useState([
        { id: 1, from: null, to: null, departureDate: "" },
        { id: 2, from: null, to: null, departureDate: "" },
    ]);

    const swapLocations = () => {
        // const from = watch("from");
        // const to = watch("to");
        // setValue("from", to);
        // setValue("to", from);
    };

    const addFlight = () => {
        if (flights.length < 5) {
            setFlights([...flights, { id: Date.now(), from: null, to: null, departureDate: "" }]);
        }
    }; type Flight = {
        id: number;
        from: string | null;
        to: string | null;
        departureDate: string;
    };
    type FormValues = {
        travelers: {
            adults: number;
            children: number;
            infants: number;
        };
        travelType: string;
        from: string | null;
        to: string | null;
        dateRange: string;
        cabinClass: string;
        traveler: string;
        // Include dynamic flight fields
        [key: string]: any; // Allows additional fields
    };

    const flightKey = (flight: Flight) => `flight-${flight.id}`;

    const removeFlight = (id: any) => {
        setFlights(flights.filter((flight) => flight.id !== id));
    };
    const handleAirportChange = (value: string) => {
        console.log("Selected Airport:", value);
    };

    const handleCityChange = (value: string) => {
        console.log("Selected City:", value);
    };

    const onSubmit = (data: any) => {
        console.log("Form submitted:", data);
    };
    const travelType = watch("travelType", "oneWay");
    return (
        <Card className="bg-base-100/80 backdrop-blur-lg rounded-lg shadow-md mb-5">
            <CardBody className="p-6">
                <h2 className="text-xl font-semibold">Search Flights</h2>
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
                        <div className="grid grid-cols-12 gap-4 items-end">
                            <div className="relative col-span-3">
                                <MuiDropdown
                                    control={control}
                                    name="from"
                                    label="From"
                                    selectIcon={<img src="media/icons/from.svg" className="h-8" />}
                                    options={airports.map((city) => ({
                                        value: city.code,
                                        label: `${city.city} (${city.code})`,
                                        icon: <img src="media/icons/from.svg" className="h-7" />
                                    }))}
                                    onChange={handleAirportChange}
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
                            <div className="col-span-3">
                                <MuiDropdown
                                    control={control}
                                    selectIcon={<img src="media/icons/going-to.svg" className="h-8" />}
                                    name="to"
                                    label="To"
                                    options={cities.map((city) => ({
                                        value: city.code,
                                        label: `${city.city} (${city.code})`,
                                        icon: <img src="media/icons/going-to.svg" className="h-7" />
                                    }))}

                                    onChange={handleCityChange}
                                />

                            </div>
                            <div className="col-span-6">
                                <MuiDateRangePicker
                                    control={control}
                                    name="dateRange"
                                    startLabel="Departure Date"
                                    endLabel="Return Date"
                                    className="w-full"
                                />

                            </div>
                            <div className="col-span-3">
                                <TravelersDropdown control={control} name="travelers" />
                            </div>
                            <div className="col-span-3">
                                <MuiDropdown
                                    control={control}
                                    name="cabinClass"
                                    label="Cabin Class"
                                    options={cities.map((city) => ({
                                        value: city.code,
                                        label: `${city.city} (${city.code})`,
                                    }))}
                                    onChange={handleCityChange}
                                />
                            </div>
                            <div className="col-span-2">
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
                                            <p className="text-blue-500">Flight {index + 1}</p>
                                        </div>
                                        <div className="relative col-span-3 pt-[5px]">
                                            <MuiDropdown
                                                control={control}
                                                name={`from-${flight.id}`}
                                                label="From"
                                                selectIcon={<img src="media/icons/from.svg" className="h-8" />}
                                                options={airports.map((city) => ({
                                                    value: city.code,
                                                    label: `${city.city} (${city.code})`,
                                                    icon: <img src="media/icons/from.svg" className="h-7" />
                                                }))}
                                                onChange={handleAirportChange}
                                            />
                                            <button
                                                onClick={swapLocations}
                                                type="button"
                                                className="absolute right-[-30px] bottom-2 p-2 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-300"
                                            >
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M8 3 4 7l4 4" />
                                                    <path d="M4 7h16" />
                                                    <path d="m16 21 4-4-4-4" />
                                                    <path d="M20 17H4" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="col-span-3">
                                            <MuiDropdown
                                                control={control}
                                                selectIcon={<img src="media/icons/going-to.svg" className="h-8" />}
                                                name={`to-${flight.id}`}
                                                label="To"
                                                options={cities.map((city) => ({
                                                    value: city.code,
                                                    label: `${city.city} (${city.code})`,
                                                    icon: <img src="media/icons/going-to.svg" className="h-7" />
                                                }))}

                                                onChange={handleCityChange}
                                            />

                                        </div>
                                        <div className="col-span-3">
                                            <MuiDatePicker
                                                control={control}
                                                name={`departureDate-${flight.id}`}
                                                label="Departure Date"
                                                className="w-full"
                                            />
                                        </div>
                                        <div className="col-span-2">
                                            {index >= 2 && (
                                                <button
                                                    type="button"
                                                    onClick={() => removeFlight(flight.id)}
                                                    className="text-red-500 hover:text-red-700 cursor-pointer pt-1"
                                                >
                                                    ✖ Remove
                                                </button>
                                            )}
                                        </div>
                                    </Fragment>
                                ))}
                            </div>
                            {flights.length < 5 &&
                                <div className="mt-4">
                                    <h2 onClick={addFlight} className="cursor-pointer text-blue-500 mt-2 underline">
                                        + Add Another Flight
                                    </h2>
                                </div>
                            }
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end mt-5">
                                <div>
                                    <TravelersDropdown control={control} name="travelers" />
                                </div>
                                <div>
                                    <MuiDropdown
                                        control={control}
                                        name="cabinClass"
                                        label="Cabin Class"
                                        options={cities.map((city) => ({
                                            value: city.code,
                                            label: `${city.city} (${city.code})`,
                                        }))}
                                        onChange={handleCityChange}
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
                                className="border-2 border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
                            >
                                <div className="flex justify-between items-center">
                                    <div className="text-lg font-semibold text-primary flex items-center gap-2">
                                        {item.from}
                                        <img src="/media/icons/reverse-arrows.svg" alt="" />
                                        {/* <span className="text-gray-500">↔</span> */}
                                        {item.to}
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
                                    <img src="media/icons/view-detail-icon.svg" alt="" />
                                    {/* <Icon icon={calendarIcon} className="text-base-content/70" fontSize={15} /> */}
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
                <div className="col-span-12 md:col-span-3">
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
                <div className="col-span-12 md:col-span-9">
                    <Card className="bg-base-100/80 backdrop-blur-lg rounded-lg shadow-md mb-5">
                        <CardBody>
                            <div className="md:flex justify-between items-center">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-semibold text-lg mb-0">LHR</h3>
                                        <span>✈</span>
                                        <h3 className="font-semibold text-lg mb-0">ISL</h3>
                                        <span>|</span>
                                    </div>
                                    <span className="text-gray-500 text-sm">Round-Trip • 2 Travelers Mon • Economy</span>
                                </div>
                                <div className="flex flex-col md:flex-row items-center gap-2">
                                    <Button color="primary" variant="outline" size="md" className="font-bold text-base">
                                        <Icon icon={plus} className="text-primary" fontSize={22} />
                                        Add Commission
                                    </Button>

                                    <Button color="primary" size="md" className="font-bold text-base">
                                        <Icon icon={refreshCcw} className="text-white" fontSize={17} />
                                        Change Search
                                    </Button>

                                </div>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="bg-base-100/80 backdrop-blur-lg rounded-lg shadow-md mb-5">
                        <CardBody>
                            <div className="md:flex justify-between items-center">
                                <div className="flex items-center gap-2 mb-2">
                                    <img src="/media/icons/pia.svg" alt="img" />
                                    <div>
                                        <h3 className="font-semibold text-base md:h-4">Pakistan International Airlines</h3>
                                        <span className="text-gray-500 text-xs">PK-233 • Mon, Jan 27, 2025</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="text-center">
                                        <h3 className="font-semibold text-base mb-0 h-4">LHR</h3>
                                        <span className="text-gray-500 text-xs">02:15 AM</span>
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-gray text-xs mb-0">1 hr 15 mins</h3>
                                        <span className="text-gray-500 flex">---------- <img src="media/icons/plane.svg" alt="" /> ----------</span>
                                        <h3 className="text-gray text-xs mb-0">Non-Stop</h3>
                                    </div>
                                    <div className="text-center">
                                        <h3 className="font-semibold text-base mb-0 h-4">ISL</h3>
                                        <span className="text-gray-500 text-xs">02:15 AM</span>
                                    </div>
                                </div>
                                <div>
                                    {/* <div className="flex items-center justify-end gap-2">
                                        <h1 className="bg-gray-300 font-semibold w-fit px-3 py-1 rounded-md text-xs">PIAAPI</h1>
                                        <span>|</span>
                                        <img src="media/icons/detail-icon.svg" className="" alt="" />
                                    </div> */}
                                    <Button variant="outline" className="border-0 font-semibold text-sm hover:bg-transparent hover:text-gray px-0" size="md">
                                        <img src="media/icons/view-detail-icon.svg" alt="" />
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
                                        <div className="grid grid-cols-12 items-center gap-6 border-t border-b py-2 overflow-auto">
                                            <div className="col-span-4 border-r-2 pe-5">
                                                <div className="flex justify-between items-center">
                                                    <p className="font-normal text-sm text-gray">{option.label}</p>
                                                    <img src="media/icons/food-icon.svg" className="h-5" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-span-4">
                                                <div className="flex gap-2 justify-start">
                                                    <img src="media/icons/baggage-icon.svg" className="h-5" alt="" />
                                                    <p className="font-normal text-sm text-gray">{option.baggage}</p>
                                                </div>
                                            </div>
                                            <div className="col-span-4">
                                                <div className="flex items-center justify-end gap-2">
                                                    <span className="font-semibold text-base">{option.price}</span>
                                                    <Icon icon={info} className="text-gray" fontSize={22} />
                                                    <Button color="primary" variant="outline" className="py-1 bg-[#F5F7FF]">Book Fare</Button>
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
                                    <img src="/media/icons/air-blue.svg" alt="img" />
                                    <div>
                                        <h3 className="font-semibold text-base h-4">Airblue</h3>
                                        <span className="text-gray-500 text-xs">PK-233 • Mon, Jan 27, 2025</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="text-center">
                                        <h3 className="font-semibold text-base mb-0 h-4">LHR</h3>
                                        <span className="text-gray-500 text-xs">02:15 AM</span>
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-gray text-xs mb-0">1 hr 15 mins</h3>
                                        <span className="text-gray-500 flex">---------- <img src="media/icons/plane.svg" alt="" /> ----------</span>
                                        <h3 className="text-gray text-xs mb-0">Non-Stop</h3>
                                    </div>
                                    <div className="text-center">
                                        <h3 className="font-semibold text-base mb-0 h-4">ISL</h3>
                                        <span className="text-gray-500 text-xs">02:15 AM</span>
                                    </div>
                                </div>
                                <div>
                                    {/* <div className="flex items-center justify-end gap-2">
                                        <h1 className="bg-gray-300 font-semibold w-fit px-3 py-1 rounded-md text-xs">PIAAPI</h1>
                                        <span>|</span>
                                        <img src="media/icons/detail-icon.svg" className="" alt="" />
                                    </div> */}
                                    <Button variant="outline" className="border-0 font-semibold text-sm hover:bg-transparent hover:text-gray px-0" size="md">
                                        <img src="media/icons/view-detail-icon.svg" alt="" />
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
                                                    <p className="font-normal text-sm text-gray">{option.label}</p>
                                                    <img src="media/icons/food-icon.svg" className="h-5" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-span-4">
                                                <div className="flex gap-2 justify-start">
                                                    <img src="media/icons/baggage-icon.svg" className="h-5" alt="" />
                                                    <p className="font-normal text-sm text-gray">{option.baggage}</p>
                                                </div>
                                            </div>
                                            <div className="col-span-4">
                                                <div className="flex items-center justify-end gap-2">
                                                    <span className="font-semibold text-base">{option.price}</span>
                                                    <Icon icon={info} className="text-gray" fontSize={22} />
                                                    <Button color="primary" variant="outline" className="py-1 bg-[#F5F7FF]">Book Fare</Button>
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
