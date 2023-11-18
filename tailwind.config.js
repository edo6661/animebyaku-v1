import daisyui from 'daisyui';
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				lato: ['Lato', 'serif'],
				niconne: ['Niconne', 'cursive'],
			},
			colors: {
				main: '#272829',
				myWhite: '#fff6e0',
				greenish: '#64ccc5',
				pinky: '#F8BDEB',
			},
			backgroundColor: {
				header: '#2c2c2c',
				footer: '#282828',
				myBlack: '#070d17',
				main: '#272829',
			},
			textColor: {
				unique: '#495057',
			},
			borderColor: {
				primaryInput: '#868e96',
				primaryCard: '#495057',
			},
			gridTemplateColumns: {
				'sm-auto-fit': 'repeat(auto-fit,minmax(8rem,1fr))',
				'base-auto-fit': 'repeat(auto-fit,minmax(13rem,1fr))',
				'md-auto-fit': 'repeat(auto-fit,minmax(9.30rem,1fr))',
				'links-auto-fit': 'repeat(auto-fit,minmax(11rem,1fr))',
			},
		},
	},
	plugins: [daisyui],
	daisyui: {
		themeRoot: ':root', // The element that receives theme color CSS variables
		logs: true, // Shows info about daisyUI version and used config in the console when building your CSS4
		darkTheme: 'dark', // name of one of the included themes for dark mode
	},
};
