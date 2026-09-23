import { test } from "@playwright/test";

test("Bai hoc 3: Todo Page", async ({ page }) => {
  await page.goto("https://material.playwrightvn.com/");
  await page.locator("//a[@href='03-xpath-todo-list.html']").click();
  await page.on("dialog", async (dialog) => dialog.accept());
  for (let i = 1; i <= 100; i++) {
    await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
    await page.locator("//button[@id='add-task']").click();
    if (i % 2 !== 0) {
      await page.locator(`//button[@id="todo-${i}-delete"]`).click();
    }
  }
});
