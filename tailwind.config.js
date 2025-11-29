/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'playfair': ['"Playfair Display"', 'serif'],
                'inter': ['Inter', 'sans-serif'],
            },
            colors: {
                primary: {
                    50: '#fef7ee',
                    100: '#fdecd3',
                    200: '#fad6a5',
                    300: '#f7ba6d',
                    400: '#f39333',
                    500: '#f0760b',
                    600: '#e15a01',
                    700: '#ba4204',
                    800: '#94340b',
                    900: '#782d0c',
                },
                dark: {
                    900: '#0a0a0a',
                    800: '#1a1a1a',
                    700: '#2a2a2a',
                }
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}
