import type { PermissionState, ScanOptions, Scanned } from "@tauri-apps/plugin-barcode-scanner";

import { writable, get } from "svelte/store";
import {
	scan,
	checkPermissions,
	requestPermissions,
	cancel,
	Format
} from "@tauri-apps/plugin-barcode-scanner";

export type MessageParams = {
	cancel: typeof cancel;
};

export type ErrorParams = {
	cancel: typeof cancel;
};

export type ScannerOptions = ScanOptions & {
	message?: (params: MessageParams) => void;
	error?: (error: Error, params: ErrorParams) => void;
};

const permission = writable<PermissionState>("prompt");
const response = writable<Scanned>(undefined);
const scanning = writable(false);

export const store = (opts?: ScannerOptions) => {
	const check = async () => {
		const state = await checkPermissions();

		permission.set(state);
	};

	const request = async () => {
		await check();

		if (get(permission) !== "granted") {
			const state = await requestPermissions();

			permission.set(state);
		}
	};

	const abort = async () => {
		scanning.set(false);

		return cancel();
	};

	const error = async (err: Error, opts?: ScannerOptions) => {
		if (opts?.error) {
			opts.error(err, { cancel });
			return;
		}

		await abort();
	};

	return {
		permission,
		scanning,
		response,
		error,
		check,
		request,
		cancel: abort,
		async scan(opts?: ScanOptions) {
			await request();

			if (get(permission) === "granted") {
				opts = { windowed: true, formats: [Format.QRCode], ...opts };

				scanning.set(true);
				const res = await scan(opts).catch((err) => error(err, opts));
				scanning.set(false);

				if (res) {
					response.set(res);
				}

				return res;
			}
		}
	};
};

let instance: ReturnType<typeof store>;

export const scanner = (opts?: ScannerOptions) => {
	if (!instance) {
		instance = store(opts);
	}

	return instance;
};
