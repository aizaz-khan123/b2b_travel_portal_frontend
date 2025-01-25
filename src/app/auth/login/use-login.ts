"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useAuthContext } from "@/contexts/auth";
import { useToast } from "@/hooks/use-toast";
import { routes } from "@/lib/routes";

const useLogin = ({ redirectTo }: { redirectTo?: string }) => {
    const router = useRouter();
    const { login } = useAuthContext();
    const toaster = useToast();
    const [isLoading, setIsLoading] = useState(false);

    const loginSchema = z.object({
        email: z.string().email(),
        password: z.string(),
    });

    type LoginSchemaType = z.infer<typeof loginSchema>;

    const { control, handleSubmit, setError } = useForm<LoginSchemaType>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "admin@daisyui.com",
            password: "password",
        },
    });

    const setErrors = (errors: Record<string, any>) => {
        Object.entries(errors).forEach(([key, value]: any[]) => setError(key, { message: value }));
    };

    const onSubmit = handleSubmit(async (data) => {
        setIsLoading(true);
        try {
            const response = await login(data);
            if (response.status == "success") {
                toaster.success("Login successfully...");
                router.push(redirectTo ?? routes.home);
            } else {
                setErrors(response.errors);
            }
        } catch (e: any) {
            toaster.error("Something wrong, check dev console");
            console.error(e);
        } finally {
            setIsLoading(false);
        }
    });

    return {
        isLoading,
        control,
        onSubmit,
    };
};

export { useLogin };
