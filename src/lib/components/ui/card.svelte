<script lang="ts">
	import { cn } from "$lib/utils.js";

	let klass: string | undefined = undefined;
	export { klass as class };

	export let style: string | undefined = undefined;
</script>

<div
	class={cn("rounded-sm border bg-muted text-card-foreground shadow-sm overflow-hidden", klass)}
	{style}
>
	<slot />
</div>
