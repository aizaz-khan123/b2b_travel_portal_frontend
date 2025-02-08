import airplayIcon from "@iconify/icons-lucide/layout-dashboard";
import planeIcon from "@iconify/icons-lucide/plane";
import bookingIcon from "@iconify/icons-lucide/book";
import settingIcon from "@iconify/icons-lucide/settings";
import profileIcon from "@iconify/icons-lucide/building";
import accountIcon from '@iconify/icons-lucide/calculator';
import bellIcon from "@iconify/icons-lucide/bell";

import { routes } from "@/lib/routes";
import { IMenuItem } from "@/types/layout/admin";

export const adminMenuItems: IMenuItem[] = [
    {
        key: "dashboard",
        icon: airplayIcon,
        label: "Dashboard",
        url: routes.dashboards.ecommerce,
        roles: ['sub-agent', 'agency', 'head-office', 'branch', 'b-employee', 'a-employee', 'h-employee'],
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
        roles: ['sub-agent', 'agency', 'head-office', 'branch', 'b-employee', 'a-employee', 'h-employee'],
    },
    {
        key: "apps-bookings",
        icon: bookingIcon,
        label: "Bookings",
        roles: ['head-office', 'branch', 'b-employee', 'h-employee'],
        children: [
            {
                key: "apps-bookings-reservations",
                label: "Reservations",
                url: routes.apps.flight.reservation,
                roles: ['head-office', 'branch', 'b-employee', 'h-employee'],
            },
            {
                key: "apps-void-requests",
                label: "Void Requests",
                url: routes.apps.flight.void_requests,
                roles: ['head-office', 'branch', 'b-employee', 'h-employee'],
            },
        ],
    },
    {
        key: "apps-my-booking",
        icon: bookingIcon,
        label: "My Bookings",
        roles: ['sub-agent', 'agency','a-employee' ],
        children: [
            {
                key: "apps-payment-reservations",
                label: "My Reservations",
                url: routes.apps.flight.reservation,
                roles: ['sub-agent', 'agency','a-employee' ],
            },
            {
                key: "apps-void-requests",
                label: "My Void Requests",
                url: routes.apps.flight.void_requests,
                roles: ['sub-agent', 'agency','a-employee' ],
            },
        ],
    },
    {
        key: "apps-organization",
        icon: profileIcon,
        label: "Organization",
        roles: ['head-office', 'branch', 'b-employee', 'h-employee', 'agency', 'a-employee', 'sub-agent'],
        children: [
            {
                key: "branches",
                label: "Branches",
                url: routes.apps.organizations.branches,
                roles: ['head-office', 'h-employee'],
            },
            {
                key: "agencies",
                label: "Agencies",
                url: routes.apps.organizations.agencies,
                roles: ['head-office', 'branch', 'b-employee', 'h-employee'],
            },
            {
                key: "employees",
                label: "Employess",
                url: routes.apps.organizations.headoffice_employees,
                roles: ['head-office', 'branch', 'b-employee', 'h-employee', 'agency'],
            },
            {
                key: "sub-agents",
                label: "Sub-Agents",
                url: routes.apps.organizations.headoffice_employees,
                roles: ['agency'],
            },
            {
                key: "passengers",
                label: "Passenger Management",
                url: routes.apps.organizations.headoffice_employees,
                roles: ['branch', 'b-employee', 'agency', 'a-employee', 'sub-agent'],
            },
        ],
    },
    {
        key: "apps-settings",
        icon: settingIcon,
        label: "Settings",
        roles: ['head-office', 'branch', 'b-employee', 'h-employee'],
        children: [
            {
                key: "bank-accounts",
                label: "Bank Accounts",
                url: routes.apps.settings.bank_accounts,
                roles: ['head-office', 'branch', 'b-employee', 'h-employee'],
            },
            {
                key: "airline-margins",
                label: "Airline Margins",
                url: routes.apps.settings.airline_margins,
                roles: ['head-office', 'branch', 'b-employee', 'h-employee'],
            },
            {
                key: "connectors",
                label: "Connectors",
                url: routes.apps.settings.connectors,
                roles: ['head-office', 'h-employee'],
            },
            {
                key: "suppliers",
                label: "Suppliers",
                url: routes.apps.settings.suppliers,
                roles: ['head-office', 'h-employee'],
            },
            {
                key: "airlines",
                label: "Airlines",
                url: routes.apps.settings.airlines,
                roles: ['head-office', 'h-employee'],
            },
            {
                key: "airports",
                label: "Airports",
                url: routes.apps.settings.airports,
                roles: ['head-office', 'h-employee'],
            },
            {
                key: "countries",
                label: "Countries",
                url: routes.apps.settings.countries,
                roles: ['head-office', 'h-employee'],
            },
            {
                key: "new-and-alerts",
                label: "News & Alerts",
                url: routes.apps.settings.news,
                roles: ['head-office', 'branch', 'b-employee', 'h-employee'],
            },
        ],
    },
    {
        key: "apps-accounts",
        icon: accountIcon,
        label: "Accounts",
        roles: ['head-office', 'branch', 'b-employee', 'h-employee'],
        children: [
            {
                key: "agency-payment-request",
                label: "Agency Deposites",
                url: routes.apps.accounts.agency_deposites,
                roles: ['head-office', 'branch', 'b-employee', 'h-employee'],
            },
            {
                key: "agency-payment-request",
                label: "Branch Deposites",
                url: routes.apps.accounts.branch_deposites,
                roles: ['head-office', 'h-employee'],
            },
        ]
    },
    {
        key: "apps-finance",
        icon: accountIcon,
        label: "Finance",
        roles: ['a-employee', 'agency', 'sub-agent'],
        children: [
            {
                key: "agency-pricing",
                label: "AG Pricing",
                url: routes.apps.accounts.agency_deposites,
                roles: ['a-employee', 'agency', 'sub-agent'],
            },
            {
                key: "agency-payment-request",
                label: "Payment Request",
                url: routes.apps.accounts.branch_deposites,
                roles: ['a-employee', 'agency', 'sub-agent'],
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
                roles: ['head-office', 'branch', 'b-employee', 'h-employee', 'agency', 'sub-agent', 'a-employee'],
            },
            {
                key: "ledger-history",
                label: "Transaction History",
                url: routes.apps.reports.ledger_history,
                roles: ['head-office', 'branch', 'b-employee', 'h-employee', 'agency', 'a-employee', 'sub-agent'],
            },
            {
                key: "unused-tickets",
                label: "Un-used Tickets",
                url: routes.apps.reports.unused_tickets,
                roles: ['head-office', 'h-employee'],
            },
        ]
    },
    {
        key: "apps-notification",
        icon: bellIcon,
        url: routes.apps.notification,
        label: "Notifications",
    }
];
