/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
		fontLoaders: [
			{
				loader: "@next/font/local",
				options: { subsets: ["latin"] }
			},
			{
				loader: "@next/font/google",
				options: { subsets: ["latin"] }
			},
		],
	},
};

module.exports = nextConfig
