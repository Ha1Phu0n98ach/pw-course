import {test} from '@playwright/test'

test("Bai hoc 4: Personal notes", async({page}) => {
    await page.goto("https://material.playwrightvn.com/");
    await page.locator("//a[@href='04-xpath-personal-notes.html']").click();

    const noteData = [
        {actionName: "click", description: "Hàm click dùng để thực hiện click vào các phần tử trên trang wen"},
        {actionName: "fill", description: "Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web"},
        {actionName: "type", description: "Hàm type dùng để nhập từng ký tự vào một phần tử, mô phỏng hành vi gõ phím thực tế của người dùng"},
        {actionName: "hover", description: "Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover"},
        {actionName: "check", description: "Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked"},
        {actionName: "uncheck", description: "Hàm uncheck dùng để bỏ đánh đáu checkbox, đảm bảo phần tử ở trạng thái unchecked"},
        {actionName: "selectOption", description: "Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown"},
        {actionName: "press", description: "Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác"},
        {actionName: "dbclick", description: "Hàm dbclick dùng để thực hiện double click (nhấn đúp chuột) vào phần tử trên trang web"},
        {actionName: "dragAndDrop", description: "Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web"},
    ];

    for (const note of noteData) {
        await page.locator("//input[@id='note-title']").fill(note.actionName);
        await page.locator("//textarea[@id='note-content']").fill(note.description);
        await page.locator("//button[@id='add-note']").click();
    }

    await page.locator("//input[@id='search']").fill("click");
    await page.locator("//input[@id='search']").clear();
        await page.locator("//input[@id='search']").fill(" Hàm dbclick");
});