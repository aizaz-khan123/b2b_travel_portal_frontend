"use client";

import { Button, Card, CardBody, FormLabel } from "@/components/daisyui";
import { FormSelect } from "@/components/forms";
import { Icon } from "@/components/Icon";
import info from "@iconify/icons-lucide/info";
import plus from "@iconify/icons-lucide/plus";
import refreshCcw from "@iconify/icons-lucide/refresh-ccw";
import { useForm } from "react-hook-form";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
import { useFlightSearchMutation } from "@/services/api";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import dayjs from "dayjs";

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
const FlightFound = () => {
    const [flightSearchTrigger, { data: flightSearchData, isLoading: flightSreachIsloading }] = useFlightSearchMutation();
    const searchParams = useSearchParams();
    const flightSearchDataResponse = flightSearchData;

    const cabin_class = searchParams.get("cabin_class");
    const departure_date = searchParams.get("departure_date");
    const destination = searchParams.get("destination");
    const origin = searchParams.get("origin");
    const return_date = searchParams.get("return_date");
    const route_type = searchParams.get("route_type");
    const adult_count = searchParams.get("adult_count");
    const child_count = searchParams.get("child_count");
    const infant_count = searchParams.get("infant_count");
    const legsParam = searchParams.get("legs");
    const legs = legsParam
        ?.split(",") // Split into individual legs
        .reduce((acc, value, index, array) => {
            if (index % 3 === 0) {
                // Every 3 values represent a leg: origin, destination, departure_date
                acc.push({
                    origin: array[index],
                    destination: array[index + 1],
                    departure_date: array[index + 2],
                });
            }
            return acc;
        }, [] as { origin: string; destination: string; departure_date: string }[]);

    console.log('legs', legs);

    const { control, handleSubmit } = useForm();
    const onSubmit = (data: any) => {
        console.log("Form submitted:", data);
    };

    const searchApiPayload = async () => {
        if (!cabin_class || !route_type) {
            return; // Avoid triggering API call if any required param is missing
        }

        let payload;
        if (route_type === "ONEWAY") {
            payload = {
                cabin_class,
                departure_date,
                destination,
                origin,
                return_date: null,
                route_type: "ONEWAY",
                traveler_count: {
                    adult_count,
                    child_count,
                    infant_count,
                },
            };
        } else if (route_type === "RoundTrip") {
            payload = {
                cabin_class,
                departure_date,
                destination,
                origin,
                return_date,
                route_type: "RoundTrip",
                traveler_count: {
                    adult_count,
                    child_count,
                    infant_count,
                },
            };
        } else if (route_type === "MULTICITY") {
            payload = {
                cabin_class,
                route_type: "MULTICITY",
                legs: legs,
                traveler_count: {
                    adult_count,
                    child_count,
                    infant_count,
                },
            };
        }

        console.log("Triggering API with payload:", payload);
        flightSearchTrigger(payload);
    }

    useEffect(() => {
        searchApiPayload()
    }, [])


    // useEffect(() => {
    //     if (!cabin_class || !route_type) {
    //         return; // Avoid triggering API call if any required param is missing
    //     }

    //     let payload;
    //     if (route_type === "ONEWAY") {
    //         payload = {
    //             cabin_class,
    //             departure_date,
    //             destination,
    //             origin,
    //             return_date: null,
    //             route_type: "ONEWAY",
    //             traveler_count: {
    //                 adult_count,
    //                 child_count,
    //                 infant_count,
    //             },
    //         };
    //     } else if (route_type === "RoundTrip") {
    //         payload = {
    //             cabin_class,
    //             departure_date,
    //             destination,
    //             origin,
    //             return_date,
    //             route_type: "RoundTrip",
    //             traveler_count: {
    //                 adult_count,
    //                 child_count,
    //                 infant_count,
    //             },
    //         };
    //     } else if (route_type === "MULTICITY") {
    //         payload = {
    //             cabin_class,
    //             route_type: "MULTICITY",
    //             legs: legs,
    //             traveler_count: {
    //                 adult_count,
    //                 child_count,
    //                 infant_count,
    //             },
    //         };
    //     }

    //     console.log("Triggering API with payload:", payload);
    //     flightSearchTrigger(payload);
    // }, [
    //     cabin_class,
    //     departure_date,
    //     destination,
    //     origin,
    //     return_date,
    //     route_type,
    //     adult_count,
    //     child_count,
    //     infant_count,
    //     // legs
    // ]);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            {/* <div>
                <h1>Flight Search Results</h1>
                <p>Cabin Class: {cabin_class}</p>
                <p>Departure Date: {departure_date}</p>
                <p>Destination: {destination}</p>
                <p>Origin: {origin}</p>
                <p>Return Date: {return_date}</p>
                <p>Route Type: {route_type}</p>
                <p>Adults: {adult_count}</p>
                <p>Children: {child_count}</p>
                <p>Infants: {infant_count}</p>
            </div> */}
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
                    {flightSearchDataResponse?.data?.map((data: any, index: any) => (
                        <>
                            {data?.faresGroup?.map((faresGroupData: any, faresGroupIndex: any) => (
                                <>
                                    {data?.searchAvailibilty.map((searchAvailibiltyData: any, searchAvailibiltyIndex: any) => (
                                        <>
                                            {searchAvailibiltyData?.segments.map((segmentsData: any, segmentsIndex: any) => (
                                                <Card className="bg-base-100/80 backdrop-blur-lg rounded-lg shadow-md mb-5">
                                                    <CardBody>
                                                        <div className="md:flex justify-between items-center">
                                                            <div className="flex items-center gap-2 mb-2">
                                                                <img src="/media/icons/pia.svg" alt="img" />
                                                                <div>
                                                                    <h3 className="font-semibold text-base md:h-4">{segmentsData?.flightSegment?.airline?.companyFullName}</h3>
                                                                    <span className="text-gray-500 text-xs">{segmentsData?.OperatingAirline?.Code}-{segmentsData?.OperatingAirline?.FlightNumber} • Mon, Jan 27, 2025</span>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <div className="text-center">
                                                                    <h3 className="font-semibold text-base mb-0 h-4">{segmentsData?.Departure?.LocationCode}</h3>
                                                                    <span className="text-gray-500 text-xs">{dayjs(segmentsData.Departure.DepartureDateTime).format("hh:mm A")}</span>
                                                                </div>
                                                                <div className="text-center">
                                                                    <h3 className="text-gray text-xs mb-0">{searchAvailibiltyData?.TotalDuration}</h3>
                                                                    <span className="text-gray-500 flex">---------- <img src="media/icons/plane.svg" alt="" /> ----------</span>
                                                                    <h3 className="text-gray text-xs mb-0">Non-Stop</h3>
                                                                </div>
                                                                <div className="text-center">
                                                                    <h3 className="font-semibold text-base mb-0 h-4">{segmentsData?.Arrival?.LocationCode}</h3>
                                                                    <span className="text-gray-500 text-xs">{dayjs(segmentsData?.Arrival?.ArrivalDateTime).format("hh:mm A")}</span>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                {/* <div className="flex items-center justify-end gap-2">
                                        <h1 className="bg-gray-300 font-semibold w-fit px-3 py-1 rounded-md text-xs">PIAAPI</h1>
                                        <span>|</span>
                                        <img src="media/icons/detail-icon.svg" className="" alt="" />
                                    </div> */}
                                                                <Link href={`/flights/1`}>
                                                                    <Button variant="outline" className="border-0 font-semibold text-sm hover:bg-transparent hover:text-gray px-0" size="md">
                                                                        <img src="media/icons/view-detail-icon.svg" alt="" />
                                                                        View Detail
                                                                    </Button>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        {faresGroupData?.bagageAndFareGroupInformation?.map((bagageAndFareData: any, segmentsIndex: any) => (
                                                            <div>
                                                                <div className="grid grid-cols-12 items-center gap-6 border-t border-b py-2 overflow-auto">
                                                                    <div className="col-span-4 border-r-2 pe-5">
                                                                        <div className="flex justify-between items-center">
                                                                            <p className="font-normal text-sm text-gray">{bagageAndFareData?.fareGroupName}</p>
                                                                            <img src="media/icons/food-icon.svg" className="h-5" alt="" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-span-4">
                                                                        <div className="flex gap-2 justify-start">
                                                                            <img src="media/icons/baggage-icon.svg" className="h-5" alt="" />
                                                                            <p className="font-normal text-sm text-gray">baggage</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-span-4">
                                                                        <div className="flex items-center justify-end gap-2">
                                                                            <span className="font-semibold text-base">price</span>
                                                                            <Icon icon={info} className="text-gray" fontSize={22} />
                                                                            {/* <Dropdown horizontal={"left"} vertical={"bottom"}>
                                                        <DropdownToggle button={false} className="btn btn-circle btn-ghost btn-xs">
                                                        <Icon icon={info} className="text-gray" fontSize={22} /> 
                                                        </DropdownToggle>
                                                        <DropdownMenu className="card compact w-64 rounded-box bg-base-100 !p-0 shadow">
                                                            <CardBody>
                                                                <CardTitle tag={"h2"}>You needed more info?</CardTitle>
                                                                <p>Here is a description!</p>
                                                            </CardBody>
                                                        </DropdownMenu>
                                                    </Dropdown> */}
                                                                            <Link href="/flights/booking">
                                                                                <Button color="primary" variant="outline" size="sm" className="bg-[#F5F7FF]">Book Fare</Button>
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </CardBody>
                                                </Card>
                                            ))}
                                        </>
                                    ))}
                                </>
                            ))}
                        </>
                    ))}
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
                                                    <Button color="primary" variant="outline" size="sm" className="bg-[#F5F7FF]">Book Fare</Button>
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

const page = () => {
    return (
        <>
            <FlightFound />
        </>
    )
}

export default page