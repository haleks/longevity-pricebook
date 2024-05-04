<script lang="ts">
	import "../app.css";

	import { fade } from "svelte/transition";
	import { page } from "$app/stores";
	import { scanner } from "#stores/scanner.js";

	const { scanning } = scanner();

	$: pathname = $page?.url?.pathname;

	import Footer from "./footer.svelte";
	import Header from "./header.svelte";
</script>

<svelte:head>
	<title>{$page.data.title}</title>
	<meta name="description" content={$page.data.description} />
</svelte:head>

<div class:!bg-transparent={$scanning} class="flex flex-col w-screen h-screen bg-muted/40">
	<header class="">
		<Header />
	</header>

	{#key pathname}
		<main
			class:!bg-transparent={$scanning}
			class="grow overflow-x-hidden pb-16"
			in:fade={{ duration: 150 }}
			out:fade={{ duration: 0 }}
		>
			<slot />
		</main>
	{/key}

	<footer class="fixed inset-x-0 bottom-0">
		<Footer />
	</footer>
</div>
