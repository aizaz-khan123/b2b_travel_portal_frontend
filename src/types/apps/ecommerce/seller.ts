export type IEcommerceSeller = {
    id: number;
    image: string;
    name: string;
    date: Date;
    shopName: string;
    email: string;
    mobileNumber: string;
    verified: boolean;
    earning: number;
    sales: number;
    gender: "male" | "female";
};

export type IEcommerceCreateSeller = IEcommerceSeller & { password: string; confirm_password: string };
