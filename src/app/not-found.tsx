import error404Image from "@/assets/images/landscape/error-404.svg";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { routes } from "@/lib/routes";

export const metadata: Metadata = {
    title: "Not Found",
};

const NotFoundPage = () => {
    return (
        <>
            <div className="flex h-screen w-screen flex-col items-center justify-center">
                <Image src={error404Image} alt="error" />
                <Link href={routes.home} className="btn btn-primary mt-5">
                    Go to Home
                </Link>
            </div>
        </>
    );
};

export default NotFoundPage;
