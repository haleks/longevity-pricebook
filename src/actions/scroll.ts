import type { Action } from "svelte/action";

import { browser } from "$app/environment";

export const main = browser ? document.querySelector("main#main") : null;

/**
 * Creates a scroll action configuration for Svelte.
 *
 * @param node - The HTML element to apply the transition to.
 * @param options - The callback of the transition.
 *
 * @returns The transition configuration.
 */
export const scroll = ((node, callback = () => {}) => {
	const el: HTMLElement | Window = node || main;

	el?.addEventListener("scroll", callback);

	return {
		destroy: () => el?.removeEventListener("scroll", callback)
	};
}) satisfies Action<HTMLElement | Window, (e: Event) => void>;
