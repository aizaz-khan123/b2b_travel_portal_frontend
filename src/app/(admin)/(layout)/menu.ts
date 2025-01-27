import airplayIcon from "@iconify/icons-lucide/layout-dashboard";
import storeIcon from "@iconify/icons-lucide/store";
import planeIcon from "@iconify/icons-lucide/plane";
import bookingIcon from "@iconify/icons-lucide/book";
import settingIcon from "@iconify/icons-lucide/settings";
import profileIcon from "@iconify/icons-lucide/building";
// import accountIcon from "@iconify/icons-lucide/settings";
import accountIcon from '@iconify/icons-lucide/calculator';

import { routes } from "@/lib/routes";
import { IMenuItem } from "@/types/layout/admin";

export const adminMenuItems: IMenuItem[] = [
    {
        key: "dashboard",
        icon: airplayIcon,
        label: "Dashboard",
        url: routes.dashboards.ecommerce,
    },
    {
        key: "apps-label",
        isTitle: true,
        label: "Sales",
    },
    {
        key: "flight-search",
        icon: planeIcon,
        label: "Flight Search",
        url: routes.apps.flight.search,
    },
    {
        key: "apps-my-booking",
        icon: bookingIcon,
        label: "Bookings",
        children: [
            {
                key: "apps-bookings-reservations",
                label: "Reservations",
                url: routes.apps.flight.reservation,
            },
            {
                key: "apps-void-requests",
                label: "Void Requests",
                url: routes.apps.flight.void_requests,
            },
        ],
    },
    // {
    //     key: "label-organization",
    //     isTitle: true,
    //     label: "Organization Management",
    // },
    {
        key: "apps-organization",
        icon: profileIcon,
        label: "Organizations",
        children: [
            {
                key: "branches",
                label: "Branches",
                url: routes.apps.flight.search,
            },
            {
                key: "agencies",
                label: "Agencies",
                url: routes.apps.flight.search,
            },
            {
                key: "employees",
                label: "Employess",
                url: routes.apps.flight.search,
            },
        ],
    },
    // {
    //     key: "label-settings",
    //     isTitle: true,
    //     label: "Settings",
    // },
    {
        key: "apps-settings",
        icon: settingIcon,
        label: "Settings",
        children: [
            {
                key: "bank-accounts",
                label: "Bank Accounts",
                url: routes.apps.flight.search,
            },
            {
                key: "airline-margins",
                label: "Airline Margins",
                url: routes.apps.flight.search,
            },
            {
                key: "providers",
                label: "Providers",
                url: routes.apps.flight.search,
            },
            {
                key: "suppliers",
                label: "Suppliers",
                url: routes.apps.flight.search,
            },
            {
                key: "airlines",
                label: "Airlines",
                url: routes.apps.flight.search,
            },
            {
                key: "airports",
                label: "Airports",
                url: routes.apps.flight.search,
            },
            {
                key: "countries",
                label: "Countries",
                url: routes.apps.flight.search,
            },
            {
                key: "cities",
                label: "Cities",
                url: routes.apps.flight.search,
            },
            {
                key: "new-and-alerts",
                label: "News & Alerts",
                url: routes.apps.flight.search,
            },
        ],
    },
    // {
    //     key: "label-accounts",
    //     isTitle: true,
    //     label: "Accounts",
    // },
    {
        key: "apps-accounts",
        icon: accountIcon,
        label: "Accounts",
        children: [
            // {
            //     key: "sales-report",
            //     label: "Sales Report",
            //     url: routes.apps.flight.search,
            // },
            // {
            //     key: "ledger-history",
            //     label: "Ledger History",
            //     url: routes.apps.flight.search,
            // },
            {
                key: "agency-payment-request",
                label: "Agency Deposites",
                url: routes.apps.flight.search,
            },
            {
                key: "agency-payment-request",
                label: "Branch Deposites",
                url: routes.apps.flight.search,
            },
        ]
    },
    // {
    //     key: "label-reports",
    //     isTitle: true,
    //     label: "Reports",
    // },
    {
        key: "apps-reports",
        icon: accountIcon,
        label: "Reports",
        children: [
            {
                key: "sales-report",
                label: "Sales Report",
                url: routes.apps.flight.search,
            },
            {
                key: "ledger-history",
                label: "Ledger History",
                url: routes.apps.flight.search,
            },
            {
                key: "unused-tickets",
                label: "Un-used Tickets",
                url: routes.apps.flight.search,
            },
            // {
            //     key: "agency-payment-request",
            //     label: "Agency Deposites",
            //     url: routes.apps.flight.search,
            // },
            // {
            //     key: "agency-payment-request",
            //     label: "Branch Deposites",
            //     url: routes.apps.flight.search,
            // },
        ]
    },
];
