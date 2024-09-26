import Link from "next/link";

interface NavbarItemProps {
	link: string;
	children: React.ReactNode;
}

export default function NavbarItem({ children, link }: NavbarItemProps) {
	return (
		<Link
			href={link}
			className="font-roca text-sm text-muted-foreground hover:text-secondary hover:underline"
		>
			{children}
		</Link>
	);
}
