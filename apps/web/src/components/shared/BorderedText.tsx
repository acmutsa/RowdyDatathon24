import { cn } from "@/lib/utils/client/cn";

type Props = {
	text: string;
	borderColor?: string;
	className?: string;
};

export default function BorderedText({ text, className, borderColor }: Props) {
	return (
		<div className={cn("text-center", className ?? "")}>
			<h2 className={cn("relative")}>
				{text}
				<h2
					className={cn(
						"no-select absolute inset-0",
						`font-semibold text-[${borderColor ?? "inherit"}]`,
					)}
				>
					{text}
				</h2>
			</h2>
		</div>
	);
}
