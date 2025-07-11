/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                robo: ["Roboto", "serif"],
            },
        },
        boxShadow: {
            "custom-inner": "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
        },
    },
    plugins: [],
};
