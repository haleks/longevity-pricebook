<script lang="ts">
	import type { PageData } from "./$types";

	import { fade } from "svelte/transition";
	import { quintOut } from "svelte/easing";
	import { flip } from "svelte/animate";

	import Card from "$lib/components/ui/card.svelte";
	import { Carousel, Content, Item } from "#lib/components/ui/carousel";
	import { Ruler, Weight } from "lucide-svelte";

	export let data: PageData;

	$: product = data.product;
	$: specifications = product.specifications;
</script>

<section class="grid grid-cols-1 overflow-hidden py-2 px-4 gap-4">
	<Card class="flex flex-col pb-2 gap-2">
		<!-- class:text-primary={i % 2}
				class:text-white={!(i % 2)} -->
		<Carousel>
			<Content>
				{#each product.images as image}
					<Item>
						<img src={image} alt="" />
					</Item>
				{/each}
			</Content>
		</Carousel>

		<div class="grid grid-cols-[auto_1fr] px-2 gap-2">
			<div class="col-span-2">
				<h2 class="flex items-center gap-2 text-2xl font-extrabold">
					{product.name}
					<small class="font-normal text-primary">{product.id}</small>
				</h2>

				<p class="text-sm">{product.description}</p>
			</div>

			<div class="col-span-2"></div>

			<h4 class="flex jusitfy-center items-center font-bold gap-1">
				<Ruler class="text-primary" size={16} />
				Size
			</h4>

			<div class="flex gap-2">
				<p class="text-sm"><small>Length</small> {specifications.dimensions.length}"</p>
				<p class="text-sm"><small>Width</small> {specifications.dimensions.width}"</p>
				<p class="text-sm"><small>Height</small> {specifications.dimensions.height}"</p>
			</div>

			<h4 class="flex jusitfy-center items-center font-bold gap-1">
				<Weight class="text-primary" size={16} />
				Weight
			</h4>
			<p class="text-sm">{specifications.weight} <small>Lbs</small></p>
		</div>
	</Card>
</section>
