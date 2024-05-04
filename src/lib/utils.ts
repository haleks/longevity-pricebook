import type { ClassValue } from "clsx";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { scalein } from "#actions/scalein.js";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

// Use for shadowcn-ui generate component
export const flyAndScale = scalein;

if (import.meta.vitest) {
	const { describe, it, expect } = import.meta.vitest;

	describe("utils", async () => {
		describe("cn", async () => {
			it("returns filtered class", async () => {
				expect(cn("w-full", "w-10")).to.be.a.string("w-10");
			});
		});
	});
}
