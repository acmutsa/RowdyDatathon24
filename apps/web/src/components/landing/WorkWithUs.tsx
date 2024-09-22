import { Person } from "./Person";
import TeamMember from "./TeamMember";
import team from "./team.json";

export default function WorkWithUs() {
	return (
		<section className="relative min-h-screen w-full py-20">
			<div className="mx-auto w-fit px-8 pt-28">
				<div>
					<h1 className="white-arch-top flex w-full flex-col justify-end pb-8 text-center font-roca text-4xl font-bold text-forest-green md:text-5xl">
						Meet the Team
					</h1>
				</div>
				<div className="white-arch-content w-full">
					<div className="z-20 mx-auto flex max-w-xl flex-wrap content-center items-center justify-center gap-16 px-8">
						{(team.teamMembers as Person[]).map((p: Person) => (
							<TeamMember person={p} />
						))}
					</div>
				</div>
				<div className="white-arch-bottom w-full bg-[#8CA193]"></div>
			</div>
		</section>
	);
}
