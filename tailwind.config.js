/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.js", "./components/**/*.js"],
	theme: {
		extend: {
			colors: {
				"brand-orange": "#fb9129",
				"brand-purple": "#6912aa",
				"brand-gray": "#eeeeee",
				"brand-black": "#1c1c1c",
				"brand-navlink": "#262c55",
				"brand-dark-purple": "#0a0e27",
				"notification-red": "#ff0000",
				"notification-green": "#29c57a",
				"footer-border": "#c3c3c3"
			},
			fontFamily: {
				moderat: ["var(--font-moderat)"],
				millik: ["var(--font-millik)"],
				"DMSerifDisplay": ["var(--font-dm-serif-display)"],
			},
		},
	},
	plugins: [],
};
