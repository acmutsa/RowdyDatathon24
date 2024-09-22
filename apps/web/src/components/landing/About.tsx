import Image from "next/image";
export default function About() {
	return (
		<section className="min-h-screen w-full py-20">
			<div className="mx-auto w-fit">
				<div className="green-arch-top w-full"></div>
				<div className="green-arch-content w-full font-roca">
					<div className="w-fit p-8">
						<div className="p-8">
							<h1 className="text-center text-2xl font-black md:text-4xl">
								About Us
							</h1>
							<h3 className="w-[20ch] text-wrap text-center text-lg font-bold sm:w-[40ch] md:px-0 md:text-xl">
								The Rowdy Datathon is a free, weekend-long,
								overnight hackathon focused on data science
								where students can network, learn about data
								science, code, and collaborate!
							</h3>
						</div>
						<div className="flex w-full justify-around px-6">
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
								levels, backgrounds, and disciplines! Whether
								you're a seasoned data analyst with countless
								datasets under your belt or a newcomer eager to
								dive into your first one, Datathon has a spot
								just for you
							</h3>
						</div>
					</div>
				</div>
				<div className="green-arch-bottom w-full bg-[#EFD6CA]"></div>
			</div>
		</section>
	);
}
