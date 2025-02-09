"use client"
import { Accordion, AccordionContent, AccordionTitle, Button, Card, CardBody, CardTitle, Table, TableBody, TableHead, TableRow, Timeline, TimelineEnd, TimelineItem, TimelineMiddle, TimelineStart } from "@/components/daisyui";
import { useParams } from "next/navigation";
import React from "react";

const fareDetails = [
    { label: "Base Fare", amount: "PKR 88,358.41" },
    { label: "Tax", amount: "PKR 88,358.41" },
    { label: "Processing Fee", amount: "PKR 88,358.41" }
];
const FlightTimeline = () => {
    return (
        <Card className="bg-base-100 mb-5 border-2 border-gray-200 rounded-xl">
            <CardTitle className="bg-blue-50 p-2 rounded-t-lg text-center font-semibold w-full justify-center text-base"> Monday, January 27, 2025</CardTitle>
            <CardBody>
                <div className="flex gap-2 items-center justify-center">
                    <div className="flex items-center gap-2 mb-2">
                        <img src="/media/icons/pia.svg" alt="img" />
                        <div>
                            <h3 className="font-semibold text-base h-6">PIA</h3>
                            <span className="text-gray-500 text-xs">PK-233</span>
                        </div>
                    </div>
                    <Timeline vertical={true}>
                        <TimelineItem connect="end" className="grid grid-cols-[unset]">
                            <TimelineStart className="font-bold text-sm">02:15 AM</TimelineStart>
                            <TimelineMiddle />
                            <TimelineEnd className="border-0 shadow-none">
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <img src="/media/icons/from.svg" className="h-7" />
                                        <p className="font-semibold">Lahore / <span className="text-sm text-gray-500">Lahore International Airport</span>
                                        </p>
                                    </div>
                                    <p className="text-gray text-sm font-medium">1 hr 15 mins</p>
                                </div>
                            </TimelineEnd>
                        </TimelineItem>
                        <TimelineItem connect="start" className="grid grid-cols-[unset]">
                            <TimelineStart className="font-bold text-sm">02:15 AM</TimelineStart>
                            <TimelineMiddle />
                            <TimelineEnd className="border-0 shadow-none">
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <img src="/media/icons/from.svg" className="h-7" />
                                        <p className="font-semibold">Lahore / <span className="text-sm text-gray-500">Lahore International Airport</span>
                                        </p>
                                    </div>
                                    <p className="text-gray text-sm font-medium">1 hr 15 mins</p>
                                </div>
                            </TimelineEnd>
                        </TimelineItem>
                    </Timeline>
                </div>
                {/* <div className="flex gap-32 items-center justify-center">
                    <div className="flex items-center gap-2 mb-2">
                        <img src="/media/icons/pia.svg" alt="img" />
                        <div>
                            <h3 className="font-semibold text-base h-6">PIA</h3>
                            <span className="text-gray-500 text-xs">PK-233</span>
                        </div>
                    </div>
                    <ol className="relative border-l-4 border-indigo-600 flex flex-col gap-10">
                        <li className="ml-6 w-[400px]">
                            <div
                                className="absolute w-4 h-4 bg-white border-4 border-indigo-600 rounded-full -left-[0.6rem]"
                            ></div>
                            <p className="absolute -left-[5.5rem] p-0 mt-3 font-bold">02:15 AM</p>
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <img src="/media/icons/from.svg" className="h-7" />
                                    <p className="font-semibold">Lahore / <span className="text-sm text-gray-500">Lahore International Airport</span>
                                    </p>
                                </div>
                                <p className="text-gray text-sm font-medium">1 hr 15 mins</p>
                            </div>

                        </li>
                        <li className="ml-6 w-[400px]">
                            <p className="absolute -left-[5.5rem] p-0 mt-3 font-bold">02:15 AM</p>
                            <div>
                                <div className="flex items-center gap-2 mb-3">
                                    <img src="/media/icons/from.svg" className="h-7" />
                                    <p className="font-semibold">Lahore / <span className="text-sm text-gray-500">Lahore International Airport</span>
                                    </p>
                                </div>
                                <p className="text-gray text-sm font-medium">1 hr 15 mins</p>
                            </div>
                            <div
                                className="absolute w-4 h-4 bg-white border-4 border-indigo-600 rounded-full -left-[0.6rem]"
                            ></div>
                        </li>
                    </ol>
                </div> */}
            </CardBody>
        </Card>
    );
};

const BookingDetail = () => {
    const { id } = useParams();
    return (
        <>
            <div className="grid grid-cols-12 gap-3">
                <div className="col-span-9">
                    <div>
                        {/* Booking Header */}
                        <Card className="bg-base-100 mb-5">
                            <CardBody>
                                <div className="flex justify-between items-cente">
                                    <div>
                                        <p className="text-gray-600">Booking ID:</p>
                                        <h2 className="text-lg font-semibold">W3T6AFHTQLN</h2>
                                    </div>
                                    <Button color="primary" className="text-base font-semibold">Confirmed</Button>

                                    {/* <span className="bg-blue-500 text-white px-4 py-2 rounded-lg">Confirmed</span> */}
                                </div>
                            </CardBody>
                        </Card>


                        {/* Flight Details */}
                        <Card className="bg-base-100 mb-5">
                            <CardBody>
                                <CardTitle><h2 className="font-semibold text-lg">Flight Details</h2></CardTitle>
                                <div className="mt-1 space-y-1">
                                    <Accordion className="bg-base-200" icon="arrow">
                                        <AccordionTitle className="text-xl font-medium">
                                            <div className="md:flex justify-between items-center">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <img src="/media/icons/from.svg" className="h-7" />
                                                    <div>
                                                        <h3 className="font-semibold text-base md:h-4">1st Flight</h3>
                                                        <span className="text-gray-500 text-xs">Mon, Jan 27, 2025</span>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <img src="/media/icons/pia.svg" alt="img" />
                                                        <div>
                                                            <h3 className="font-semibold text-base h-6">PIA</h3>
                                                            <span className="text-gray-500 text-xs">PK-233</span>
                                                        </div>
                                                    </div>
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

                                                </div>
                                            </div>
                                        </AccordionTitle>
                                        <AccordionContent>
                                            <FlightTimeline />
                                            <h1 className="text-primary text-base font-semibold text-center mb-5">Layover: 1 D17h 25m at Sharjah International Airport</h1>
                                            <FlightTimeline />
                                        </AccordionContent>
                                    </Accordion>

                                </div>
                            </CardBody>
                        </Card>

                        {/* Passenger Details */}
                        <Card className="bg-base-100 mb-5">
                            <CardBody>
                                <CardTitle><h2 className="font-semibold text-lg">Passenger Details</h2></CardTitle>
                                <div className="mt-1 space-y-1">
                                    <Table className="mt-2 border rounded-lg">
                                        <TableHead className="bg-gray-200">
                                            <span className="text-sm font-semibold text-gray">Passenger</span>
                                            <span className="text-sm font-semibold text-gray">Passport No.</span>
                                            <span className="text-sm font-semibold text-gray">Passport Expiry</span>
                                            <span className="text-sm font-semibold text-gray">Type</span>
                                        </TableHead>

                                        <TableBody>
                                            <TableRow className="hover:bg-base-200/40 text-base font-semibold text-gray-800">
                                                <td className="p-1">Mr. Zahoor Khan</td>
                                                <td className="p-1">AC4101026</td>
                                                <td className="p-1">1/29/2029</td>
                                                <td className="p-1">Adult</td>
                                            </TableRow>
                                            <TableRow className="hover:bg-base-200/40 text-base font-semibold text-gray-800">
                                                <td className="p-1">Mr. Zahoor Khan</td>
                                                <td className="p-1">AC4101026</td>
                                                <td className="p-1">1/29/2029</td>
                                                <td className="p-1">Adult</td>
                                            </TableRow>
                                            <TableRow className="hover:bg-base-200/40 text-base font-semibold text-gray-800">
                                                <td className="p-1">Mr. Zahoor Khan</td>
                                                <td className="p-1">AC4101026</td>
                                                <td className="p-1">1/29/2029</td>
                                                <td className="p-1">Adult</td>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </div>
                            </CardBody>
                        </Card>
                        {/* Additional Services */}
                        <Card className="bg-base-100 mb-5">
                            <CardBody>
                                <CardTitle><h2 className="font-semibold text-lg">Additional Services on 1st Flight</h2></CardTitle>
                                <div className="mt-1 space-y-2">
                                    <div className="border flex gap-2 items-center p-2 rounded max-w-80">
                                        <img src="/media/icons/food-icon.svg" alt="img" />
                                        <p className="text-gray-800 text-base font-semibold">No Meal Included</p>
                                    </div>
                                    <div className="border flex gap-2 items-center p-2 rounded max-w-80">
                                        <img src="/media/icons/baggage-icon.svg" alt="img" />
                                        <p className="text-gray-800 text-base font-semibold">Included Luggage: Total 20.0 KG (1 pc)</p>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </div>
                </div>
                <div className="col-span-3">
                    <Card className="bg-base-100 mb-5">
                        <CardBody>
                            <div className="text-center">
                                <p className="text-lg font-semibold text-gray-800">PNR: <span>620012382</span></p>
                                <p className="text-sm text-red-500 font-medium">Expired</p>
                            </div>
                        </CardBody>
                    </Card>
                    {/* Pricing Details */}
                    <Card className="bg-base-100 mb-5">
                        <CardBody>
                            <CardTitle><h2 className="font-semibold text-lg">Pricing Details</h2></CardTitle>
                            <div>
                                <div className="flex justify-between border-b pb-2">
                                    <p>PIA (Adult) x 2:</p>
                                    <p className="font-semibold">PKR 18,963.11</p>
                                </div>
                                <div className="flex justify-between border-b pb-2">
                                    <p>PIA (Child) x 1:</p>
                                    <p className="font-semibold">PKR 16,507.05</p>
                                </div>
                                <div className="flex justify-between border-b pb-2">
                                    <p>PIA (Infant) x 1:</p>
                                    <p className="font-semibold">PKR 2,356.24</p>
                                </div>
                                <div className="flex justify-between mt-4">
                                    <h4 className="font-semibold">Total to Pay:</h4>
                                    <h4 className="text-blue-600 font-bold">PKR 56,788.52</h4>
                                </div>
                            </div>

                            <Accordion className="p-0" icon="arrow">
                                <AccordionTitle className="text-lg font-semibold px-0">
                                    Fair Breakdown
                                </AccordionTitle>
                                <AccordionContent className="p-0">
                                    <div className="mb-5 border p-2 rounded-md">
                                        <CardTitle className="px-0"><h2 className="font-semibold text-lg py-3">Adult</h2></CardTitle>
                                        <hr className="mb-2 mt-0" />
                                        <div>
                                            <div className="flex justify-between items-center mb-1">
                                                <p className="text-gray-800 text-sm font-semibold">Base Fare:</p>
                                                <p className="text-gray text-sm font-semibold text-end">PKR 88,358.41</p>
                                            </div>
                                            <div className="flex justify-between items-center mb-1">
                                                <p className="text-gray-800 text-sm font-semibold">Tax:</p>
                                                <p className="text-gray text-sm font-semibold text-end">PKR 88,358.41</p>
                                            </div>
                                            <div className="flex justify-between items-center mb-1">
                                                <p className="text-gray-800 text-sm font-semibold">Processing Fee:</p>
                                                <p className="text-gray text-sm font-semibold text-end">PKR 88,358.41</p>
                                            </div>
                                            <hr className="border mt-3" />
                                            <div className="flex justify-between mt-4">
                                                <h4 className="font-semibold text-lg">Total to Pay:</h4>
                                                <h4 className="text-blue-600 font-bold text-lg">PKR 56,788.52</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-5 border p-2 rounded-md">
                                        <CardTitle><h2 className="font-semibold text-lg py-3">Child</h2></CardTitle>
                                        <hr className="mb-2 mt-0" />
                                        <div>
                                            <div className="flex justify-between items-center mb-1">
                                                <p className="text-gray-800 text-sm font-semibold">Base Fare:</p>
                                                <p className="text-gray text-sm font-semibold text-end">PKR 88,358.41</p>
                                            </div>
                                            <div className="flex justify-between items-center mb-1">
                                                <p className="text-gray-800 text-sm font-semibold">Tax:</p>
                                                <p className="text-gray text-sm font-semibold text-end">PKR 88,358.41</p>
                                            </div>
                                            <div className="flex justify-between items-center mb-1">
                                                <p className="text-gray-800 text-sm font-semibold">Processing Fee:</p>
                                                <p className="text-gray text-sm font-semibold text-end">PKR 88,358.41</p>
                                            </div>
                                            <hr className="border mt-3" />
                                            <div className="flex justify-between mt-4">
                                                <h4 className="font-semibold text-lg">Total to Pay:</h4>
                                                <h4 className="text-blue-600 font-bold text-lg">PKR 56,788.52</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-5 border p-2 rounded-md">
                                        <CardTitle className="px-0"><h2 className="font-semibold text-lg py-3">Infant</h2></CardTitle>
                                        <hr className="mb-2 mt-0" />
                                        <div>
                                            <div className="flex justify-between items-center mb-1">
                                                <p className="text-gray-800 text-sm font-semibold">Base Fare:</p>
                                                <p className="text-gray text-sm font-semibold text-end">PKR 88,358.41</p>
                                            </div>
                                            <div className="flex justify-between items-center mb-1">
                                                <p className="text-gray-800 text-sm font-semibold">Tax:</p>
                                                <p className="text-gray text-sm font-semibold text-end">PKR 88,358.41</p>
                                            </div>
                                            <div className="flex justify-between items-center mb-1">
                                                <p className="text-gray-800 text-sm font-semibold">Processing Fee:</p>
                                                <p className="text-gray text-sm font-semibold text-end">PKR 88,358.41</p>
                                            </div>
                                            <hr className="border mt-3" />
                                            <div className="flex justify-between mt-4">
                                                <h4 className="font-semibold text-lg">Total to Pay:</h4>
                                                <h4 className="text-blue-600 font-bold text-lg">PKR 56,788.52</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex justify-center">
                                        <img src="/media/images/study-abroad.svg" alt="img" />
                                    </div>
                                </AccordionContent>
                            </Accordion>
                        </CardBody>
                    </Card>
                </div>
            </div>

        </>
    );
};

export default BookingDetail;
