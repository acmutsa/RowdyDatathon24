import { RegistrationToggles } from "@/components/admin/toggles/RegistrationSettings";
import { parseRedisBoolean } from "@/lib/utils/server/redis";

import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export default async function Page() {
	const pipe = redis.pipeline();
	pipe.get("rowdydatathon_24_config:registration:registrationEnabled");
	pipe.get("rowdydatathon_24_config:registration:secretRegistrationEnabled");
	// const result = await pipe.exec();

	const [
		defaultRegistrationEnabled,
		defaultSecretRegistrationEnabled,
		defaultRSVPsEnabled,
	]: (string | null)[] = await redis.mget(
		"rowdydatathon_24_config:registration:registrationEnabled",
		"rowdydatathon_24_config:registration:secretRegistrationEnabled",
		"rowdydatathon_24_config:registration:allowRSVPs",
	);

	return (
		<div>
			<div className="flex items-center justify-start pb-10">
				<h2 className="text-3xl font-bold tracking-tight">
					Registration & Sign-in
				</h2>
			</div>
			<RegistrationToggles
				defaultRegistrationEnabled={parseRedisBoolean(
					defaultRegistrationEnabled,
					true,
				)}
				defaultSecretRegistrationEnabled={parseRedisBoolean(
					defaultSecretRegistrationEnabled,
					false,
				)}
				defaultRSVPsEnabled={parseRedisBoolean(
					defaultRSVPsEnabled,
					true,
				)}
			/>
		</div>
	);
}

export const runtime = "edge";
