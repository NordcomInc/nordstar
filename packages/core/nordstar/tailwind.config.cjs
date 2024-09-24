/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
        './src/**/*.{ts,tsx}',
        //
        './**/@nordcom/**/dist/**/*.{js,jsx}'
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            height: {
                15: '3.75rem'
            },
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
            fontWeight: {
                inherit: 'inherit'
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
            },
            keyframes: {
                'scroll-shadow-inset': {
                    from: {
                        shadow: 'inset -10px 0px 10px -10px var(--header-scroll-shadow, rgb(155 155 155 / 0.75));'
                    },
                    to: {
                        shadow: 'inset 10px 0px 10px -10px var(--header-scroll-shadow, rgb(155 155 155 / 0.75));'
                    }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out'
            },
            overflow: {}
        }
    },
    future: {
        hoverOnlyWhenSupported: true
    },
    corePlugins: {
        preflight: false
    },
    plugins: []
};
