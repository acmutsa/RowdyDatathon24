import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { cookies } from "next/headers";
import { cn } from "@/lib/utils/client/cn";
import { Analytics } from "@vercel/analytics/react";
import { defaultTheme } from "config";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Rowdy Datathon 2024",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const theme = cookies().get("hk_theme")?.value || defaultTheme;
	return (
		<ClerkProvider>
			<html lang="en">
				<body
					className={cn(
						"bg-forest-ground",
						theme === "dark" ? "dark" : "",
					)}
				>
					{children}
					<Analytics />
				</body>
			</html>
		</ClerkProvider>
	);
}

export const runtime = "edge";
