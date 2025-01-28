"use server";
import { cookies } from "next/headers";

import { IAuthState } from "@/types/auth";

const cookieKey = "user";

export const updateAuthCookie = async (user: IAuthState) => {
    cookies().set({ name: cookieKey, value: JSON.stringify(user) });
};

export const getAuthCookie = async (): Promise<IAuthState | undefined> => {
    const authCookie = cookies().get(cookieKey);
    if (authCookie) {
        return JSON.parse(authCookie.value) as IAuthState;
    }
};
