<script lang="ts">
	import { page } from "$app/stores";
	import { title } from "#/stores/head.js";

	import logo from "$lib/images/logo/longevityacrylics-white.png";

	// import { scroll } from "#actions/scroll.js";

	import Dialog from "./search.svelte";
	// import { Input } from "#lib/components/ui/input";
	import { Button } from "#lib/components/ui/button";
	import { QrCode, Search, ArrowLeft } from "lucide-svelte";

	let open = false;
</script>

<!-- <svelte:window use:scroll={() => {}} /> -->
<!-- on:hashchange={handle_hashchange} on:focusin={handle_focus} -->

<div class="flex justify-between items-center bg-background h-12 px-4 gap-4">
	{#if $page.url.pathname === "/"}
		<img src={logo} alt="logo" class="h-6 pt-1" />
		<h1 class="sr-only">Longevity Acrylics</h1>
	{:else}
		<div class="flex items-center gap-4">
			<Button variant="ghost" size="sm" on:click={() => window.history.back()} class="h-auto p-0">
				<span class="flex flex-col justify-center items-center gap-1 leading-none text-primary-500">
					<ArrowLeft size={20} />
				</span>
			</Button>

			<h1 class="text-xl font-bold">
				{$title}
			</h1>
		</div>
	{/if}

	<div class="flex gap-2">
		<Button variant="ghost" size="sm" on:click={() => (open = true)} class="h-auto p-1">
			<span class="flex flex-col justify-center items-center gap-1 leading-none">
				<Search size={20} />
			</span>
		</Button>

		<Button variant="ghost" size="sm" href="/scan" class="h-auto p-1">
			<span class="flex flex-col justify-center items-center gap-1 leading-none">
				<QrCode size={20} />
				<!-- Scan -->
			</span>
		</Button>
	</div>

	<Dialog bind:open />
</div>
