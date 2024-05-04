import type { PageLoad } from "./$types";

import { fetch } from "$lib/api.js";

export const load: PageLoad = async ({ params: { slug } }) => {
	// fetch products categories
	const { data, error } = await fetch(`https://api.longevityacrylics.com/${slug}`);

	if (error) {
		// handle errors
	}

	return {
		title: data.category.name,
		description: data.category.description,
		...data
	};
};
