"use client";
import Image from "next/image";
import Link from "next/link";
import { Berkshire_Swash } from "next/font/google";
import ReactCurvedText from "react-curved-text";
import { Button } from "../shadcn/ui/button";

const berkshire = Berkshire_Swash({
	weight: "400",
	variable: "--font-berkshire",
	subsets: ["latin"],
});

export default function Hero() {
	return (
		<section className="hero-section relative -z-10 h-screen w-full">
			{/* <Image
				src="/design/trees_bg.svg"
				width={100}
				height={100}
				alt="Trees"
				className="absolute bottom-0 -z-10 w-full"
			></Image> */}
			<div className="z-10 flex h-full w-full flex-col items-center">
				<div className="mt-32 w-full text-center">
					<Image
						src={"/design/datathon_title.svg"}
						width={750}
						height={32}
						alt="Rowdy Datathon"
						className="mx-auto h-auto w-3/4"
					></Image>
					<h2 className="font-roca z-10 mx-auto w-fit rounded-full bg-black/10 p-1 text-2xl">
						OCTOBER 5-6 @ UT SAN ANTONIO
					</h2>
				</div>
				<Link
					href="/sign-up"
					className="bg-forest-green z-10 mt-16 rounded-full p-2"
				>
					<h4>Click Here To Register!</h4>
				</Link>
			</div>
			<div className="absolute top-[85dvh] flex w-full flex-wrap items-center justify-center gap-x-2 gap-y-4">
				<div className="max-h-[50px] overflow-hidden">
					<Link
						href={
							"https://vercel.com/?utm_source=ACM%20UTSA&utm_campaign=oss"
						}
					>
						<img
							src="/img/powered-by-vercel.svg"
							alt="Powered by Vercel"
							className="overflow-hidden rounded-lg border border-[#5D5D5D] bg-black"
						/>
					</Link>
				</div>
			</div>
		</section>
	);
}
