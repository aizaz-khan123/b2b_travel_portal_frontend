import type { Metadata } from "next";

import { ThemeToggleButton } from "@/components/ThemeToggleButton";

import FAQ from "./landing/components/FAQ";
import Feature from "./landing/components/Feature";
import Footer from "./landing/components/Footer";
import Hero from "./landing/components/Hero";
import Package from "./landing/components/Package";
import Showcase from "./landing/components/Showcase";
import Testimonial from "./landing/components/Testimonial";
import Topbar from "./landing/components/Topbar";

export const metadata: Metadata = {
    title: "Landing - Product Preview",
};
const LandingPage = () => {
    return (
        <>
            <Topbar />
            <Hero />
            <Feature />
            <Showcase />
            <Testimonial />
            <Package />
            <FAQ />
            <Footer />

            <div className="fixed bottom-5 end-5 z-10">
                <ThemeToggleButton
                    shape="circle"
                    color="ghost"
                    className={"border border-base-content/10 text-base-content/70 hover:bg-base-content/10"}
                />
            </div>
        </>
    );
};

export default LandingPage;
