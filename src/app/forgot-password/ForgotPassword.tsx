"use client";

import mailIcon from "@iconify/icons-lucide/mail";
import mailPlusIcon from "@iconify/icons-lucide/mail-plus";

import Link from "next/link";
import React from "react";

import { Icon } from "@/components/Icon";
import { Button, Checkbox, FormLabel } from "@/components/daisyui";
import { FormInput } from "@/components/forms";
import { routes } from "@/lib/routes";

import { useForgotPassword } from "./use-forgot-password";
import { Logo } from "@/components/Logo";

const ForgotPassword = () => {
    const { isLoading, control, onSubmit } = useForgotPassword();

    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
            
                <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-center text-2xl font-bold">Forgot Your Password?</h2>

                    <h3 className="mt-2 text-center text-md text-base-content/60">
                        Enter your registered email address below, and we'll send you a link to reset your password securely.
                    </h3>
                    <div>
                        <div className="form-control">
                            <FormLabel title={"Email Address"} htmlFor="email" />
                            <FormInput
                                size="md"
                                startIcon={<Icon icon={mailIcon} className="text-base-content/80" fontSize={18} />}
                                control={control}
                                name={"email"}
                                id="email"
                                placeholder="Email Address"
                                className="w-full focus:border-transparent focus:outline-0"
                                bordered={false}
                                borderOffset={false}></FormInput>
                        </div>
                    </div>
                    <div className="mt-4 md:mt-6">
                        <Button
                            color="primary"
                            loading={isLoading}
                            onClick={onSubmit}
                            className="gap-3 text-base"
                            fullWidth
                            startIcon={<Icon icon={mailPlusIcon} fontSize={16} />}>
                            Send a reset link
                        </Button>
                    </div>
                    <p className="mt-4 text-center text-sm text-base-content/80 md:mt-6">
                        I have already to{" "}
                        <Link className="text-primary hover:underline" href={routes.auth.login}>
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export { ForgotPassword };
