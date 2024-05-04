import { expect, test } from "@playwright/test";

const { describe, beforeEach } = test;

describe("/locations", async () => {
	beforeEach(async ({ page }) => {
		// csr set to false need to naviage manually
		await page.goto("/");
		page.getByRole("link", { name: "locations" }).click();
	});

	test("heading h1", async ({ page }) => {
		await expect(page.getByRole("heading", { name: "Locations" })).toBeVisible({
			timeout: 20_000
		});
	});
});
