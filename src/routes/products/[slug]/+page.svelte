<script lang="ts">
	import type { PageData } from "./$types";

	import { fade } from "svelte/transition";
	import { quintOut } from "svelte/easing";
	import { flip } from "svelte/animate";

	import Card from "$lib/components/ui/card.svelte";
	import { Carousel, Content, Item } from "#lib/components/ui/carousel";

	export let data: PageData;

	$: category = data.category;
	$: products = category.products;
</script>

<section class="grid grid-cols-1 overflow-hidden py-2 px-4 gap-4">
	{#each products as { id, name, images }, i (id)}
		<div
			in:fade|global={{ duration: 200, delay: 50 * i, easing: quintOut }}
			animate:flip={{ duration: 200, easing: quintOut }}
		>
			<a href="/products/{category.slug}/{id}">
				<Card class="flex flex-col py-2 gap-2">
					<!-- class:text-primary={i % 2}
				class:text-white={!(i % 2)} -->
					<h2 class="text-2xl font-extrabold px-2">
						{name}
					</h2>

					<Carousel>
						<Content>
							{#each images as image}
								<Item>
									<img src={image} alt="" />
								</Item>
							{/each}
						</Content>
					</Carousel>
				</Card>
			</a>
		</div>
	{/each}
</section>
