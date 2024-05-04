import type { LayoutLoad } from "./$types";

import { dev } from "$app/environment";

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

export const load: LayoutLoad = async ({ params }) => {
	return {
		title: "More",
		description: "More"
	};
};
