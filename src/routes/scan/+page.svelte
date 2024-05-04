<script lang="ts">
	import { onDestroy, onMount } from "svelte";
	import { scanner } from "#stores/scanner.js";

	import Scanner from "./scanner.svelte";
	import Button from "#lib/components/ui/button/button.svelte";

	const { scanning, permission, request, cancel } = scanner();

	onMount(async () => {
		await request();
	});

	onDestroy(() => {
		cancel();
	});
</script>

<section
	class:!bg-transparent={$scanning}
	class:place-content-center={$permission !== "granted"}
	class:justify-items-center={$permission === "granted"}
	class:items-end={$permission === "granted"}
	class="grid w-screen h-full"
>
	{#if $permission !== "granted"}
		{#if $permission === "denied"}
			<div class="grid w-full gap-4">
				<p>Permission is denied. Enable by clicking the button below</p>

				<Button on:click={async () => await request()}>Request Permission</Button>
			</div>
		{:else}
			<div class="grid w-full gap-4">
				<p>Waiting for permission.</p>

				<Button on:click={async () => await request()}>Request Permission</Button>
			</div>
		{/if}
	{:else}
		<Scanner />
	{/if}
</section>
