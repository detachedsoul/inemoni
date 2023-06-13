const withPWA = require("next-pwa")({
    dest: 'public',
    register: true,
    disable: false,
    mode: 'production'
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		unoptimized: true,
	},
	trailingSlash: true,
};

module.exports = withPWA(nextConfig);
