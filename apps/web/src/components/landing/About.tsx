import Balancer from "react-wrap-balancer";
import Image from "next/image";
export default function About() {
	return (
		<section className="mt-20 w-full" id="About">
			<div className="bg-about mx-auto w-min">
				<div className="mx-auto flex h-full w-min flex-col items-center justify-center font-roca">
					<div className="p-8">
						<h1 className="text-center text-2xl font-black md:text-4xl">
							About Us
						</h1>
						<h3 className="w-[20ch] text-wrap text-center text-lg font-bold sm:w-[40ch] md:px-0 md:text-xl">
							The Rowdy Datathon is a free, weekend-long,
							overnight hackathon focused on data science wehre
							students can network, learn about data science,
							code, and collaborate!
						</h3>
					</div>
					<div className="flex w-full max-w-[40ch] justify-around px-6">
						<Image
							src="/design/bear_1.svg"
							alt="decorative bear"
							width={32}
							height={32}
						></Image>
						<Image
							src="/design/bear_2.svg"
							alt="decorative bear"
							width={32}
							height={32}
						></Image>
						<Image
							src="/design/bear_1.svg"
							alt="decorative bear"
							width={32}
							height={32}
						></Image>
					</div>
					<div className="p-8">
						<h1 className="text-center text-2xl font-black md:text-4xl">
							Who Can Attend?
						</h1>
						<h3 className="w-[20ch] text-center text-lg font-bold sm:w-[40ch] md:px-0 md:text-xl">
							We're thrilled to invite hackers of all skill
							levels, backgrounds, and disciplines! Whether you're
							a seasoned data analyst with countless datasets
							under your belt or a newcomer eager to dive into
							your first one, Datathon has a spot just for you
						</h3>
					</div>
				</div>
			</div>
		</section>
	);
}
