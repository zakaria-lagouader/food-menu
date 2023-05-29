import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
import flowbite from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
        "./node_modules/flowbite/**/*.js",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                "medium-sea-green": {
                    100: "#c3ebd2",
                    200: "#9bdeb4",
                    300: "#7dd49e",
                    400: "#5fca88",
                    500: "#37bd6a",
                },
                "pale-orange": {
                    100: "#ffe6cc",
                    200: "#fed5aa",
                    300: "#fec991",
                    400: "#febd78",
                    500: "#feac56",
                },
                "chinese-black": {
                    100: "#b7b9b8",
                    200: "#888b89",
                    300: "#656866",
                    400: "#414543",
                    500: "#121714",
                },
                "mist-blue": {
                    100: "#d2d3d7",
                    200: "#b4b6bd",
                    300: "#9ea0aa",
                    400: "#888a96",
                    500: "#6a6d7c",
                },
            },
        },
    },

    plugins: [forms, flowbite],
};
