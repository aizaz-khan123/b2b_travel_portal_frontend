"use client";
import { Button, Card, CardBody, FormLabel, maskClassesFn } from "@/components/daisyui";
import { FormInput, FormRadio, FormSelect } from "@/components/forms";
import { Icon } from "@/components/Icon";
import calendarIcon from "@iconify/icons-lucide/calendar";
import searchIcon from "@iconify/icons-lucide/search";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import authImage from "@/assets/images/auth/auth-hero.png";

const countries = [
    {
        id: 1,
        title: "Pak",
    }, {
        id: 1,
        title: "Pak",
    }, {
        id: 1,
        title: "Pak",
    }, {
        id: 1,
        title: "Pak",
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
    // Initialize react-hook-form
    const { control, handleSubmit } = useForm();

    // Handle form submission
    const onSubmit = (data: any) => {
        console.log("Form submitted:", data);
    };

    return (
        <Card className="bg-base-100/80 backdrop-blur-lg rounded-lg shadow-md mb-5">
            <CardBody className="p-6">
                <div>
                    <h2 className="text-xl font-semibold mb-4">Search Flights</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Travel Type */}
                        <div className="flex items-center gap-4 mb-4">
                            <span className="font-medium">Travel Type:</span>
                            <div className="flex items-center gap-1">
                                <FormRadio name={"travelType"} control={control} id="oneWay" value="oneWay" size="sm" />
                                <FormLabel title="One Way" htmlFor="oneWay" />
                            </div>
                            <div className="flex items-center gap-1">
                                <FormRadio name={"travelType"} control={control} id="roundTrip" value="roundTrip" size="sm" />
                                <FormLabel title="Round Trip" htmlFor="roundTrip" />
                            </div>
                            <div className="flex items-center gap-1">
                                <FormRadio name={"travelType"} control={control} id="multiCity" value="multiCity" size="sm" />
                                <FormLabel title="Multi City" htmlFor="multiCity" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
                            <div>
                                <FormLabel title={"From"} htmlFor="from" />
                                <FormSelect
                                    // startIcon={<Icon icon={pencilIcon} className="text-base-content/70" fontSize={15} />}
                                    control={control}
                                    name="from"
                                    // instanceId="from"
                                    size="md"
                                    id="from"
                                    className="w-full border-0 text-base"
                                    options={countries.map((location) => ({
                                        label: location.title,
                                        value: location.id,
                                    }))}
                                    placeholder="Leaving from"
                                />
                            </div>
                            <div>
                                <FormLabel title={"To"} htmlFor="to" />
                                <FormSelect
                                    control={control}
                                    name="to"
                                    instanceId="to"
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
                            <div>
                                <FormLabel title={"Departure Date"} htmlFor="departureDate" />
                                <FormInput
                                    type="date"
                                    size="md"
                                    bordered={false}
                                    borderOffset={false}
                                    control={control}
                                    name="departureDate"
                                    id="departureDate"
                                    className="w-full focus:border-transparent focus:outline-0"
                                />
                            </div>
                            <div>
                                <FormLabel title={"Return Date"} htmlFor="returnDate" />
                                <FormInput
                                    type="date"
                                    size="md"
                                    bordered={false}
                                    borderOffset={false}
                                    control={control}
                                    name="returnDate"
                                    id="returnDate"
                                    className="w-full focus:border-transparent focus:outline-0"
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
                                <Button color="primary" size="md" aria-label="Search Flights" className="px-10">
                                    <Icon icon={searchIcon} className="text-base-content/70" fontSize={15} />
                                    Search Flights
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
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
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-semibold text-lg">Pakistan International Airlines</h3>
                                <span className="text-gray-500">PK-233 • Mon, Jan 27, 2025</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>LHR ✈ ISL</span>
                                <span>1 hr 15 mins • Non-Stop</span>
                                <span>30.0 KG (As per Airline Policy)</span>
                                <span className="font-semibold text-lg">PKR 108,634</span>
                                <Button color="primary">Book Fare</Button>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="bg-base-100/80 backdrop-blur-lg rounded-lg shadow-md mb-5">
                        <CardBody>
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-semibold text-lg">Airblue</h3>
                                <span className="text-gray-500">PA-216 • Mon, Jan 27, 2025</span>
                            </div>
                            <div className="flex flex-col space-y-2">
                                {[
                                    { label: "VALUE", baggage: "No Baggage", price: "PKR 205,021.8" },
                                    { label: "FLEXI", baggage: "Total 10.0 KGs (1 pc)", price: "PKR 205,021.8" },
                                    { label: "XTRA", baggage: "Total 20.0 KGs (1 pc)", price: "PKR 205,021.8" },
                                ].map((option, idx) => (
                                    <div key={idx} className="flex justify-between items-center p-2 border rounded-md">
                                        <span className="font-medium">{option.label}</span>
                                        <span className="text-gray-500">{option.baggage}</span>
                                        <span className="font-semibold">{option.price}</span>
                                        <Button color="primary">Book Fare</Button>
                                    </div>
                                ))}
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
};

const Page = () => {
    return (
        <div>
            <FlightCarousal />
            <FlightSearch />
            <RecentSearch />
            <FlightFound />
        </div>
    );
};

export default Page;
