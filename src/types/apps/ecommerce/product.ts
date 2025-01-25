export type IEcommerceProduct = {
    id: number;
    image: string;
    name: string;
    category: string;
    date: Date;
    price: number;
    stock: number;
    ratings: number;
    ratingsCount: number;
    orders: number;
    sku: string;
};

export type IEcommerceProductCategory = { id: string; title: string };
