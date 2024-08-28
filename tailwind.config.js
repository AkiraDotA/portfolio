/** @type {import('tailwindcss').Config} */
module.exports = {
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
			},
			colors: {
				darkred: {
					DEFAULT: '#991b1b',
					100: '#8A1919',
					200: '#7A1616',
					300: '#6B1414',
					400: '#5C1212',
					500: '#4D0F0F',
					600: '#3D0D0D',
				},
				waveblack: {
					DEFAULT: '#121212',
				},
			},
			animation: {
				rotate: 'rotate 4s linear infinite',
			},
			keyframes: {
				rotate: {
					'0%': { transform: 'rotate(0deg) scale(360)' },
					'100%': { transform: 'rotate(-360deg) scale(360)' },
				},
			},
		},
	},
};
