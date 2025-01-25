export type IEcommerceCustomer = {
    id: number;
    image: string;
    name: string;
    date: Date;
    email: string;
    mobileNumber: string;
    verified: boolean;
    spend: number;
    purchases: number;
    gender: "male" | "female";
};

export type IEcommerceCreateCustomer = IEcommerceCustomer & {
    password: string;
    confirmPassword: string;
};
