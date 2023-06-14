const withPWA = require("next-pwa")({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
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

module.exports = process.env.NODE_ENV === 'production' ? withPWA(nextConfig) : nextConfig;
