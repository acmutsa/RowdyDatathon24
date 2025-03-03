"use server";

import { z } from "zod";
import { adminAction } from "@/lib/safe-action";
import { revalidatePath } from "next/cache";

import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();


const defaultRegistrationToggleSchema = z.object({
	enabled: z.boolean(),
});

export const toggleRegistrationEnabled = adminAction(
	defaultRegistrationToggleSchema,
	async ({ enabled }, { user, userId }) => {
		await redis.set("config:registration:registrationEnabled", enabled);
		revalidatePath("/admin/toggles/registration");
		return { success: true, statusSet: enabled };
	},
);

export const toggleRegistrationMessageEnabled = adminAction(
	defaultRegistrationToggleSchema,
	async ({ enabled }, { user, userId }) => {
		await redis.set("config:registration:registrationMessageEnabled", enabled);
		revalidatePath("/admin/toggles/registration");
		return { success: true, statusSet: enabled };
	},
);

export const toggleSecretRegistrationEnabled = adminAction(
	defaultRegistrationToggleSchema,
	async ({ enabled }, { user, userId }) => {
		await redis.set("config:registration:secretRegistrationEnabled", enabled);
		revalidatePath("/admin/toggles/registration");
		return { success: true, statusSet: enabled };
	},
);

export const toggleRSVPs = adminAction(
	defaultRegistrationToggleSchema,
	async ({ enabled }, { user, userId }) => {
		await redis.set("config:registration:allowRSVPs", enabled);
		revalidatePath("/admin/toggles/registration");
		return { success: true, statusSet: enabled };
	},
);
