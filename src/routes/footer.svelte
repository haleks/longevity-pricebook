<script lang="ts">
	import { page } from "$app/stores";

	// import { Menubar, Menu, Item } from "#lib/components/ui/menubar";
	import { Button } from "#lib/components/ui/button";
	import { Bath, Home, QrCode, Search, Menu, MapPin } from "lucide-svelte";
</script>

<!-- variant={$page.url.pathname === "/" ? "secondary" : "ghost"} -->

<nav class="grid grid-cols-4 w-full justify-around items-center bg-background gap-2 p-2 px-4">
	<Button variant="ghost" size="sm" href="/" class="h-auto p-1 transition duration-200 ease-in-out">
		<span
			class:text-primary={$page.url.pathname === "/"}
			class="flex flex-col justify-center items-center gap-1 leading-none"
		>
			<Home size={20} />
			Home
		</span>
	</Button>

	<!-- <Button variant="ghost" href="#search" class="btn h-auto">
		<span class="flex flex-col justify-center items-center gap-1 leading-none">
			<Search size={20} />
			Search
		</span>
	</Button> -->

	<!-- variant={$page.url.pathname === "/product" ? "secondary" : "ghost"} -->
	<Button
		variant="ghost"
		size="sm"
		href="/products"
		class="h-auto p-1 transition duration-200 ease-in-out"
	>
		<span
			class:text-primary={$page.url.pathname.startsWith("/products")}
			class="flex flex-col justify-center items-center gap-1 leading-none"
		>
			<Bath size={20} />
			Products
		</span>
	</Button>

	<!-- variant={$page.url.pathname === "/location" ? "secondary" : "ghost"} -->
	<Button
		variant="ghost"
		size="sm"
		href="/locations"
		class="h-auto p-1 transition duration-200 ease-in-out"
	>
		<span
			class:text-primary={$page.url.pathname === "/locations"}
			class="flex flex-col justify-center items-center gap-1 leading-none"
		>
			<MapPin size={20} />
			Locations
		</span>
	</Button>

	<!-- variant={$page.url.pathname === "/more" ? "secondary" : "ghost"} -->
	<Button
		variant="ghost"
		size="sm"
		href="/more"
		class="h-auto p-1 transition duration-200 ease-in-out"
	>
		<span
			class:text-primary={$page.url.pathname === "/more"}
			class="flex flex-col justify-center items-center gap-1 leading-none"
		>
			<Menu size={20} />
			More
		</span>
	</Button>
</nav>
