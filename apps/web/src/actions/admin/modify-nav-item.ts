"use server";

import { z } from "zod";
import { adminAction } from "@/lib/safe-action";
import { revalidatePath } from "next/cache";

import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

const metadataSchema = z.object({
	name: z.string().min(1),
	url: z.string(),
});

// Maybe a better way to do this for revalidation? Who knows.
const navAdminPage = "/admin/toggles/landing";

export const setItem = adminAction(
	metadataSchema,
	async ({ name, url }, { user, userId }) => {
		await redis.sadd("config:navitemslist", encodeURIComponent(name));
		await redis.hset(`config:navitems:${encodeURIComponent(name)}`, {
			url,
			name,
			enabled: true,
		});
		revalidatePath(navAdminPage);
		return { success: true };
	},
);

export const removeItem = adminAction(
	z.string(),
	async (name, { user, userId }) => {
		const pipe = redis.pipeline();
		pipe.srem("config:navitemslist", encodeURIComponent(name));
		pipe.del(`config:navitems:${encodeURIComponent(name)}`);
		await pipe.exec();
		// await new Promise((resolve) => setTimeout(resolve, 1500));
		revalidatePath(navAdminPage);
		return { success: true };
	},
);

export const toggleItem = adminAction(
	z.object({ name: z.string(), statusToSet: z.boolean() }),
	async ({ name, statusToSet }, { user, userId }) => {
		await redis.hset(`config:navitems:${encodeURIComponent(name)}`, {
			enabled: statusToSet,
		});
		revalidatePath(navAdminPage);
		return { success: true, itemStatus: statusToSet };
	},
);
