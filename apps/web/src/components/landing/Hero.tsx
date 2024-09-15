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
		<section className="hero-section relative z-0 h-screen w-full">
			<Image
				src={"/design/hero_forest.svg"}
				alt="Forest"
				width={0}
				height={0}
				className="absolute bottom-0 left-1/2 z-10 w-[200dvh] -translate-x-1/2 lg:-top-1/2"
			></Image>
			<div className="z-50 flex w-full flex-col items-center">
				<div className="z-50 mt-32 w-full text-center">
					<Image
						src={"/design/hero_title.svg"}
						width={750}
						height={32}
						alt="Rowdy Datathon"
						className="mx-auto h-auto w-3/4"
					></Image>

					<h2 className="z-20 mx-auto w-fit rounded-full bg-woody/10 p-1 font-roca text-2xl">
						OCTOBER 5-6 @ UT SAN ANTONIO
					</h2>
				</div>
				<Link
					href="/sign-up"
					className="z-20 mt-16 rounded-full bg-woody p-4 text-xl"
				>
					<h4>Register Now!</h4>
				</Link>
			</div>
			{/* <div className="absolute top-[85dvh] flex w-full flex-wrap items-center justify-center gap-x-2 gap-y-4">
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
			</div> */}
			<div className="fixed bottom-0 left-0 z-50 p-8 text-center hover:scale-125">
				<Link href="https://2023.rowdydatathon.org" className="z-50">
					<Image
						src="/design/rd23_ghost.svg"
						width={64}
						height={64}
						className="hover:drop-shadow-white mx-auto hover:drop-shadow-lg"
						alt="Cowboy ghost from Rowdy Datathon 2023"
					></Image>
					<h5>Previous year</h5>
				</Link>
			</div>
			<Image
				src={"/design/grass_top.svg"}
				alt="Forest floor"
				width={0}
				height={0}
				className="absolute bottom-0 left-0 h-[60dvh] w-screen"
			></Image>
		</section>
	);
}
