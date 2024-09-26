import { getAllNavItems } from "@/lib/utils/server/redis";
import NavbarItem from "./NavbarItem";
import Link from "next/link";
import { Button } from "../shadcn/ui/button";

export default async function NavBarLinksGrouper() {
	const nav = await getAllNavItems();
	const toRender: React.ReactNode[] = [];
	for (const item of nav.items) {
		if (item.enabled) {
			toRender.push(
				<Link
					key={item.name}
					href={item.url}
					className="align-text-middle h-min font-roca text-sm leading-tight text-muted-foreground hover:underline"
				>
					{item.name}
				</Link>,
			);
		}
	}
	return <>{toRender}</>;
}

export const runtime = "edge";
export const revalidate = 30;
