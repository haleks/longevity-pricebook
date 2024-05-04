import { expect, test } from "@playwright/test";

const { describe, beforeEach } = test;

describe("/products", async () => {
	beforeEach(async ({ page }) => {
		await page.goto("/products/bathtubs/1000");

		// page.getByRole("link", { name: "products" }).click();
		// page.getByRole("link", { name: "products/bathtubs" }).click();
	});

	test("heading h1", async ({ page }) => {
		await expect(page.getByRole("heading", { name: "Ambassador" }).first()).toBeVisible({
			timeout: 20_000
		});
	});
});
