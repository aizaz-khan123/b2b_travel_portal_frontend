"use server";

import avatar3 from "@/assets/images/avatars/3.png";

import { cookies } from "next/headers";

import { IAuthState } from "@/types/auth";

const cookieKey = "__NEXUS__AUTHENTICATED_USER__";

export const updateAuthCookie = async (user: IAuthState) => {
    cookies().set({ name: cookieKey, value: JSON.stringify(user) });
};

export const getAuthCookie = async (): Promise<IAuthState | undefined> => {
    // Fake Lighthouse testing with fake auth
    return {
        user: {
            id: 1,
            email: "admin@daisyui.com",
            username: "daisyui",
            password: "password",
            firstName: "Daisy",
            lastName: "Admin",
            avatar: avatar3.src,
        },
    };
    // const authCookie = cookies().get(cookieKey);
    // if (authCookie) {
    //     return JSON.parse(authCookie.value) as IAuthState;
    // }
};
