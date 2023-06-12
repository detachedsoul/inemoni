const withPWA = require("next-pwa")({
    dest: 'public',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		unoptimized: true,
	},
	trailingSlash: true,
};

module.exports = withPWA(nextConfig);
