import { derived } from "svelte/store";
import { page } from "$app/stores";

export const title = derived(page, ($page) => $page.data.title);
export const description = derived(page, ($page) => $page.data.description);
