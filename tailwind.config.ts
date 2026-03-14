import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#050505",
                foreground: "#ffffff",
                neon: {
                    DEFAULT: "#DEFF9A",
                    glow: "rgba(222, 255, 154, 0.5)",
                },
                surface: "#121212",
                dark: "#050505",
                card: "#121212",
                cardHover: "#1a1a1a",
            },
            fontFamily: {
                sans: ["var(--font-urbanist)", "sans-serif"],
                heading: ["var(--font-montserrat)", "sans-serif"],
            },
            boxShadow: {
                neon: "0 0 20px -5px rgba(222, 255, 154, 0.5)",
                "neon-strong": "0 0 40px -10px rgba(222, 255, 154, 0.8)",
            },
        },
    },
    plugins: [],
};
export default config;
