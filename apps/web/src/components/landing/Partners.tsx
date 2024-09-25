import partnerData from "./partners.json";
import PartnerCard from "./PartnerCard";
import Image from "next/image";
import BorderedText from "../shared/BorderedText";

type Partner = {
	name: string;
	logo: string;
	url: string;
	tier: string;
};

export default async function Partners() {
	// Christian Walker: Aware of weird bug from 1280px to 1286 px where background dissapears
	const partners: Partner[] = [
		{
			name: "NSA",
			logo: "marathon_logo.svg",
			url: "https://www.marathonpetroleum.com/",
			tier: "Title Sponsor",
		},
	];

	return (
		<section className="relative w-full pt-20">
			<div className="w-full py-16">
				{/* <BorderedText
					text="Meet our Partners"
					borderColor="brown"
					className="font-roca text-5xl"
				/> */}
				<h1 className="text-center font-roca text-4xl font-black text-marrow md:text-5xl">
					Partnered With
				</h1>
			</div>

			<div className="no-scrollbar z-20 flex flex-wrap items-center justify-around gap-x-16 gap-y-16 px-16">
				{partnerData.partners.map((partner: Partner) => (
					<PartnerCard
						key={partner.name}
						partner={partner}
						is_title={false}
					/>
				))}
			</div>
		</section>
	);
}
