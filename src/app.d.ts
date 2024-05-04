// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

/// <reference types="svelte-gestures" />

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			title: string;
			description: string;
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
