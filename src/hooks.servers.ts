import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) =>
	resolve(event, { preload: ({ type }) => ["font", "js", "css"].includes(type) });
