import { IEcommerceCustomer } from "./customer";
import { IEcommerceProduct } from "./product";

export type IEcommerceOrder = {
    id: number;
    itemsCount: number;
    date: Date;
    customer: string;
    paymentStatus: "paid" | "unpaid";
    status: "ordered" | "accepted" | "delivered" | "on_the_way";
    amount: number;
};

export type IEcommerceFullOrder = {
    id: number;
    items: (IEcommerceProduct & {
        quantity: number;
    })[];
    date: Date;
    customer: IEcommerceCustomer;
    payment: {
        status: "paid" | "unpaid";
        cardNumber: string;
        expiryDate: Date;
    };
    deliveryPartner: IEcommerceCustomer;
    address: {
        address: string;
        city: string;
        country: string;
        postalCode: string;
    };
    paymentStatus: "paid" | "unpaid";
    status: "ordered" | "accepted" | "delivered" | "on_the_way";
    amount: number;
    subTotal: number;
    tax: number;
    discount: number;
    total: number;
};
