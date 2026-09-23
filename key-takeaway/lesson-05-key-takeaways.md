# Playwright basic syntax

### Navigate
```
test.descibe('Navigate tests', async() => {
    test("Navigate basic", async ({page}) => {
        await page.goto('https://google.com');
    })

    test("Navigate with option - referer", async({page}) => {
        await page.goto("https://google.com", {
            referer: "https://playwrightvn.com"
        });
    }); 
// vao tab network xem phan doc

    test("Navigate with option - timeout", async ({page}) => {
        await page.goto("https://google.com", {timeout: 1_000});
    });

    test("Navigate with option - waitUntil", async({page}) => {
        await page.goto("https://google.com", { waitUntil: "commit"});
    });
});
```
1. commit: nhận được dữ liệu, bắt đầu tải document. 
- Dùng khi chỉ cần biết server đã response, không quan tâm nội dung trang, kiểm tra direct. 
- Không dùng khi cần phải tương tác với elements
2. domcontentloaded: dom đã sẵn sàng, có thể truy cập element
- Dùng khi cần tương tác với elements ngay. Không cần đợi images/CSS load hết. Trang có nhiều tài nguyên nặng
- Không dùng khi: Cần đợi images, fonts hiển thị đúng
3. load: Tất cả các tài nguyên đã tải xong
- Dùng khi muốn chắc chắn trang hiển thị đầy đủ, cần chụp screenshot, test giao diện, 90% trường hợp dùng option này
4. networkidle: không còn network activity trong 
- Không nên dùng vì chậm không cần thiết, không đáng tin cậy (polling requests, analytics), trang có websocket/SSE sẽ không bao giờ idle
- Chỉ dùng khi trang load data qua AJAX sau khi render, biết chắc trang sẽ idle, nhưng tốt hơn nên dùng page.waitForResponse() thay thế

### Locate
```
page.locator("//input[@id = 'id']");
```

### Click
```
test.describe('Click tests', async() => {
    test("Click basic, async ({page}) => {
        await page.goto("https://google.com");

        const clickArea = page.locator("//div[@id='clickArea']");

        await clickArea.click();
        await clickArea.click({ button: "right"});
        await clickArea.click({ button: "middle"});
        await clickArea.click({clickCount: 100});
        await clickArea.click({delay: 3_000});
        await clickArea.click({force:true});
        await clickArea.click({modifiers: ['Alt']});
        await cickArea.click({position: {x: 100, y: 100}});
        await clickArea.click({trial: true});
    });
});
```
- Điều kiện để có thể click được là phần tử đó phả visible, stable, receives event, enable

### Input
#### Input text
- Có 3 loại input: Fill(), press(), pressSequentially()
```
test.describe('Input tests', async() =>{
    test("Text-based", async({page}) => {
        await page.goto("https://google.com");
        const input = page.locator("//input[@id='username']");

        // Normal fill
        await input.fill("HocTest.com");

        // With option
        await input.fill("HocTest.com", {
            force: true,
            timeout: 10_000,
        });

        await input.press("a", {
            delay: 3_000,
            timeout: 10_000,
        });

        await input.pressSequentially("HocTest.com", {
            delay: 300,
            timeout: 10_000,
        });
    });
});
```
- Auto-waiting chờ cho element visible, Enable, Editable rồi mới fill
#### Input date-time
```
test.describe('Input tests', async() => {
    test("Input date", async ({page}) => {
        await page.goto("https://google.com");
        const birthdayInput = page.locator("//input[@id='birthdau']");
        await birthdayInput.fill("2026-01-20");
        // fill theo nam thang ngay
    });

    test("Input datetime-local", async ({page}) => {
        await page.goto("https://google.com");
        const meetingInput = page.locator("//input[@id=meeting]");
        //format: YYYY-MM-DDTHH:mm
        await meetingInput.fill("2026-02-01T14:30");
    });

    test("Input time", async ({page}) => {
        await page.goto("https://google.com");
        const alarmInput = page.locator("//input[@id='alarm']");
        //format: HH:mm
        await alarmInput.fill("08:30");
    });

    test("Input months", async({page}) => {
        await page.goto("https://google.com");
        const startMonthInput = page.locator("//input[@id='start-month']");
        //format: YYYY-MM
        await startMonthInput.fill("2026-02");
    });

    test("Input week", async ({page}) => {
        await page.goto("https://google.com");
        const workWeekInput = page.locator("//input[@id='work-week']");
        // format: YYYY-WWW (ví dụ: tuần thứ 5 của năm 2026)
        await workWeekInput.fill("2026-W05");
    });
});
```
### Selection input: checkbox, radio, dropdown
```
test.describe('Selection Inputs', async () => {
    test.beforeEach(async ({page}) => {
        await page.goto("https...");
    });
    //======CHECKBOX======

    test("Checkbox - check and uncheck single", async ({page}) => {
        const agreeTerms = page.locator("#agree-terms");
        const subscribe = page.locator("#subcribe");

        // Check checkbox
        await agreeTerms.check({force: true});
        let isChecked = await agreeTerms.isChecked();
        console.log(isChecked);

        // Uncheck checkbox (da checked by default)
        isChecked = await Subscribe.isChecked();
        console.log(isChecked);
        await subscribe.uncheck();
        isChecked = await subscribe.isChecked();
        console.log(isChecked); 
    });

    test("Checkbox group - select multiple hobbies", async ({page}) => {
        const hobbies = page.locator("...");

        // Check multiple checkboxes
        await page.locator("input[name='hobbies'][value='gaming']");
        await page.locator("input[name='hobbies'][value='football']");

        //Verified checked
        await expect
    });

    //====RADIO BUTTON====
    test("Radio - select gender", async({page}) => {
        const maleRadio = page.locator("..");
        const femaleRadio = page.locator("...");

        // Select male
        await maleRadio.check();
        await expect(maleRadio).toBeChecked();
        await expect(femaleRadio).not.toBeChecked();
    });

    //===dropdown===
    // su dung option
})
```
### Upload
```
test.describe('Upload tests', async() => {
    test("Single file upload - using setInputFiles", async({page}) => {
        await page.goto("");
        const fileInput = page.locator("");

        // Upload single file
        await fileInput.setInputFiles("data/demo.txt");
        await page.locator("").click();
    });
});
```
### Hover
```
test.describe("Hover test", async() => {
    test("Hover tests", async({page}) => {
        await page.goto("");
        await page.locator("").hover
    })
})
```
### Handle confirmation dialog
```
page.on('dialog', async dialog => dialog.accept());
// dat dong nay o truoc su kien trigger
```
