<script lang="ts">
	import autoplay from "embla-carousel-autoplay";

	import { Carousel, Content, Item } from "$lib/components/ui/carousel";

	import Card from "$lib/components/ui/card.svelte";

	import one from "$lib/images/slide/01-en.jpg";
	import two from "$lib/images/slide/02-en.jpg";
	import three from "$lib/images/slide/03-en.jpg";
	import four from "$lib/images/slide/04-en.jpg";
	import five from "$lib/images/slide/05-en.jpg";
	import six from "$lib/images/slide/06-en.jpg";

	const slides: { src: string; alt: string }[] = [
		{ src: one, alt: "" },
		{ src: two, alt: "" },
		{ src: three, alt: "" },
		{ src: four, alt: "" },
		{ src: five, alt: "" },
		{ src: six, alt: "" }
	];

	let plugins = [
		autoplay({
			delay: 8000
		})
	];
</script>

<Carousel {plugins}>
	<Content overflow class="mx-0 gap-2">
		{#each slides as slide}
			<Item class="p-0">
				<!-- <div class="rounded-sm border bg-muted text-card-foreground shadow-sm overflow-hidden"> -->
				<Card>
					<img {...slide} />
				</Card>
			</Item>
		{/each}
	</Content>
</Carousel>
