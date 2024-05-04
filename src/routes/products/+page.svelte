<script lang="ts">
	import type { PageData } from "./$types";

	import { fade } from "svelte/transition";
	import { quintOut } from "svelte/easing";
	import { flip } from "svelte/animate";

	import Card from "$lib/components/ui/card.svelte";

	export let data: PageData;

	$: categories = data.categories;
</script>

<section class="grid grid-cols-1 overflow-hidden py-2 px-4 gap-4">
	{#each categories as { id, name, slug, image }, i (id)}
		<div
			in:fade|global={{ duration: 200, delay: 50 * i, easing: quintOut }}
			animate:flip={{ duration: 200, easing: quintOut }}
		>
			<a href="/products/{slug}">
				<Card
					class="relative grid place-content-center h-48"
					style="background: url({image}) center center"
				>
					<h2
						class:text-primary={i % 2}
						class:text-white={!(i % 2)}
						class="text-2xl font-extrabold z-1"
					>
						{name}
					</h2>
				</Card>
			</a>
		</div>
	{/each}
</section>
