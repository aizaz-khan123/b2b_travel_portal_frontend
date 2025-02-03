import airplayIcon from "@iconify/icons-lucide/layout-dashboard";
import planeIcon from "@iconify/icons-lucide/plane";
import bookingIcon from "@iconify/icons-lucide/book";
import settingIcon from "@iconify/icons-lucide/settings";
import profileIcon from "@iconify/icons-lucide/building";
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
    {
        key: "apps-organization",
        icon: profileIcon,
        label: "Organizations",
        children: [
            {
                key: "branches",
                label: "Branches",
                url: routes.apps.organizations.branches,
            },
            {
                key: "agencies",
                label: "Agencies",
                url: routes.apps.organizations.agencies,
            },
            {
                key: "employees",
                label: "Employess",
                url: routes.apps.organizations.headoffice_employees,
            },
        ],
    },
    {
        key: "apps-settings",
        icon: settingIcon,
        label: "Settings",
        children: [
            {
                key: "bank-accounts",
                label: "Bank Accounts",
                url: routes.apps.settings.bank_accounts,
            },
            {
                key: "airline-margins",
                label: "Airline Margins",
                url: routes.apps.settings.airline_margins,
            },
            {
                key: "connectors",
                label: "Connectors",
                url: routes.apps.settings.connectors,
            },
            {
                key: "suppliers",
                label: "Suppliers",
                url: routes.apps.settings.suppliers,
            },
            {
                key: "airlines",
                label: "Airlines",
                url: routes.apps.settings.airlines,
            },
            {
                key: "airports",
                label: "Airports",
                url: routes.apps.settings.airports,
            },
            {
                key: "countries",
                label: "Countries",
                url: routes.apps.settings.countries,
            },
            // {
            //     key: "cities",
            //     label: "Cities",
            //     url: routes.apps.settings.cities,
            // },
            {
                key: "new-and-alerts",
                label: "News & Alerts",
                url: routes.apps.settings.news,
            },
        ],
    },
    {
        key: "apps-accounts",
        icon: accountIcon,
        label: "Accounts",
        children: [
            {
                key: "agency-payment-request",
                label: "Agency Deposites",
                url: routes.apps.accounts.agency_deposites,
            },
            {
                key: "agency-payment-request",
                label: "Branch Deposites",
                url: routes.apps.accounts.branch_deposites,
            },
        ]
    },
    {
        key: "apps-reports",
        icon: accountIcon,
        label: "Reports",
        children: [
            {
                key: "sales-report",
                label: "Sales Report",
                url: routes.apps.reports.sales_report,
            },
            {
                key: "ledger-history",
                label: "Ledger History",
                url: routes.apps.reports.ledger_history,
            },
            {
                key: "unused-tickets",
                label: "Un-used Tickets",
                url: routes.apps.reports.unused_tickets,
            },
        ]
    },
];
