/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            screens: {
                "mdl": "900px"
            },
            width: {
                "144": '36rem',
                "128": '32rem',
                "112": '28rem',
                "100": '25rem',
            },
            height: {
                "144": '36rem',
                "128": '32rem',
                "112": '28rem',
                "100": '25rem',
            },
            colors: {
                "main": "#0c2c3e",
                "cyan": "#56D5F1",
                "gray-blue": "#9ec8d2",
                "primary": "#ecf4f9",
                "coral": "#fd7f7d",
                "verdeAgua" : "#9ec8d1",
                "clear-sky": "#f1f8fe"
            }
        },
    },
    plugins: [],
}

