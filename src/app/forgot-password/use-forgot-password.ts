"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useAuthContext } from "@/contexts/auth";
import { useToast } from "@/hooks/use-toast";
import { routes } from "@/lib/routes";

const useForgotPassword = () => {
    const router = useRouter();
    const { forgotPassword } = useAuthContext();
    const toaster = useToast();
    const [isLoading, setIsLoading] = useState(false);

    const formSchema = z.object({
        email: z.string().email(),
    });

    type FormSchemaType = z.infer<typeof formSchema>;

    const { control, handleSubmit, setError } = useForm<FormSchemaType>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "admin@daisyui.com",
        },
    });

    const setErrors = (errors: Record<string, any>) => {
        Object.entries(errors).forEach(([key, value]: any[]) => setError(key, { message: value }));
    };

    const onSubmit = handleSubmit(async (data) => {
        setIsLoading(true);
        const response = await forgotPassword(data);
        if (response.status == "success") {
            toaster.success(response.data);
            router.push(routes.auth.login);
        } else {
            setErrors(response.errors);
        }
        setIsLoading(false);
    });

    return {
        isLoading,
        control,
        onSubmit,
    };
};

export { useForgotPassword };
