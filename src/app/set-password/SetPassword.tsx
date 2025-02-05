"use client";

import checkIcon from "@iconify/icons-lucide/check";
import keyRoundIcon from "@iconify/icons-lucide/key-round";

import Link from "next/link";
import React, { useEffect } from "react";
import { Logo } from "@/components/Logo";

import { Icon } from "@/components/Icon";
import { Button, FormLabel } from "@/components/daisyui";
import { FormInputPassword } from "@/components/forms/FormInputPassword";
import { routes } from "@/lib/routes";

import { useResetPassword } from "./use-reset-password";
import { useVerifySetPasswordLinkMutation } from "@/services/api";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

const SetPassword = ({ searchParams }: { searchParams: any }) => {
    const [verifyLink, { isLoading: isVerifyLinkLoading }] = useVerifySetPasswordLinkMutation();
    const router = useRouter();
    const toaster = useToast();
    useEffect(() => {
        const render = async () => {
            if (searchParams.entity && searchParams.expires && searchParams.signature) {
                const data = {
                    entity: searchParams.entity,
                    expires: searchParams.expires,
                    signature: searchParams.signature
                }
                await verifyLink(data).then((response) => {
                    if(response.data.message != "Valid link"){
                        toaster.error('InValid Link. Please try Again after sometime.');
                        router.push('/');
                    }
                })
            }
        }
        render();
    }, []);
console.log(isVerifyLinkLoading)
    // if (isVerifyLinkLoading) {
    //     return (
    //         <div className="flex items-center justify-center h-64">
    //             <span className="loading loading-spinner loading-lg"></span>
    //             <p className="ml-2">Verify Link detail...</p>
    //         </div>
    //     );
    // }
    const { isLoading, control, onSubmit } = useResetPassword();

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-center text-2xl font-bold mb-2">Set Password</h2>
                <h3 className="text-center text-md text-base-content/70">
                    Set up your system password and take the first step toward accelerating your business growth.
                </h3>
                <div className="form-control">
                    <FormLabel title={"Password"} htmlFor="password" />
                    <FormInputPassword
                        size="md"
                        startIcon={<Icon icon={keyRoundIcon} className="text-base-content/80" fontSize={18} />}
                        control={control}
                        name={"password"}
                        placeholder="Password"
                        id="password"
                        className="w-full focus:border-transparent focus:outline-0"
                        bordered={false}
                        borderOffset={false}></FormInputPassword>
                </div>
                <div className="form-control mt-3">
                    <FormLabel title={"Confirm Password"} htmlFor="confirmPassword" />
                    <FormInputPassword
                        size="md"
                        startIcon={<Icon icon={keyRoundIcon} className="text-base-content/80" fontSize={18} />}
                        control={control}
                        name={"confirmPassword"}
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        className="w-full focus:border-transparent focus:outline-0"
                        bordered={false}
                        borderOffset={false}></FormInputPassword>
                </div>
                <div className="mt-4 md:mt-6">
                    <Button
                        color="primary"
                        loading={isLoading}
                        onClick={onSubmit}
                        className="gap-3 text-base"
                        fullWidth
                        startIcon={<Icon icon={checkIcon} fontSize={16} />}>
                        Submit
                    </Button>
                </div>
                <p className="mt-4 text-center text-md text-base-content/100 md:mt-6">
                    Go to{" "}
                    <Link className="text-primary hover:underline" href={routes.auth.login}>
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );

};

export { SetPassword };
