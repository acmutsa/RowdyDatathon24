import type { NavItemToggleType } from "@/validators/shared/navitemtoggle";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export async function getAllNavItems() {
	const keys = await redis.smembers<string[]>(
		"rowdydatathon_24_config:navitemslist",
	);
	if (!keys || keys.length < 1) {
		return {
			keys: [],
			items: [],
		};
	}
	const pipe = redis.pipeline();
	for (const key of keys) {
		pipe.hgetall(`rowdydatathon_24_navitems:${key}`);
	}
	const items = await pipe.exec<NavItemToggleType[]>();
	return {
		keys,
		items,
	};
}

export function parseRedisBoolean(
	value: string | boolean | undefined | null,
	defaultValue?: boolean,
) {
	if (typeof value === "string") {
		if (value === "true") return true;
		if (value === "false") return false;
	}
	if (typeof value === "boolean") return value;
	return defaultValue !== undefined ? defaultValue : false;
}
