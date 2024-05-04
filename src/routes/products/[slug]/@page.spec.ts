import { expect, test } from "@playwright/test";

const { describe, beforeEach } = test;

describe("/products/bathtubs", async () => {
	beforeEach(async ({ page }) => {
		await page.goto("/products/bathtubs");
	});

	test("heading h1", async ({ page }) => {
		await expect(page.getByRole("heading", { name: "Bathtubs" }).first()).toBeVisible({
			timeout: 20_000
		});
	});
});
