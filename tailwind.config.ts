import daisyuiPlugin from "daisyui";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

import { getDaisyUIConfig } from "./src/lib/theme";

const myPlugin = plugin(function ({ addVariant, e }) {
    addVariant("svg-path", [
        // @ts-ignore
        ({ modifySelectors, separator }: any) => {
            modifySelectors(({ className }: any) => {
                return `svg.${e(`svg-path${separator}${className}`)} *`;
            });
        },
    ]);
});

const config: Config = {
    content: [
        "node_modules/daisyui/dist/**/*.js",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {

        extend: {
            colors: {
                gray: {
                    DEFAULT: '#1E2328CC', // Custom gray color
                    ...require('tailwindcss/colors').gray, // Import default gray colors
                },
            },
            fontSize: {
                xs: "11px",
                sm: "13px",
                base: "15px",
            },
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                md: "3rem",
                lg: "4rem",
                xl: "5rem",
                "2xl": "6rem",
            },
        },
        fontFamily: {
            body: ["DM Sans", "sans-serif"],
        },
    },
    darkMode: "class",
    daisyui: getDaisyUIConfig(),
    plugins: [daisyuiPlugin, myPlugin],
};
export default config;
