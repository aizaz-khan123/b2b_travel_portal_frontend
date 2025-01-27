"use client";
import { Button, Card, CardBody, FormLabel } from "@/components/daisyui";
import { Icon } from "@/components/Icon";
import React from "react";
import pencilIcon from "@iconify/icons-lucide/pencil";
import searchIcon from "@iconify/icons-lucide/search";

import { FormInput, FormRadio, FormSelect } from "@/components/forms";
import { useForm } from "react-hook-form";

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

const FlightSearch = () => {
    // Initialize react-hook-form
    const { control, handleSubmit } = useForm();

    // Handle form submission
    const onSubmit = (data: any) => {
        console.log("Form submitted:", data);
    };

    return (
        <Card className="bg-base-100/80 backdrop-blur-lg rounded-lg shadow-md">
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
                            <div className="ml-6 flex items-center gap-1">
                                <FormRadio name={"travelType"} control={control} id="roundTrip" value="roundTrip" />
                                <FormLabel title="Round Trip" htmlFor="roundTrip" />
                            </div>
                            <div className="ml-6 flex items-center gap-1">
                                <FormRadio name={"travelType"} control={control} id="multiCity" value="multiCity" />
                                <FormLabel title="Multi City" htmlFor="multiCity" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 items-end">
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
        <Card className="bg-base-100/80 backdrop-blur-lg rounded-lg shadow-md mt-5">
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
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        className="w-5 h-5 text-gray-400"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M8.25 15.75a6.75 6.75 0 1113.5 0v.75h-13.5v-.75zm-2 4.5h13.5m-13.5 0a3 3 0 013-3h7.5a3 3 0 013 3m-13.5 0v1.5h13.5v-1.5"
                                        />
                                    </svg>
                                    {item.date}
                                </div>
                                <div className="text-sm text-gray-600 mt-1">{item.details}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </CardBody>
        </Card>
    );
};

const Page = () => {
    return (
        <div>
            <FlightSearch />
            <RecentSearch />
        </div>
    );
};

export default Page;
