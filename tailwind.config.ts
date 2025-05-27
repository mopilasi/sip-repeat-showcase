
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				coral: {
					DEFAULT: '#E45A30',
					50: '#FDF4F1',
					100: '#FCE9E3',
					200: '#F8CFC2',
					300: '#F3B5A1',
					400: '#EC8266',
					500: '#E45A30',
					600: '#D14420',
					700: '#B23618',
					800: '#8F2B13',
					900: '#74220F'
				},
				cream: {
					DEFAULT: '#F7E3CF',
					50: '#FEFCFA',
					100: '#FDF9F5',
					200: '#FAF0E6',
					300: '#F7E3CF',
					400: '#F0D1A8',
					500: '#E9BF81',
					600: '#D4A65A',
					700: '#B28A47',
					800: '#8F6F38',
					900: '#755A2E'
				},
				forest: {
					DEFAULT: '#3B4A36',
					50: '#F4F6F3',
					100: '#E8ECE7',
					200: '#C7D2C4',
					300: '#A6B8A1',
					400: '#64845B',
					500: '#3B4A36',
					600: '#354330',
					700: '#2C3827',
					800: '#232D1F',
					900: '#1D2519'
				},
				sand: {
					DEFAULT: '#D1BFA3',
					50: '#F9F7F4',
					100: '#F3EFE9',
					200: '#E7DCC8',
					300: '#DBC9A7',
					400: '#C3A365',
					500: '#D1BFA3',
					600: '#BC9D6B',
					700: '#9D8355',
					800: '#7E6944',
					900: '#675537'
				}
			},
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'lora': ['Lora', 'serif'],
				'bebas': ['Bebas Neue', 'cursive'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'scale-in': {
					'0%': {
						transform: 'scale(0.95)',
						opacity: '0'
					},
					'100%': {
						transform: 'scale(1)',
						opacity: '1'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'scale-in': 'scale-in 0.4s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
