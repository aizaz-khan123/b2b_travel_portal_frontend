"use client";

import { Button, Card, CardBody, FormLabel, Modal, ModalBody, ModalHeader } from "@/components/daisyui";
import { FormRadio } from "@/components/forms";
import { Icon } from "@/components/Icon";
import calendarIcon from "@iconify/icons-lucide/calendar";
import Image from "next/image";
import { useForm } from "react-hook-form";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import MuiAutocomplete from "@/components/mui/MuiAutoComplete";
import MuiDatePicker from "@/components/mui/MuiDatePicker";
import MuiDateRangePicker from "@/components/mui/MuiDateRangePicker";
import { useFlightSearchMutation, useLazyLocationsLookupQuery } from "@/services/api";
import { debounce } from 'lodash';
import { Fragment, useCallback, useEffect, useState } from "react";
import { cabin_class } from "./Dropdownvalues";
import TravelersDropdown from "./TravelersDropdown";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setFlightData } from "@/redux/searchFlightSlice";

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
    origin: string | null;
    destination: string | null;
    departureDate: string;
};
type FormValues = {
    traveler_count: {
        adult_count: number;
        child_count: number;
        infant_count: number;
    };
    route_type: string;
    origin: string | null;
    destination: string | null;
    departure_date: string;
    return_date: string;
    cabin_class: string;
    traveler: string;
    legs: [
        { origin: string, destination: string, departure_date: string },
        { origin: string, destination: string, departure_date: string },
    ];
    // Include dynamic flight fields
    [key: string]: any; // Allows additional fields 
};


const FlightSearch = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [flightSearchTrigger, { data: flightSearchData, isLoading: flightSreachIsloading }] = useFlightSearchMutation();

    const [payloadValues, setPayloadValues] = useState('')

    const { control, handleSubmit, setValue, watch, setError } = useForm<FormValues>({
        defaultValues: {
            traveler_count: {
                adult_count: 1,
                child_count: 0,
                infant_count: 0,
            },
            route_type: "oneWay",
            origin: null,
            destination: null,
            departure_date: '',
            return_date: '',
            cabin_class: 'ECONOMY',
            traveler: '',
            legs: [
                { origin: "", destination: "", departure_date: "" },
                { origin: "", destination: "", departure_date: "" },
            ],
        },
    });
    const route_type = watch("route_type", "oneWay");

    const [flights, setFlights] = useState([
        {
            departure_date: "",
            destination: "",
            origin: ""
        },
        {
            departure_date: "",
            destination: "",
            origin: ""
        }

    ]);

    const [fromSearchStr, setFromSearchStr] = useState('');
    const [toSearchStr, setToSearchStr] = useState('');


    const [locationApiTrigger, { data: locationNames, isFetching, isSuccess }] = useLazyLocationsLookupQuery({})


    const handleFromSearchChange = (_: any, newValue: string) => {
        setFromSearchStr(newValue); // Keep typed value visible
        fromDelayedSearch(newValue); // Debounced API call
    };
    const fromDelayedSearch = useCallback(
        debounce((searchValue) => {
            if (searchValue) {
                locationApiTrigger({ query: searchValue });
            }
        }, 500),
        [locationApiTrigger]
    );

    const handleToSearchChange = (_: any, newValue: string) => {
        setToSearchStr(newValue); // Keep typed value visible
        toDelayedSearch(newValue); // Debounced API call
    };
    const toDelayedSearch = useCallback(
        debounce((searchValue) => {
            if (searchValue) {
                locationApiTrigger({ query: searchValue })
            }
        }, 500),
        [locationApiTrigger]
    );
    const [legsFromSearchStrs, setLegsFromSearchStrs] = useState<{ [key: number]: string }>({});
    const [legsToSearchStrs, setLegsToSearchStrs] = useState<{ [key: number]: string }>({});

    const legsFromDelayedSearch = useCallback(
        debounce((searchValue: string) => {
            if (searchValue) {
                locationApiTrigger({ query: searchValue });
            }
        }, 500),
        [locationApiTrigger]
    );

    const handleLegsFromSearchChange = (index: number, value: string) => {
        setLegsFromSearchStrs((prev) => ({
            ...prev,
            [index]: value, // Update only the current flight's search string
        }));
        legsFromDelayedSearch(value); // Pass 'value' instead of 'newValue'
    };

    const legsToDelayedSearch = useCallback(
        debounce((searchValue: string) => {
            if (searchValue) {
                locationApiTrigger({ query: searchValue });
            }
        }, 500),
        [locationApiTrigger]
    );

    const handleLegsToSearchChange = (index: number, value: string) => {
        setLegsToSearchStrs((prev) => ({
            ...prev,
            [index]: value, // Update only the current flight's search string
        }));
        legsToDelayedSearch(value); // Pass 'value' instead of 'newValue'
    };

    const swapLocations = () => {
        const origin = watch("origin");
        const destination = watch("destination");

        // Swap the values in the form
        setValue("origin", destination);
        setValue("destination", origin);

        // Swap the input search strings manually
        setFromSearchStr(toSearchStr);
        setToSearchStr(fromSearchStr);
    };
    const swapLegsLocations = (index: number) => {
        const currentOrigin = watch(`legs[${index}].origin`);
        const currentDestination = watch(`legs[${index}].destination`);

        // Swap the values in the form
        setValue(`legs[${index}].origin`, currentDestination);
        setValue(`legs[${index}].destination`, currentOrigin);

        // Swap the input search strings
        setLegsFromSearchStrs((prev) => ({
            ...prev,
            [index]: legsToSearchStrs[index] || "",
        }));
        setLegsToSearchStrs((prev) => ({
            ...prev,
            [index]: legsFromSearchStrs[index] || "",
        }));
    };
    const addFlight = () => {
        if (flights.length < 5) {
            setFlights([...flights, { origin: '', destination: '', departure_date: "" }]);
        }
    };

    const removeFlight = (index: number) => {
        setFlights((prevFlights) => prevFlights.filter((_, i) => i !== index));
    };

    const handleOriginChange = (value: string | null) => {
        if (value) {
            const match = value.match(/\(([^)]+)\)/); // Extract text inside parentheses
            const airportCode = match ? match[1] : value; // Get code if exists
            setValue("origin", airportCode);
        } else {
            console.log("Airport selection cleared");
        }
    };
    const handleDestinationChange = (value: string | null) => {
        if (value) {
            const match = value.match(/\(([^)]+)\)/); // Extract text inside parentheses
            const airportCode = match ? match[1] : value; // Get code if exists
            setValue("destination", airportCode);
        } else {
            console.log("Airport selection cleared");
        }
    };

    const handleMultiOriginChange = (index: number, value: string | null) => {
        if (value) {
            const match = value.match(/\(([^)]+)\)/); // Extract airport code
            const airportCode = match ? match[1] : value;
            setValue(`legs[${index}].origin`, airportCode);
        }
    };

    const handleMultiDestinationChange = (index: number, value: string | null) => {
        if (value) {
            const match = value.match(/\(([^)]+)\)/); // Extract airport code
            const airportCode = match ? match[1] : value;
            setValue(`legs[${index}].destination`, airportCode);

            // If there is a next flight, set its origin to the same value
            if (index < flights.length - 1) {
                setValue(`legs[${index + 1}].origin`, airportCode);
            }
        }
    };

    const setErrors = (errors: Record<string, any>) => {
        Object.entries(errors).forEach(([key, value]: any[]) =>
            setError(key, { message: value })
        );
    };

    const handleCityChange = (value: string | null) => {
        console.log("Selected City:", value);
    };

    const onSubmit = async (data: FormValues) => {
        let payload;
        if (route_type === "oneWay") {
            payload = {
                cabin_class: data.cabin_class,
                departure_date: data.departure_date,
                destination: data.destination,
                origin: data.origin,
                return_date: null,
                route_type: "ONEWAY",
                traveler_count: data.traveler_count,
            };
        } else if (route_type === "roundTrip") {
            payload = {
                cabin_class: data.cabin_class,
                departure_date: data.departure_date,
                destination: data.destination,
                origin: data.origin,
                return_date: data.return_date,
                route_type: "RoundTrip",
                traveler_count: data.traveler_count,
            };
        } else if (route_type === "multiCity") {
            payload = {
                cabin_class: data.cabin_class,
                route_type: "MULTICITY",
                legs: data.legs,
                traveler_count: data.traveler_count,
            };
        }
        // flightSearchTrigger(payload)
        console.log("Form submitted:", payload);
        // const queryString = new URLSearchParams(payload as any).toString();

        if (!payload) return; // Ensure payload is defined before proceeding

        const { traveler_count, legs, ...restPayload } = payload;
        const serializedLegs = legs
            ?.map((leg) => `${leg.origin},${leg.destination},${leg.departure_date}`)
            .join(",");

        const queryString = new URLSearchParams(
            Object.entries({
                ...restPayload, // Spread remaining payload properties
                ...(traveler_count || {}), // Spread traveler_count properties separately
                ...(legs ? { legs: serializedLegs } : {}), // Spread traveler_count properties separately
            }).reduce((acc, [key, value]) => {
                acc[key] = String(value); // Convert all values to strings
                return acc;
            }, {} as Record<string, string>)
        ).toString();
        setPayloadValues(queryString)
        router.push(`/flights/search/result?${queryString}`);
        // await flightSearchTrigger(payload).then(async (response: any) => {
        //     if ("error" in response) {
        //         setErrors(response.error.data.errors);
        //         return;
        //     }

        //     const flightSearchData = response.data.data;
        //     console.log('flightSearchData-------->', flightSearchData);

        //     if (response.data.code === 200) {
        //         console.log("✅ Dispatching flight data...");
        //         dispatch(setFlightData({ flightData: flightSearchData }));
        //         console.log("✅ Dispatched:", flightSearchData);

        //         router.push(`/flights/search/result?${payloadValues}`);
        //     }
        // });
    };

    useEffect(() => {
        if (isSuccess) {
            // router.push(`/flights/search/result?${payloadValues}`);
            // dispatch(setFlightData({ flightSearchData }))
        }
    }, [isSuccess]);



    return (
        <Card className="bg-base-100/80 backdrop-blur-lg rounded-lg shadow-md mb-5">
            <CardBody className="p-6">
                {/* <h2 className="text-xl font-semibold">Search Flights</h2> */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex items-center gap-4 mb-4">
                        {/* <span className="font-medium">Travel Type:</span> */}
                        {["oneWay", "roundTrip", "multiCity"].map((type) => (
                            <div key={type} className="flex items-center gap-1">
                                <FormRadio
                                    name="route_type"
                                    control={control}
                                    id={type}
                                    value={type}
                                    size="sm"
                                />
                                <FormLabel title={type.replace(/([A-Z])/g, " $1")} htmlFor={type} className="capitalize" />
                            </div>
                        ))}
                    </div>
                    {route_type !== "multiCity" ? (
                        <div className="grid grid-cols-12 gap-6 items-end">
                            <div className="relative col-span-3 mb-5">
                                <MuiAutocomplete
                                    control={control}
                                    name="origin"
                                    label="From"
                                    selectIcon={<img src="media/icons/from.svg" className="h-8" />}
                                    options={(locationNames?.data || []).map((location: any) => ({
                                        value: location.id,
                                        label: `${location.municipality} (${location.iata_code})`,
                                        subLabel: location.name,
                                        icon: <img src="media/icons/from.svg" className="h-7" />
                                    }))}
                                    onInputChange={handleFromSearchChange}
                                    inputValue={fromSearchStr}
                                    setInputValue={setFromSearchStr}
                                    onChange={handleOriginChange}
                                    selectLabelInsteadOfValue={true}
                                />
                                <div>
                                    <button
                                        onClick={swapLocations}
                                        type="button"
                                        className="absolute right-[-30px] bottom-2 p-2 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-300 z-10"
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
                            <div className="col-span-3 mb-5">
                                <MuiAutocomplete
                                    control={control}
                                    selectIcon={<img src="media/icons/going-to.svg" className="h-8" />}
                                    name="destination"
                                    label="To"
                                    options={(locationNames?.data || []).map((location: any) => ({
                                        value: location.id,
                                        label: `${location.municipality} (${location.iata_code})`,
                                        subLabel: location.name,
                                        icon: <img src="media/icons/going-to.svg" className="h-7" />
                                    }))}
                                    onInputChange={handleToSearchChange}
                                    inputValue={toSearchStr}
                                    setInputValue={setToSearchStr}
                                    onChange={handleDestinationChange}
                                    selectLabelInsteadOfValue={true}
                                />

                            </div>
                            <div className="col-span-6 mb-5">
                                {/* <MuiDateRangePicker
                                    control={control}
                                    name="return_date"
                                    startLabel="Departure Date"
                                    endLabel="Return Date"
                                    className="w-full"
                                    disableEndDate={route_type === "oneWay"}
                                /> */}
                                <MuiDateRangePicker
                                    control={control}
                                    startName="departure_date"
                                    endName="return_date"
                                    startLabel="Departure Date"
                                    endLabel="Return Date"
                                    className="w-full"
                                    disableEndDate={route_type === "oneWay"}
                                />

                            </div>

                        </div>
                    ) : (
                        <div>
                            <div className="grid grid-cols-12 gap-6 items-center">
                                {flights.map((flight, index) => (
                                    <Fragment key={index}>
                                        <div className="col-span-1">
                                            <p className="text-blue-500">Flight {index + 1}</p>
                                        </div>
                                        <div className="relative col-span-3 pt-[5px]">
                                            <MuiAutocomplete
                                                control={control}
                                                // name={`origin`}
                                                name={`legs[${index}].origin`}
                                                label="From"
                                                selectIcon={<img src="media/icons/from.svg" className="h-8" />}
                                                options={(locationNames?.data || []).map((location: any) => ({
                                                    value: location.id,
                                                    label: `${location.municipality} (${location.iata_code})`,
                                                    subLabel: location.name,
                                                    icon: <img src="media/icons/from.svg" className="h-7" />
                                                }))}
                                                onInputChange={(event, value) => handleLegsFromSearchChange(index, value)}
                                                inputValue={legsFromSearchStrs[index] || ""}
                                                setInputValue={(value) => handleLegsFromSearchChange(index, value)}
                                                // onChange={handleOriginChange}
                                                // onChange={(event: any, value: string | null) => handleMultiOriginChange(index, value)}
                                                onChange={(value: string | null) => handleMultiOriginChange(index, value)}


                                                selectLabelInsteadOfValue={true}
                                            />
                                            <div>
                                                <button
                                                    onClick={() => swapLegsLocations(index)}
                                                    type="button"
                                                    className="absolute right-[-30px] bottom-2 p-2 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-300 z-10"
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
                                            <MuiAutocomplete
                                                control={control}
                                                selectIcon={<img src="media/icons/going-to.svg" className="h-8" />}
                                                // name={`destination`}
                                                name={`legs[${index}].destination`}
                                                label="To"
                                                options={(locationNames?.data || []).map((location: any) => ({
                                                    value: location.id,
                                                    label: `${location.municipality} (${location.iata_code})`,
                                                    subLabel: location.name,
                                                    icon: <img src="media/icons/going-to.svg" className="h-7" />
                                                }))}
                                                onInputChange={(event, value) => handleLegsToSearchChange(index, value)}
                                                inputValue={legsToSearchStrs[index] || ""}
                                                setInputValue={(value) => handleLegsToSearchChange(index, value)}
                                                // onChange={handleDestinationChange}
                                                // onChange={(event: any, value: any) => handleMultiDestinationChange(index, value)}
                                                onChange={(value: string | null) => handleMultiDestinationChange(index, value)}


                                                selectLabelInsteadOfValue={true}
                                            />

                                        </div>
                                        <div className="col-span-3">
                                            <MuiDatePicker
                                                control={control}
                                                // name={`departure_date`}
                                                name={`legs[${index}].departure_date`}
                                                label="Departure Date"
                                                className="w-full"
                                            />
                                        </div>
                                        <div className="col-span-2">
                                            {index >= 2 && (
                                                <button
                                                    type="button"
                                                    onClick={() => removeFlight(index)}
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
                                <div className="mt-4 mb-5">
                                    <h2 onClick={addFlight} className="cursor-pointer text-blue-500 mt-2 underline">
                                        + Add Another Flight
                                    </h2>
                                </div>
                            }
                        </div>
                    )}
                    <div className="grid grid-cols-12 gap-4 items-center">
                        <div className="col-span-3">
                            <TravelersDropdown control={control} name="traveler_count" />
                        </div>
                        <div className="col-span-3">
                            <MuiAutocomplete
                                control={control}
                                name="cabin_class"
                                label="Cabin Class"
                                options={cabin_class.map((cabin) => ({
                                    value: cabin,
                                    label: `${cabin}`,
                                }))}
                            // onChange={handleCityChange}
                            />
                        </div>
                        <div className="col-span-2">
                            <Button color="primary" size="md" aria-label="Search Flights" className="px-5">
                                Search Flights
                            </Button>
                        </div>
                    </div>
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
