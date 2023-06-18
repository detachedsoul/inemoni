/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.js", "./components/**/*.js"],
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
				"footer-border": "#c3c3c3",
				"dropdown-hover": "rgba(105, 18, 170, 0.05)",
				"dropdown-shadow": "0px 5px 20px 10px rgba(0, 0, 10, 0.05)",
			},
			keyframes: {
				slideUp: {
					from: {
						"transform": "translateY(-150%)",
						"overflow-y": "hidden"
					},
					to: {
						"transform": "translateY(0)"
					},
				},
				slideDown: {
					from: {
						"transform": "translateY(0)"
					},
					to: {
						"transform": "translateY(-150%)",
						"overflow-y": "hidden"
					},
				},
			},
			animation: {
				slideUp: "slideUp 0s linear forwards",
				slideDown: "slideDown 0s linear forwards",
			},
            backgroundImage: {
                "team-bg": "url('../public/img/team-members-bg.png')",
                "sidebar": "url('../public/img/sidebar-pattern-img.png')",
            },
		},
	},
	plugins: [
		require("@tailwindcss/forms")({
			strategy: "class",
		}),
	],
};
