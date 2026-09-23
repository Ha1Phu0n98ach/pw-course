import { test } from "@playwright/test";

test("Bai hoc 1: Register Page", async ({ page }) => {
  await page.goto("https://material.playwrightvn.com/");
  await page.locator("//a[@href='01-xpath-register-page.html']").click();
  await page.locator("//input[@id='username']").fill("Phuong Bach");
  await page.locator("//input[@id='email']").fill("haiphuong123@yopmail.com");
  await page.locator("//input[@id='female']").check();
  await page.locator("//input[@id='reading']").check();
  await page.locator("//input[@id='traveling']").check();
  await page.locator("//select[@id='interests']").selectOption("technology");
  await page
    .locator("//select[@id='country']")
    .selectOption({ label: "Canada" });
  await page.locator("//input[@id='dob']").fill("2003-02-08");
  await page
    .locator("//input[@id='profile']")
    .setInputFiles("tests/lesson-05/file.txt");
  await page
    .locator("//textarea[@id='bio']")
    .pressSequentially("Hello Playwright");
  await page.locator("//button[@type='submit']").click();
});
