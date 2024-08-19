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
		<section className="wild-gradient h-screen w-full">
			<div className="flex h-full w-full flex-col items-center">
				<div className="text-center">
					<h1 className={`text-8xl ${berkshire.className} mt-32`}>
						<ReactCurvedText
							text="Rowdy Datathon"
							width={750}
							height={225}
							cx={750 / 2}
							cy={350}
							rx={1000 / 2.5}
							ry={250}
							startOffset={160}
							reversed={true}
							textProps={{
								style: {
									// textAnchor: "middle",
								},
							}}
							// svgProps={{ className: "curved-title" }}
						/>
					</h1>
					<h2 className="font-roca mx-auto w-fit rounded-full bg-black/10 p-1 text-2xl">
						OCTOBER 5-6 @ UT SAN ANTONIO
					</h2>
				</div>
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
