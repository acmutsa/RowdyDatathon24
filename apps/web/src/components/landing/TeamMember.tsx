import { Person } from "./Person";
import Link from "next/link";

import { Oswald } from "next/font/google";
import Image from "next/image";

const oswald = Oswald({
	variable: "--font-oswald",
	subsets: ["latin"],
});

export default function TeamMember({ person }: { person: Person }) {
	return (
		<Link
			href={person.website}
			target="_blank"
			className={`duration-350 group font-semibold opacity-100 transition ease-in-out hover:-translate-y-8`}
		>
			<div className="aspect-square w-32 rounded-3xl bg-forest-green p-0">
				<Image
					src={`/img/team/${person.imgLink}`}
					className="mx-auto h-full w-full rounded-3xl"
					alt={`${person.fname} logo`}
					quality={100}
					width={1024}
					height={1024}
				/>
			</div>
			<span className="text-forest-green">
				<p className="text-center">
					{person.fname} {person.lname}
				</p>
				<p className="text-center font-thin">{person.role}</p>
			</span>
		</Link>
	);
}
