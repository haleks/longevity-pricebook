<script lang="ts">
	import type { Categories } from "#lib/api.js";

	import { fetch } from "#lib/api.js";
	import { Dialog, Input, List, Empty, Group, Item } from "#lib/components/ui/command";
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";
	import { writable } from "svelte/store";

	let klass: string | undefined = undefined;
	export { klass as class };

	export let open = false;
	let value = "";

	const categories = writable<Categories[]>([]);

	onMount(async () => {
		const { data, error } = await fetch("https://api.longevityacrylics.com/categories");

		if (error) {
			// handle errors
		}

		categories.set(data.categories);
	});
</script>

<Dialog bind:open>
	<Input bind:value placeholder="Search..." class={klass} />
	<List>
		<Empty>{value} not found.</Empty>

		<Group heading="Categories">
			{#each $categories as { name, url }}
				<Item value={name}>
					<a
						href="#"
						on:click={async () => {
							console.log("CLICKED");
							open = false;
							await goto(url);
						}}
					>
						{name}
					</a>
					<!--  -->
				</Item>
			{/each}
		</Group>
	</List>
</Dialog>
