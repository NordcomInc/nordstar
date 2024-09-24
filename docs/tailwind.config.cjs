/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nordcom/nordstar/**/*.{js,jsx}',
        '../node_modules/@nordcom/nordstar/**/*.{js,jsx}'
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            brightness: {
                65: '.65'
            },
            transitionProperty: {
                colors: 'color, background-color, border-color, text-decoration-color, fill, stroke, filter'
            },
            transitionDuration: {
                DEFAULT: '250ms'
            },
            fontSize: {
                inherit: 'inherit'
            },
            fontFamily: {
                DEFAULT: ['var(--font-sans, var(--font-fallback))', 'sans-serif'],
                heading: ['var(--font-heading, var(--font-sans, var(--font-fallback)))', 'sans-serif'],
                body: ['var(--font-heading, var(--font-sans, var(--font-fallback)))', 'sans-serif'],
                sans: ['var(--font-sans, var(--font-fallback))', 'sans-serif'],
                mono: ['var(--font-mono)', 'monospace']
            },
            colors: {
                foreground: {
                    DEFAULT: 'hsl(var(--color-foreground))',
                    highlight: 'hsl(var(--color-foreground-highlight))'
                },
                background: {
                    DEFAULT: 'hsl(var(--color-background))',
                    highlight: 'hsl(var(--color-background-highlight))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--color-accent-primary))',
                    foreground: 'hsl(var(--color-accent-primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--color-accent-secondary))',
                    foreground: 'hsl(var(--color-accent-secondary-foreground))'
                }
            },
            borderWidth: {
                1: 'var(--border-width-small, 1px)',
                2: 'var(--border-width, 2px)',
                4: 'var(--border-width-large, 4px)'
            },
            strokeWidth: {
                1: '0.2rem',
                2: '0.25rem',
                3: '0.35rem'
            },
            aspectRatio: {
                '3/2': '3 / 2'
            }
        }
    },
    future: {
        hoverOnlyWhenSupported: true
    },
    plugins: []
};
