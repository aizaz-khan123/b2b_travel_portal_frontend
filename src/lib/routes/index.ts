const routes = {
    home: "/dashboard",
    auth: {
        login: "/",
        register: "/auth/register",
        forgotPassword: "/auth/forgot-password",
        resetPassword: "/auth/reset-password",
    },
    dashboards: {
        ecommerce: "/dashboard",
    },
    apps: {
        flight: {
            search: '/flights',
            reservation: '/flights/reservations',
            void_requests: '/flights/void-requests',
        },
        organizations: {
            branches: '/organizations/branches',
            branch_employees: '/organizations/branch/employees',
            agencies: '/organizations/agencies',
            agency_employees: '/organizations/agency/employees',
            agency_subagent: '/organizations/agency/sub-agents',
            headoffice_employees: '/organizations/employees',
        },
        reports:{
            ledger_history: '/reports/ledger-history',
            sales_report: '/reports/sales-report',
            unused_tickets: '/reports/unused-tickets'
        },
        settings:{
            airlines: '/settings/airlines',
            airline_create: '/settings/airlines/create',
            airline_edit: (id: string) => `/settings/airlines/${id}`,
            airline_margins: '/settings/airline-margins',
            bank_accounts: '/settings/bank-accounts',
            bank_account_create: '/settings/bank-accounts/create',
            bank_account_edit: (id: string) => `/settings/bank-accounts/${id}`,
            cities:'/settings/cities',
            countries :'/settings/countries',
            news:'/settings/news',
            suppliers:'/settings/suppliers',
            connectors: '/settings/connectors',
            airports: '/settings/airports',
        },
        accounts: {
            agency_deposites: '/accounts/agency-deposites',
            branch_deposites: '/accounts/branch-deposites',
        }
    },
};

export { routes };
