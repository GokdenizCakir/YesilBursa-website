/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'node_modules/flowbite-react/lib/esm/**/*.js',
	],
	theme: {
		extend: {
			colors: {
				customWhite: '#f6fafc',
				customGray: '#4D4D6C',
				customPrimary: '#050a30',
				customNavy: '#050a30',
				// customGray: '#4D4D6C',
			},
		},
	},
	plugins: [
		// ...
		require('flowbite/plugin'),
	],
};
