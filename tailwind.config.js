/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            screens:{
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
                "primary": "#ecf4f9",
                "coral": "#fd7f7d",
                "verdeAgua" : "#9ec8d1"
            }
        },
    },
    plugins: [],
}

