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
        orders: {
            index: "/apps/ecommerce/orders",
            show: (id: number | string) => `/apps/ecommerce/orders/${id}`,
        },
        products: {
            index: "/apps/ecommerce/products",
            create: "/apps/ecommerce/products/create",
            edit: (id: number) => `/apps/ecommerce/products/${id}`,
        },
        customers: {
            index: "/apps/ecommerce/customers",
            create: "/apps/ecommerce/customers/create",
            edit: (id: number) => `/apps/ecommerce/customers/${id}`,
        },
        sellers: {
            index: "/apps/ecommerce/sellers",
            create: "/apps/ecommerce/sellers/create",
            edit: (id: number) => `/apps/ecommerce/sellers/${id}`,
        },
        shops: {
            index: "/apps/ecommerce/shops",
            create: "/apps/ecommerce/shops/create",
            edit: (id: number) => `/apps/ecommerce/shops/${id}`,
        },
        flight: {
            search: "/flights",
            reservation: '/flights/reservations',
            void_requests: '/flights/void-requests',
        }
    },
};

export { routes };
