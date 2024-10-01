import Link from "next/link";
import Image from "next/image";
import c from "config";
import { db, eq } from "db";
import { users } from "db/schema";
import { Button } from "../shadcn/ui/button";
import ProfileButton from "./ProfileButton";
import { auth, currentUser } from "@clerk/nextjs";
import NavBarLinksGrouper from "./NavBarLinksGrouper";
import { Berkshire_Swash } from "next/font/google";
import { cn } from "@/lib/utils/client/cn";

const berkshire = Berkshire_Swash({
	weight: "400",
	variable: "--font-berkshire",
	subsets: ["latin"],
});

interface NavbarProps {
	className?: string;
}

export default async function Navbar({ className }: NavbarProps) {
	const user = await currentUser();
	const dbUser = await db.query.users.findFirst({
		where: eq(users.clerkID, user?.id ?? ""),
	});
	return (
		<div className="z-50 w-screen">
			<div
				className={cn(
					`relative top-0 z-50 h-16 w-screen border-b border-b-border bg-nav ${berkshire.variable}`,
					className,
				)}
			>
				<div className="mx-auto grid h-full w-full max-w-7xl grid-flow-col grid-cols-2 px-2 sm:px-6 lg:max-w-full lg:px-8">
					<div className="col-span-2 flex items-center justify-start gap-x-5">
						<Link
							href={"/"}
							className="mr-5 flex cursor-pointer items-center gap-x-2"
						>
							<Image
								src={c.icon.svg}
								alt={c.hackathonName + " Logo"}
								width={32}
								height={32}
							/>
							{/* <div className="bg-muted-foreground h-[45%] rotate-[25deg] w-[2px]" /> */}
							<h2
								className={`${berkshire.className} text-lg font-bold`}
							>
								{c.hackathonName}
							</h2>
						</Link>
						<div className="col-span-2 hidden items-center justify-start gap-x-5 md:flex">
							<NavBarLinksGrouper />
						</div>
					</div>

					<div className="flex items-center justify-between space-x-2 font-roca md:justify-center">
						<div className="hidden gap-x-4 md:flex">
							{user ? (
								<>
									<Link href={dbUser ? "/dash" : "/register"}>
										<Button
											variant={"secondary"}
											className="rounded-none bg-forest-green hover:bg-forest-green/85"
										>
											{dbUser
												? "Dashboard"
												: "Complete Registration"}
										</Button>
									</Link>
								</>
							) : (
								<>
									<Link href={"/sign-in"}>
										<Button
											variant={"secondary"}
											className="rounded-none bg-forest-green hover:bg-forest-green/85"
										>
											Sign In
										</Button>
									</Link>
									<Link href={"/sign-up"}>
										<Button
											variant={"secondary"}
											className="rounded-none"
										>
											Register
										</Button>
									</Link>
								</>
							)}
						</div>
						<ProfileButton />
					</div>
				</div>
			</div>
		</div>
	);
}

export const runtime = "edge";
