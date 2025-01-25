import { IconifyIcon } from "@iconify/react";

export type IEcommerceDashboardRevenueStat = {
    amount: number;
    percent: number;
    series: IEcommerceDashboardRevenueSeries[];
};

type IEcommerceDashboardRevenueSeries = {
    date: Date;
    orders: number;
    revenues: number;
};

export type IEcommerceDashboardUserInteraction = {
    title: string;
    amount: string;
    percent: number;
};

export type IEcommerceDashboardRevenueDuration = "day" | "month" | "year";

export type IEcommerceDashboardCounter = {
    icon: IconifyIcon;
    title: string;
    amount: number;
    changes: number;
    changesAmount: number;
    inMoney: boolean;
};

export type IEcommerceDashboardMessage = {
    image: string;
    name: string;
    message: string;
    date: Date;
};

export type IEcommerceDashboardTopCountry = {
    name: string;
    orders: number;
};

export type IEcommerceDashboardOrder = {
    id: number;
    image: string;
    name: string;
    category: string;
    date: Date;
    amount: number;
    status: "delivered" | "on_going" | "cancelled";
};

export type IEcommerceDashboardData = {
    counters: IEcommerceDashboardCounter[];
    orders: IEcommerceDashboardOrder[];
    recentMessages: IEcommerceDashboardMessage[];
    overviewStats: Record<IEcommerceDashboardRevenueDuration, IEcommerceDashboardRevenueStat>;
    topCountries: IEcommerceDashboardTopCountry[];
    customerInteractions: IEcommerceDashboardUserInteraction[];
};
