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
        label: "Overview",
        url: routes.dashboards.ecommerce,
        roles: ['sub-agent', 'agency', 'head-office', 'branch', 'b-employee', 'a-employee', 'h-employee'],
        permissions: ["show_database_stats"]

    },
    {
        key: "apps-label",
        isTitle: true,
        label: "Sales",
        roles: ['head-office', 'branch', 'b-employee', 'h-employee', 'agency', 'sub-agent', 'a-employee'],
    },
    {
        key: "flight-search",
        icon: planeIcon,
        label: "Flight Search",
        url: routes.apps.flight.search,
        roles: ['sub-agent', 'agency', 'head-office', 'branch', 'b-employee', 'a-employee', 'h-employee'],
        permissions: ["can_search_flight"]
    },
    {
        key: "apps-bookings",
        icon: bookingIcon,
        label: "Bookings",
        roles: ['head-office', 'branch', 'b-employee', 'h-employee'],
        permissions: ["can_view_reservations", "can_view_void_requests"],
        children: [
            {
                key: "apps-bookings-reservations",
                label: "Reservations",
                url: routes.apps.flight.reservation,
                roles: ['head-office', 'branch', 'b-employee', 'h-employee'],
                permissions: ["can_view_reservations"],
            },
            {
                key: "apps-void-requests",
                label: "Void Requests",
                url: routes.apps.flight.void_requests,
                roles: ['head-office', 'branch', 'b-employee', 'h-employee'],
                permissions: ["can_view_void_requests"],
            },
        ],
    },
    {
        key: "apps-my-booking",
        icon: bookingIcon,
        label: "My Bookings",
        roles: ['sub-agent', 'agency','a-employee' ],
        permissions: ["can_view_my_bookings", "can_view_my_void_request"],
        children: [
            {
                key: "apps-payment-reservations",
                label: "My Reservations",
                url: routes.apps.flight.reservation,
                roles: ['sub-agent', 'agency','a-employee' ],
                permissions: ["can_view_my_bookings"],
            },
            {
                key: "apps-void-requests",
                label: "My Void Requests",
                url: routes.apps.flight.void_requests,
                roles: ['sub-agent', 'agency','a-employee' ],
                permissions: ["can_view_my_void_request"],
            },
        ],
    },
    {
        key: "apps-organization",
        icon: profileIcon,
        label: "Organization",
        roles: ['head-office', 'branch', 'b-employee', 'h-employee', 'agency', 'a-employee', 'sub-agent'],
        permissions: ["can_view_branches", "can_view_agencies", "can_view_employees", "can_view_sub_agents", "can_view_passenger_management"],
        children: [
            {
                key: "branches",
                label: "Branches",
                url: routes.apps.organizations.branches,
                roles: ['head-office', 'h-employee'],
                permissions: ["can_view_branches"],
            },
            {
                key: "agencies",
                label: "Agencies",
                url: routes.apps.organizations.agencies,
                roles: ['head-office', 'branch', 'b-employee', 'h-employee'],
                permissions: ["can_view_agencies"]
            },
            {
                key: "employees",
                label: "Employess",
                url: routes.apps.organizations.headoffice_employees,
                roles: ['head-office', 'branch', 'b-employee', 'h-employee', 'agency'],
                permissions: ["can_view_employees"]
            },
            {
                key: "sub-agents",
                label: "Sub-Agents",
                url: routes.apps.organizations.headoffice_employees,
                roles: ['agency'],
                permissions: ["can_view_sub_agents"]
            },
            {
                key: "passengers",
                label: "Passenger Management",
                url: routes.apps.organizations.passenger_management,
                roles: ['branch', 'b-employee', 'agency', 'a-employee', 'sub-agent'],
                permissions: ["can_view_passenger_management"]
            },
        ],
    },
    {
        key: "apps-settings",
        icon: settingIcon,
        label: "Settings",
        roles: ['head-office', 'branch', 'b-employee', 'h-employee'],
        permissions: ["can_view_bank_accounts_setting", "can_view_airline_margins_setting", "can_view_connector_setting","can_view_suppliers_setting", "can_view_airlines_setting", "can_view_airports_setting","can_view_countries_setting", "can_view_cities_setting", "can_view_news_setting"],
        children: [
            {
                key: "bank-accounts",
                label: "Bank Accounts",
                url: routes.apps.settings.bank_accounts,
                roles: ['head-office', 'branch', 'b-employee', 'h-employee'],
                permissions: ["can_view_bank_accounts_setting"],
            },
            {
                key: "airline-margins",
                label: "Airline Margins",
                url: routes.apps.settings.airline_margins,
                roles: ['head-office', 'branch', 'b-employee', 'h-employee'],
                permissions: ["can_view_airline_margins_setting"],
            },
            {
                key: "connectors",
                label: "Connectors",
                url: routes.apps.settings.connectors,
                roles: ['head-office', 'h-employee'],
                permissions: ["can_view_connector_setting"],
            },
            {
                key: "suppliers",
                label: "Suppliers",
                url: routes.apps.settings.suppliers,
                roles: ['head-office', 'h-employee'],
                permissions: ["can_view_suppliers_setting"],
            },
            {
                key: "airlines",
                label: "Airlines",
                url: routes.apps.settings.airlines,
                roles: ['head-office', 'h-employee'],
                permissions: ["can_view_airlines_setting"]
            },
            {
                key: "airports",
                label: "Airports",
                url: routes.apps.settings.airports,
                roles: ['head-office', 'h-employee'],
                permissions: ["can_view_airports_setting"]
            },
            {
                key: "countries",
                label: "Countries",
                url: routes.apps.settings.countries,
                roles: ['head-office', 'h-employee'],
                permissions: ["can_view_countries_setting"],
            },
            {
                key: "new-and-alerts",
                label: "News & Alerts",
                url: routes.apps.settings.news,
                roles: ['head-office', 'branch', 'b-employee', 'h-employee'],
                permissions:["can_view_news_setting"]
            },
        ],
    },
    {
        key: "apps-accounts",
        icon: accountIcon,
        label: "Accounts",
        roles: ['head-office', 'branch', 'b-employee', 'h-employee'],
        permissions: ["can_view_agency_deposites", "can_view_branch_deposites"],
        children: [
            {
                key: "agency-payment-request",
                label: "Agency Deposites",
                url: routes.apps.accounts.agency_deposites,
                roles: ['head-office', 'branch', 'b-employee', 'h-employee'],
                permissions: ["can_view_agency_deposites"],
            },
            {
                key: "branch-payment-request",
                label: "Branch Deposites",
                url: routes.apps.accounts.branch_deposites,
                roles: ['head-office', 'h-employee'],
                permissions: ["can_view_branch_deposites"],
            },
        ]
    },
    {
        key: "apps-finance",
        icon: accountIcon,
        label: "Finance",
        roles: ['a-employee', 'agency', 'sub-agent'],
        permissions: ["can_view_ag_pricing", "can_view_payment_request"],
        children: [
            {
                key: "agency-pricing",
                label: "AG Pricing",
                url: routes.apps.accounts.agency_deposites,
                roles: ['a-employee', 'agency', 'sub-agent'],
                permissions: ["can_view_ag_pricing"]
            },
            {
                key: "agency-payment-request",
                label: "Payment Request",
                url: routes.apps.accounts.branch_deposites,
                roles: ['a-employee', 'agency', 'sub-agent'],
                permissions: ["can_view_payment_request"]
            },
        ]
    },
    {
        key: "apps-reports",
        icon: accountIcon,
        label: "Reports",
        roles: ['head-office', 'branch', 'b-employee', 'h-employee', 'agency', 'sub-agent', 'a-employee'],
        permissions: ["can_view_sales_report", "can_view_transaction_history", "can_view_un_used_tickets"],
        children: [
            {
                key: "sales-report",
                label: "Sales Report",
                url: routes.apps.reports.sales_report,
                roles: ['head-office', 'branch', 'b-employee', 'h-employee', 'agency', 'sub-agent', 'a-employee'],
                permissions: ["can_view_sales_report"],
            },
            {
                key: "ledger-history",
                label: "Transaction History",
                url: routes.apps.reports.ledger_history,
                roles: ['head-office', 'branch', 'b-employee', 'h-employee', 'agency', 'a-employee', 'sub-agent'],
                permissions: ["can_view_transaction_history"],
            },
            {
                key: "unused-tickets",
                label: "Un-used Tickets",
                url: routes.apps.reports.unused_tickets,
                roles: ['head-office', 'h-employee'],
                permissions: ["can_view_un_used_tickets"],
            },
        ]
    },
    {
        key: "apps-notification",
        icon: bellIcon,
        url: routes.apps.notification,
        label: "Notifications",
        roles: ['head-office', 'branch', 'b-employee', 'h-employee', 'agency', 'sub-agent', 'a-employee'],
        permissions: ["can_view_notifications"],
    }
];
