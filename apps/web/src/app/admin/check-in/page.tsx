import CheckinScanner from "@/components/admin/scanner/CheckinScanner";
import FullScreenMessage from "@/components/shared/FullScreenMessage";
import { db } from "db";
import { eq, and } from "db/drizzle";
import { events, users, scans } from "db/schema";
import { Fullscreen } from "lucide-react";

export default async function Page({
	searchParams,
}: {
	searchParams: { [key: string]: string | undefined };
}) {
	// Returns only if search params exist
	if (searchParams.user) {
		// const [isChecked, scanUser, hasRSVPed] = await db.transaction(
		// 	async (tx) => {
		const scanUser = await db.query.users.findFirst({
			where: eq(users.clerkID, searchParams.user ?? "unknown"),
		});
		if (!scanUser) {
			return <FullScreenMessage title="No User Found!" />;
		}
		const [isChecked, hasRSVPed] = [scanUser.checkedIn, scanUser.rsvp];

		return (
			<div>
				<CheckinScanner
					checkedIn={isChecked}
					hasScanned={true}
					scanUser={scanUser}
					hasRSVP={hasRSVPed}
				/>
			</div>
		);
	}
	// Fall through case
	return (
		<div>
			<CheckinScanner
				checkedIn={false}
				hasScanned={false}
				scanUser={null}
				hasRSVP={false}
			/>
		</div>
	);
}

export const runtime = "edge";
export const dynamic = "force-dynamic";
