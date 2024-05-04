import type { Action } from "svelte/action";
import type { TransitionConfig } from "svelte/transition";

import { cubicOut } from "svelte/easing";

/**
 * Options for the scalein transition.
 */
export type ScaleinOptions = {
	/** The vertical translation distance in pixels. */
	y: number;
	/** The horizontal translation distance in pixels. */
	x?: number;
	/** The initial scale value. */
	start: number;
	/** The duration of the transition in milliseconds. Default is 0ms. */
	delay?: number;
	/** The duration of the transition in milliseconds. Default is 150ms. */
	duration?: number;
};

/**
 * Converts a value from one scale to another.
 *
 * @param value - The value to be converted.
 * @param scales - An array of two scales, each represented as a tuple [min, max].
 *   The first scale corresponds to the input value, and the second scale corresponds to the output value.
 *
 * @returns The converted value in the new scale.
 */
const conversion = (value: number, scales: [[number, number], [number, number]]) => {
	const [[first, last], [min, max]] = scales;

	let percentage = (value - first) / (last - first);
	percentage = percentage * (max - min) + min;

	return percentage;
};

/**
 * Creates a scalein transition configuration for Svelte.
 *
 * @param node - The HTML element to apply the transition to.
 * @param options - The options for the scalein transition.
 *
 * @returns The transition configuration.
 */
export const scalein = ((node, options) => {
	const style = getComputedStyle(node);
	const transform = style.transform === "none" ? "" : style.transform;

	return {
		destroy: () => null,
		duration: options.duration ?? 250,
		delay: options.delay ?? 0,
		easing: cubicOut,
		css: (t: number) => {
			const y = conversion(t, [
				[0, 1],
				[options.y, 0]
			]);
			const x = options.x
				? conversion(t, [
						[0, 1],
						[options.x, 0]
					])
				: 0;
			const scale = conversion(t, [
				[0, 1],
				[options.start, 1]
			]);

			return `
				transform: ${transform} translate3d(${x}px, ${y}px, 0) scale(${scale});
				opacity: ${t};
			`;
		}
	};
}) satisfies Action<HTMLElement, ScaleinOptions>;
