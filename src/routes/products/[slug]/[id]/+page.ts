import type { PageLoad } from "./$types";

import { fetch } from "$lib/api.js";

export const load: PageLoad = async ({ params: { slug, id } }) => {
	// fetch products categories
	const { data, error } = await fetch(`https://api.longevityacrylics.com/${slug}/${id}`);

	if (error) {
		// handle errors
	}

	return {
		title: data.product.name,
		description: data.product.description,
		...data
	};
};
