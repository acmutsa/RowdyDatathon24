import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config({
	path: "../../.env",
});

export default defineConfig({
	schema: "./schema.ts",
	out: "./drizzle",
	driver:"turso",
	dialect:"sqlite",
	dbCredentials:{
		url: process.env.TURSO_DATABASE_URL!,
		authToken: process.env.TURSO_AUTH_TOKEN
	},
	breakpoints: true,
});
