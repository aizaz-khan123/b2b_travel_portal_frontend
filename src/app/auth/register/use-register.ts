"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useAuthContext } from "@/contexts/auth";
import { useToast } from "@/hooks/use-toast";
import { routes } from "@/lib/routes";

const useRegister = () => {
    const router = useRouter();
    const { register } = useAuthContext();

    const [isLoading, setIsLoading] = useState(false);
    const toaster = useToast();

    const registerSchema = z.object({
        firstName: z.string(),
        lastName: z.string(),
        username: z.string(),
        email: z.string().email(),
        password: z.string(),
    });

    type RegisterSchemaType = z.infer<typeof registerSchema>;

    const { control, handleSubmit, setError } = useForm<RegisterSchemaType>({
        resolver: zodResolver(registerSchema),
    });

    const setErrors = (errors: Record<string, any>) => {
        Object.entries(errors).forEach(([key, value]: any[]) => setError(key, { message: value }));
    };

    const onSubmit = handleSubmit(async (data) => {
        setIsLoading(true);

        const response = await register(data);
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

export { useRegister };
