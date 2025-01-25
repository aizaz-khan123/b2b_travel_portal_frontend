"use client";

import googleMiniImage from "@/assets/images/brand-logo/google-mini.svg";

import keyRoundIcon from "@iconify/icons-lucide/key-round";
import logInIcon from "@iconify/icons-lucide/log-in";
import mailIcon from "@iconify/icons-lucide/mail";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { Icon } from "@/components/Icon";
import { Button, Checkbox, FormLabel } from "@/components/daisyui";
import { FormInput } from "@/components/forms/FormInput";
import { FormInputPassword } from "@/components/forms/FormInputPassword";
import { routes } from "@/lib/routes";

import { useLogin } from "./use-login";

const LoginAuth = ({ redirectTo }: { redirectTo?: string }) => {
    const { isLoading, control, onSubmit } = useLogin({ redirectTo });

    return (
        <>
            <div>
                <div className="form-control">
                    <FormLabel title={"Email Address"} htmlFor="email" />
                    <FormInput
                        size="sm"
                        startIcon={<Icon icon={mailIcon} className="text-base-content/80" fontSize={18} />}
                        control={control}
                        name={"email"}
                        id="email"
                        placeholder="Email Address"
                        className="w-full focus:border-transparent focus:outline-0"
                        bordered={false}
                        borderOffset={false}></FormInput>
                </div>
                <div className="form-control mt-3">
                    <FormLabel title={"Password"} htmlFor="password" />
                    <FormInputPassword
                        size="sm"
                        startIcon={<Icon icon={keyRoundIcon} className="text-base-content/80" fontSize={18} />}
                        control={control}
                        name={"password"}
                        id="password"
                        placeholder="Password"
                        className="w-full focus:border-transparent focus:outline-0"
                        bordered={false}
                        borderOffset={false}></FormInputPassword>

                    <label className="label">
                        <span className="label-text"></span>
                        <Link className="label-text text-xs text-base-content/80" href={routes.auth.forgotPassword}>
                            Forgot Password?
                        </Link>
                    </label>
                </div>
                <div className="mt-4 flex items-center gap-3 md:mt-6">
                    <Checkbox name="agreement" id="agreement" size="xs" color="primary" />
                    <label htmlFor="agreement">
                        I agree with <span className="cursor-pointer text-primary underline">terms and conditions</span>
                    </label>
                </div>
            </div>
            <div className="mt-4 md:mt-6">
                <Button
                    color="primary"
                    loading={isLoading}
                    onClick={onSubmit}
                    className="gap-3 text-base"
                    fullWidth
                    startIcon={<Icon icon={logInIcon} fontSize={16} />}>
                    Login
                </Button>
            </div>
            <div className="mt-4">
                <Button
                    size={"md"}
                    fullWidth
                    className="flex items-center gap-3 border-base-content/10 !text-base-content hover:border-transparent hover:bg-base-content/10"
                    variant={"outline"}>
                    <Image src={googleMiniImage} className="size-6" alt="" />
                    <span className="text-base">Login with Google</span>
                </Button>
            </div>
            <p className="mt-4 text-center text-sm text-base-content/80 md:mt-6">
                Haven&apos;t account{" "}
                <Link className="text-primary hover:underline" href={routes.auth.register}>
                    Create One
                </Link>
            </p>
        </>
    );
};

export { LoginAuth };
