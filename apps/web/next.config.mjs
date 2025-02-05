import { fileURLToPath } from "node:url";
import createJiti from "jiti";
const jiti = createJiti(fileURLToPath(import.meta.url));

jiti("./src/env");

/** @type {import('next').NextConfig} */
const nextConfig = {
	swcMinify: true,
	transpilePackages: ["db"],
	images: {
		domains: [
			"images.clerk.dev",
			"www.gravatar.com",
			"img.clerk.com",
			"api.dicebear.com",
			"cdn.discordapp.com",
		],
		remotePatterns: [
			{
				hostname: "**.blob.vercel-storage.com",
			},
		],
	},
	experimental: {
		serverActions: {
			allowedOrigins: [
				"localhost:3000",
			],
		},
	},
};

export default nextConfig;
