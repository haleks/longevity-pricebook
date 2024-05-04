import type { PageLoad } from "./$types";

import { fetch } from "$lib/api.js";

export const load: PageLoad = async () => {
	// fetch products categories
	const { data, error } = await fetch("https://api.longevityacrylics.com/categories");

	if (error) {
		// handle errors
	}

	return {
		...data
	};
};
