import { test } from "@playwright/test";

test("Bai hoc 2: Product Page", async ({ page }) => {
  await page.goto("https://material.playwrightvn.com/");
  await page.locator("//a[@href='02-xpath-product-page.html']").click();
  await page.locator("//button[@data-product-id='1']").click({ clickCount: 2 });
  await page.locator("//button[@data-product-id='2']").click({ clickCount: 3 });
  await page.locator("//button[@data-product-id='3']").click({ clickCount: 1 });
});
