import { SignIn } from "@clerk/nextjs";
import {
	Alert,
	AlertDescription,
	AlertTitle,
} from "@/components/shadcn/ui/alert";

import { CircleAlert } from "lucide-react";

export default function Page() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center gap-y-8">
			<Alert className="max-w-xl">
				<CircleAlert className="h-4 w-4" />
				<AlertTitle>NOTE</AlertTitle>
				<AlertDescription>
					You can sign in with just your email address below!
				</AlertDescription>
			</Alert>
			<SignIn afterSignUpUrl={"/register"} afterSignInUrl={"/dash/"} />
		</div>
	);
}

export const runtime = "edge";
