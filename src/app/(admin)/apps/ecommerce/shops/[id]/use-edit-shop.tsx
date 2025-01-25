"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { editEcommerceShop } from "@/actions/apps/ecommerce";
import { createHookedContext } from "@/hooks/create-hooked-context";
import { useToast } from "@/hooks/use-toast";
import { routes } from "@/lib/routes";
import { IEcommerceSeller, IEcommerceShop } from "@/types/apps/ecommerce";

import { ShopSchemaType, shopSchema } from "../helper";

type HookProp = {
    shop: IEcommerceShop;
    sellers: IEcommerceSeller[];
};

const useHook = ({ shop, sellers }: HookProp) => {
    const toaster = useToast();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const { control, handleSubmit, setError } = useForm<ShopSchemaType>({
        resolver: zodResolver(shopSchema),
        defaultValues: {
            name: shop.name,
            email: shop.email,
            mobileNumber: shop.mobileNumber,
            sellerId: shop.sellerId,
            description: "",
            address: "",
            city: "",
            state: "",
            postalCode: "",
            verified: shop.verified,
        },
    });

    const setErrors = (errors: Record<string, any>) => {
        Object.entries(errors).forEach(([key, value]: any[]) => setError(key, { message: value }));
    };

    const onSubmit = handleSubmit(async (data) => {
        setIsLoading(true);
        const response = await editEcommerceShop(shop.id, data);
        if (response.status == "success") {
            toaster.success("Shop has been updated");
            router.push(routes.apps.ecommerce.shops.index);
        } else if (response.status == "error") {
            setErrors(response.errors);
        }
        setIsLoading(false);
    });

    const handleCancel = () => {
        router.back();
    };

    return {
        control,
        onSubmit,
        isLoading,
        sellers,
        handleCancel,
    };
};

const [useEditEcommerceShop, EditEcommerceShopProvider] = createHookedContext(useHook);
export { useEditEcommerceShop, EditEcommerceShopProvider };
