<script lang="ts">
	import Carousel from "./carousel.svelte";
	import Card from "$lib/components/ui/card.svelte";

	import who from "$lib/images/card/who-we-are-en.jpg";
	import why from "$lib/images/card/why-should-you-care-en.jpg";
</script>

<section class="grid grid-cols-1 overflow-hidden py-2 px-4 gap-4">
	<Carousel />

	<Card>
		<h2 class="text-md font-extrabold tracking-tight p-2">Acrylic Bathware</h2>
		<img src={who} alt="" />
		<p class="text-sm font-light p-2">What is the difference and why you should care.</p>
	</Card>

	<Card>
		<h2 class="text-md font-extrabold tracking-tight p-2">Documents</h2>
		<img src={why} alt="why" />
		<p class="text-sm font-light p-2">Reference and Installation Guides.</p>
	</Card>
</section>
