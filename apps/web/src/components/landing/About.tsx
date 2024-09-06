import Balancer from "react-wrap-balancer";
import Image from "next/image";
export default function About() {
	return (
		<section
			className="bg-forest-ground flex min-h-screen w-full items-center justify-center"
			id="About"
		>
			<div className="bg-about w-3/4flex-col mx-auto flex flex-col items-center justify-center px-16 py-20 font-roca">
				<div className="p-8">
					<h1 className="text-center text-3xl font-black md:text-5xl">
						About Us
					</h1>
					<h3 className="max-w-[40ch] text-wrap text-center text-lg font-bold md:px-0 md:text-2xl">
						The Rowdy Datathon is a free, weekend-long, overnight
						hackathon focused on data science wehre students can
						network, learn about data science, code, and
						collaborate!
					</h3>
				</div>
				{/* Some bears here */}
				<div>Bears here</div>
				<div className="p-8">
					<h1 className="text-center text-3xl font-black md:text-5xl">
						Who Can Attend?
					</h1>
					<h3 className="max-w-[40ch] text-center text-lg font-bold md:px-0 md:text-2xl">
						We're thrilled to invite hackers of all skill levels,
						backgrounds, and disciplines! Whether you're a seasoned
						data analyst with countless datasets under your belt or
						a newcomer eager to dive into your first one, Datathon
						has a spot just for you
					</h3>
				</div>
			</div>
		</section>
	);
}
