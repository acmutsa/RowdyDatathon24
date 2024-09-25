import LandingNavbar from "@/components/shared/LandingNavbar";
import Hero from "@/components/landing/Hero";

import About from "@/components/landing/About";

import Partners from "@/components/landing/Partners";
import Footer from "@/components/landing/Footer";
import MLHBadge from "@/components/landing/MLHBadge";

import { Berkshire_Swash, Oswald } from "next/font/google";
import WorkWithUs from "@/components/landing/WorkWithUs";

const berkshire = Berkshire_Swash({
	weight: "400",
	variable: "--font-berkshire",
	subsets: ["latin"],
});

const oswald = Oswald({
	variable: "--font-oswald",
	subsets: ["latin"],
});

export default function Home() {
	return (
		<div className={`${oswald.className} bg-forest-ground overflow-hidden`}>
			<LandingNavbar />
			{/* <MLHBadge /> */}
			<main>
				<Hero />

				<About />
				<Partners />
				<WorkWithUs />
				{/* <Footer /> */}
			</main>
		</div>
	);
}

export const runtime = "edge";
export const revalidate = 300;
