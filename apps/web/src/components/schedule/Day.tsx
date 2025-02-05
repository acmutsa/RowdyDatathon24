import { format, compareAsc } from "date-fns";
import { EventType } from "@/lib/types/events";
import { Badge } from "@/components/shadcn/ui/badge";
import c from "config";
import { headers } from "next/headers";
import { getClientTimeZone } from "@/lib/utils/client/shared";
import EventItem from "./EventItem";
import { VERCEL_IP_TIMEZONE_HEADER_KEY } from "@/lib/constants";
interface DayProps {
	title: string;
	subtitle: string;
	events: EventType[];
}

export default function Day({ title, subtitle, events }: DayProps) {
	const userTimeZoneHeaderKey = headers().get(VERCEL_IP_TIMEZONE_HEADER_KEY);

	const userTimeZone = getClientTimeZone(userTimeZoneHeaderKey);

	return (
		<div className="flex min-h-[60vh] w-[92%] flex-col items-center rounded-xl bg-popover px-2 pb-4 backdrop-blur transition lg:w-full">
			<h1 className="mt-5 text-4xl font-extrabold text-hackathon">
				{title}
			</h1>
			<h2 className="mb-5 text-lg text-primary">{subtitle}</h2>
			<div className="flex w-full flex-col items-center space-y-4 px-2">
				{events.length > 0 ? (
					events.map((event) => (
						<EventItem
							key={event.id}
							event={event}
							userTimeZone={userTimeZone}
						/>
					))
				) : (
					<div className="flex h-[30vh] w-full items-center justify-center">
						<h1 className="text-center text-3xl text-primary">
							No events scheduled at this time.
						</h1>
					</div>
				)}
			</div>
		</div>
	);
}
