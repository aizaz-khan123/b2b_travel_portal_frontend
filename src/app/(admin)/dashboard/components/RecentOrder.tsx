"use client";

import downloadIcon from "@iconify/icons-lucide/download";

import Image from "next/image";
import { useMemo } from "react";

import { Icon } from "@/components/Icon";
import {
    Button,
    Card,
    CardBody,
    Checkbox,
    Table,
    TableBody,
    TableHead,
    TableRow,
    maskClassesFn,
} from "@/components/daisyui";
import { cn, currencyHelper, dateHelper } from "@/helpers";
import { IEcommerceDashboardOrder } from "@/types/dashboards/ecommerce";

import { useEcommerceDashboard } from "../use-ecommerce-dashboard";

const OrderRow = ({ order }: { order: IEcommerceDashboardOrder }) => {
    const { orderTableSelected, onOrderTableSelection } = useEcommerceDashboard();
    const checked = useMemo(() => orderTableSelected.includes(order.id), [orderTableSelected]);

    return (
        <TableRow className="cursor-pointer" onClick={() => onOrderTableSelection(order.id)}>
            <div className="flex items-center space-x-3 truncate">
                <p className="line-clamp-2 font-medium">{order.name}</p>
            </div>
            <div>
                <div className="font-medium">
                    {currencyHelper.sign}
                    {order.amount}
                </div>
            </div>
            <div className="font-medium">{dateHelper.formatted(order.date)}</div>
            <div className="font-medium">{dateHelper.formatted(order.date)}</div>
            <div className="font-medium">{dateHelper.formatted(order.date)}</div>
            <div className="font-medium">{dateHelper.formatted(order.date)}</div>
            <div className="font-medium">{dateHelper.formatted(order.date)}</div>
            <div className="font-medium">{dateHelper.formatted(order.date)}</div>
            <div>
                <StatusWidget status={order.status} />
            </div>
            <div className="flex items-center">
                <Button color="ghost" size="md" shape={"square"} aria-label="download Ticket">
                    <Icon icon={downloadIcon} fontSize={22} />
                </Button>
            </div>
        </TableRow>
    );
};

const StatusWidget = ({ status }: { status: IEcommerceDashboardOrder["status"] }) => {
    if (status == "delivered") {
        return (
            <div className="inline rounded-badge border border-success/50 bg-success/5 px-3 py-1 text-xs font-medium text-success">
                Delivered
            </div>
        );
    } else if (status == "cancelled") {
        return (
            <div className="inline rounded-badge border border-error/50 bg-error/5 px-3 py-1 text-xs font-medium text-error">
                Cancelled
            </div>
        );
    } else if (status == "on_going") {
        return (
            <div className="inline rounded-badge border border-info/50 bg-info/5 px-3 py-1 text-xs font-medium text-info">
                On Going
            </div>
        );
    } else
        return (
            <div className="inline rounded-badge border-base-content/70 bg-base-content/10 px-2 py-1 text-base-content">
                {status}
            </div>
        );
};

const DashboardRecentOrder = () => {
    const { orders } = useEcommerceDashboard();

    return (
        <Card className="bg-base-100">
            <CardBody>
                <div className="flex items-center justify-between">
                    <span className="font-medium text-lg">Recent Bookings</span>
                </div>
                <div className="overflow-auto">
                    <Table className="rounded-box">
                        <TableHead>
                            <span className="text-sm font-medium text-base-content/80">Booking ID</span>
                            <span className="text-sm font-medium text-base-content/80">PNR</span>
                            <span className="text-sm font-medium text-base-content/80">Status</span>
                            <span className="text-sm font-medium text-base-content/80">Booking Status</span>
                            <span className="text-sm font-medium text-base-content/80">Travelers</span>
                            <span className="text-sm font-medium text-base-content/80">Booking Time</span>
                            <span className="text-sm font-medium text-base-content/80">Supplier</span>
                            <span className="text-sm font-medium text-base-content/80">Travel Date</span>
                            <span className="text-sm font-medium text-base-content/80">Agent</span>
                            <span className="text-sm font-medium text-base-content/80">Download Ticket</span>
                        </TableHead>

                        <TableBody>
                            {orders.map((order, index) => (
                                <OrderRow order={order} key={index} />
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </CardBody>
        </Card>
    );
};

export { DashboardRecentOrder };
