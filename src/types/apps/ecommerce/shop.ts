export type IEcommerceShop = {
    id: number;
    name: string;
    date: Date;
    sellerId: number;
    sellerName: string;
    email: string;
    mobileNumber: string;
    verified: boolean;
    ratings: number;
    ratingsCount: number;
    orders: number;
    earning: number;
};

export type IEcommerceCreateShop = IEcommerceShop & { seller_id: number; description: string };
