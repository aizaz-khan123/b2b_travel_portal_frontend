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
            bank_accounts: '/settings/bank-accounts',
            bank_account_create: '/settings/bank-accounts/create',
            bank_account_edit: (id: string) => `/settings/bank-accounts/${id}`,  
            connectors: '/settings/connectors',
            airports: '/settings/airports',
            airport_create: '/settings/airports/create',
            airport_edit: (id: string) => `/settings/airports/${id}`,
            countries :'/settings/countries',
            country_create :'/settings/countries/create',
            country_edit: (id: string) => `/settings/countries/${id}`,
            news:'/settings/news',
            news_create:'/settings/news/create',
            news_edit: (id: string) => `/settings/news/${id}`,
            suppliers:'/settings/suppliers',
            supplier_create:'/settings/suppliers/create',
            supplier_edit: (id: string) => `/settings/suppliers/${id}`,

            airline_margins: '/settings/airline-margins',
            airline_margin_create: '/settings/airline-margins/create',
            airline_margin_edit: (id: string)=> `/settings/airline-margins/${id}`,

        },
        accounts: {
            agency_deposites: '/accounts/agency-deposites',
            branch_deposites: '/accounts/branch-deposites',
        }
    },
};

export { routes };
