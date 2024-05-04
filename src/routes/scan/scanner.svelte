<script lang="ts">
	import { scanner } from "#/stores/scanner.js";
	// import { onMount } from "svelte";
	import { goto } from "$app/navigation";

	import { Button } from "#lib/components/ui/button";

	const { scan, cancel } = scanner();

	const scanned = async () => {
		const response = await scan();

		await goto(`/products/bathtubs/1000?scan=${JSON.stringify(response)}`);
	};
</script>

{#await scanned()}
	<div
		class="size-24 p-24 border border-8 bg-transparent"
		style="-webkit-mask:
    conic-gradient(at 3rem 3rem,#0000 75%,#000 0)
    0 0/calc(100% - 3rem) calc(100% - 3rem),
    linear-gradient(#000 0 0) content-box;"
	>
		<!--  -->
	</div>

	<div class="p-4">
		<Button
			on:click={async () => {
				await cancel();
				window.history.back();
			}}
		>
			Cancel
		</Button>
	</div>
{/await}
