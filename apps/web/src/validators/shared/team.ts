import { z } from "zod";

export const newTeamValidator = z.object({
	name: z
		.string()
		.min(3, {
			message: "Team name must be at least 3 characters long",
		})
		.max(50, {
			message: "Team name must be less than 50 characters long",
		})
		.regex(/^[a-zA-Z0-9 ]+$/, {
			message: "Team name must be alphanumeric and have no special characters",
		}),
	tag: z
		.string()
		.min(3, {
			message: "Team Tag must be at least 3 characters long",
		})
		.max(25, {
			message: "Team Tag must be less than 25 characters long",
		})
		.regex(/^[a-zA-Z0-9]+$/, {
			message: "Team Tag must be alphanumeric and have no spaces",
		}),
	photo: z.string().url(),
});