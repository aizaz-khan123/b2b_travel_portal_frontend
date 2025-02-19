"use client";

import keyRoundIcon from "@iconify/icons-lucide/key-round";
import logInIcon from "@iconify/icons-lucide/log-in";
import mailIcon from "@iconify/icons-lucide/mail";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { Icon } from "@/components/Icon";
import { Button, FormLabel } from "@/components/daisyui";
import { FormInput } from "@/components/forms/FormInput";
import { FormInputPassword } from "@/components/forms/FormInputPassword";
import { routes } from "@/lib/routes";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useLoginMutation } from "@/services/api";
import { loggedIn } from "@/redux/authSlice";
import { useDispatch } from "react-redux";
import { updateAuthCookie } from "@/lib/cookie/auth";
import { Logo } from "@/components/Logo";
import { off } from "process";
import authbg from "@/assets/images/auth/auth-bg.png";

const LoginAuth = ({ redirectTo }: { redirectTo?: string }) => {
  const router = useRouter();
  const toaster = useToast();
  const dispatch = useDispatch();
  const [isdisable, setIsDisable] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loginSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
    password: z
      .string()
      .min(5, "Password must be at least 5 characters")
      .max(15, "Password must not exceed 8 characters"),
  });

  type LoginSchemaType = z.infer<typeof loginSchema>;

  const { control, handleSubmit, setError } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "headoffice@gmail.com",
      password: "admin@test.com",
    },
  });

  const setErrors = (errors: Record<string, any>) => {
    Object.entries(errors).forEach(([key, value]: any[]) =>
      setError(key, { message: value })
    );
  };

  const [loginUser] = useLoginMutation();

  const onSubmit = handleSubmit(async (data) => {
    setIsDisable(true);
    setIsLoading(true);
    await loginUser(data).then(async (response: any) => {
      if ("error" in response) {
        setErrors(response.error.data.errors);
        setIsDisable(false);
        setIsLoading(false);
        return;
      }

      const userDetail = response.data.data;
      if (response.data.code == 200) {
        await Promise.allSettled([
          dispatch(loggedIn({ userDetail })),
          updateAuthCookie({ user: userDetail?.user }),
        ]).then(() => {
          setIsDisable(false);
          setIsLoading(false);
          toaster.success("Login successfully...");
          router.push(redirectTo ?? routes.home);
        });
      }
    });
  });
  return (
    <>
      {/* <div className="flex items-center justify-center min-h-screen bg-gray-50"> */}
    
      <div
        className="flex items-center justify-center min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(/media/images/auth-bg.png)` }}
      >
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
          <div className="flex items-center justify-between ml-[120px]">
            <Logo />
          </div>
          <h3 className="text-center text-xl font-semibold md:mt-6 lg:mt-5 mb-3">
            Wellcome to FlyGlobe
          </h3>
          <h3 className="text-center text-md text-base-content/90 mb-5">
            Sign in to your account to continue selling...
          </h3>
          <div>
            <div className="form-control">
              <FormLabel title={"Email Address"} htmlFor="email" />
              <FormInput
                size="md"
                startIcon={
                  <Icon
                    icon={mailIcon}
                    className="text-base-content/80"
                    fontSize={18}
                  />
                }
                control={control}
                name={"email"}
                id="email"
                placeholder="Email Address"
                className="w-full focus:border-transparent focus:outline-0"
                bordered={false}
                borderOffset={false}
              ></FormInput>
            </div>
            <div className="form-control">
              <FormLabel title={"Password"} htmlFor="password" />
              <FormInputPassword
                size="md"
                startIcon={
                  <Icon
                    icon={keyRoundIcon}
                    className="text-base-content/80"
                    fontSize={18}
                  />
                }
                control={control}
                name={"password"}
                id="password"
                placeholder="Password"
                className="w-full focus:border-transparent focus:outline-0"
                bordered={false}
                borderOffset={false}
              ></FormInputPassword>

              <label className="label">
                <span className="label-text"></span>
                <Link
                  className="label-text text-xs text-base-content/80"
                  href={routes.auth.forgotPassword}
                >
                  Forgot Password?
                </Link>
              </label>
            </div>
          </div>
          <div className="mt-4 md:mt-4">
            <Button
              color="primary"
              loading={isLoading}
              disabled={isdisable}
              onClick={onSubmit}
              className="gap-3 text-base"
              fullWidth
              startIcon={<Icon icon={logInIcon} fontSize={16} />}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export { LoginAuth };
