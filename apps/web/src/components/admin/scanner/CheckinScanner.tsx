"use client";

import { useState, useEffect } from "react";
import { QrScanner } from "@yudiel/react-qr-scanner";
import superjson from "superjson";
import { getScan, checkInUser } from "@/actions/admin/scanner-admin-actions";
import { useAction, useOptimisticAction } from "next-safe-action/hook";
import { type QRDataInterface } from "@/lib/utils/shared/qr";
import type { scansType, userType, eventType } from "@/lib/utils/shared/types";

import {
	Drawer,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/shadcn/ui/drawer";
import { Button } from "@/components/shadcn/ui/button";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { toast } from "sonner";

interface CheckinScannerProps {
	hasScanned: boolean;
	checkedIn: boolean | null;
	scanUser: userType | null;
	hasRSVP: boolean | null;
}

export default function CheckinScanner({
	hasScanned,
	checkedIn,
	scanUser,
	hasRSVP,
}: CheckinScannerProps) {
	const [scanLoading, setScanLoading] = useState(false);
	const { execute: runScanAction } = useAction(checkInUser, {});
	const [proceed, setProceed] = useState(hasRSVP);
	useEffect(() => {
		if (hasScanned) {
			setScanLoading(false);
		}
	}, [hasScanned]);

	useEffect(() => {
		setProceed((prev) => prev || hasRSVP);
	}, [hasRSVP]);

	const searchParams = useSearchParams();
	const path = usePathname();
	const router = useRouter();

	function handleScanCreate() {
		const params = new URLSearchParams(searchParams.toString());
		const timestamp = parseInt(params.get("createdAt") as string);
		if (isNaN(timestamp)) {
			return alert("Invalid QR Code Data (Field: createdAt)");
		}
		if (checkedIn) {
			return alert("User Already Checked in!");
		} else {
			// TODO: make this a little more typesafe
			runScanAction(scanUser?.clerkID!);
		}
		toast.success("Successfully Scanned User In");
		router.replace(`${path}`);
	}

	return (
		<>
			<div className="flex h-dvh flex-col items-center justify-center pt-32">
				<div className="flex w-screen flex-col items-center justify-center gap-5">
					<div className="mx-auto aspect-square w-screen max-w-[500px] overflow-hidden">
						<QrScanner
							onDecode={(result) => {
								const params = new URLSearchParams(
									searchParams.toString(),
								);
								if (!params.has("user")) {
									setScanLoading(true);
									const qrParsedData =
										superjson.parse<QRDataInterface>(
											result,
										);
									params.set("user", qrParsedData.userID);
									params.set(
										"createdAt",
										qrParsedData.createdAt
											.getTime()
											.toString(),
									);
									router.replace(
										`${path}?${params.toString()}`,
									);
								}
							}}
							onError={(error) => console.log(error?.message)}
							containerStyle={{
								width: "100vw",
								maxWidth: "500px",
								margin: "0",
							}}
						/>
					</div>
				</div>
			</div>
			<Drawer
				onClose={() => router.replace(path)}
				open={hasScanned || scanLoading}
			>
				<DrawerContent>
					{scanLoading ? (
						<>
							<DrawerHeader>
								<DrawerTitle>Loading Scan...</DrawerTitle>
								{/* <DrawerDescription></DrawerDescription> */}
							</DrawerHeader>
							<DrawerFooter>
								<Button
									onClick={() => router.replace(path)}
									variant="outline"
								>
									Cancel
								</Button>
							</DrawerFooter>
						</>
					) : (
						<>
							<DrawerHeader>
								{checkedIn ? (
									<DrawerTitle className="mx-auto">
										User already checked in!
									</DrawerTitle>
								) : (
									<>
										{!proceed ? (
											<>
												<DrawerTitle className="text-red-500">
													Warning!
												</DrawerTitle>
												<DrawerDescription>
													{scanUser?.firstName}{" "}
													{scanUser?.lastName} Is not
													RSVP'd
												</DrawerDescription>
												<DrawerFooter>
													Do you wish to proceed?
													<Button
														onClick={() => {
															setProceed(true);
														}}
														variant="outline"
													>
														Proceed
													</Button>
													<Button
														onClick={() =>
															router.replace(path)
														}
														variant="outline"
													>
														Cancel
													</Button>
												</DrawerFooter>
											</>
										) : (
											<>
												<DrawerTitle>
													New Scan
												</DrawerTitle>
												<DrawerDescription>
													New scan for{" "}
													{scanUser?.firstName}{" "}
													{scanUser?.lastName}
												</DrawerDescription>
											</>
										)}
									</>
								)}
							</DrawerHeader>
							{proceed ? (
								<>
									<DrawerFooter>
										{!checkedIn && (
											<Button
												onClick={() =>
													handleScanCreate()
												}
											>
												{"Scan User In"}
											</Button>
										)}
										<Button
											onClick={() => router.replace(path)}
											variant="outline"
										>
											Cancel
										</Button>
									</DrawerFooter>
								</>
							) : (
								<></>
							)}
						</>
					)}
				</DrawerContent>
			</Drawer>
		</>
	);
}
