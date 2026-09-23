# Git & Javascript basic (continue)
# Lesson 3
---
## Git
### Undo things
1. Commit message
```
git commit --amend -m"message"
```
2. File staging -> working directory
```
git restore --staged <file_name>
// sử dụng khi muốn restore 1 file cụ thể

git restore --staged .
// sử dụng khi muốn restore toàn bộ các files
```
3. File repo -> working directory (un-commit)
```
git reset HEAD~1
//Hủy bỏ commit gần nhất

git reset HEAD~N
//Huy bỏ commit thứ N mới nhất
```
- Commit đầu tiên không thể bị reset
- Nếu muốn reset -> khóa thư mục .git đi rồi init lại
### Braching
1. git: pull code
```
git pull origin main
// pull code từ server về
```
2. git:branch
- Git sử dụng nhánh (brach) để tạo ra các "phiên bản" riêng của code, tránh ảnh hưởng tới "bản gốc"
- Khi khởi tạo repo (git init), nhánh mặc định sẽ được tạo ra
```
git config --global init.defaultBranch main
// cấu hình khi khởi tạo, đặt nhánh mặc định là nhánh main
```
- Một số câu lệnh với nhánh:
    - Xem danh sách nhánh: git branch (lưu ý: cần có ít nhất 1 commit mới hiện danh sách nhóm)
    - Tạo nhánh mới: git brach <tên_branch> (lưu ý: nhánh mới copy giống hệt nhánh hiện tại)
    - Chuyển sang nhánh mới: git checkout <tên_branch>
    - Vừa tạo, vừa chuyển sang nhánh mới: git checkout -b <tên>
    - Xóa branch: git branch -D <tên nhánh> (lưu ý: đứng ở nhánh khác trước khi xóa)
- Lưu ý: Luôn pull code về trước khi tạo nhánh mới
### Ignore File
- File .gitignore là một file cấu hình quan trọng trong Git, giúp chỉ định những file và thư mục nào sẽ không được theo dõi (untracked) bởi Git.

**Tại sao cần .gitignore**
- Trong dự án thường có nhiều file không cần thiết phải đưa vào Git repo như: 
    - File tạm thời của HĐH (.DS_Store, Thumbs.db)
    - Thư mục dependencies (node_modules/, vendor/)
    - File build và artifacts (dist/, build/, *.exe)
    - File cấu hình cá nhân (IDE settings, evironment variables)
    - File nhạy cảm (API keys, passwords, certificates)
    - File log và database local
### Convention
- Một số convention phổ biến:
    - snake_case
    - kebab-case: đặt tên file và folder
    - camelCase: đặt tên biến, hàm
    - PascalCase: đặt tên class

## Javasscript
1. Dùng console.log nâng cao
```
console.log('Toi la Nga');
console.log("Toi la Phong");
Console.log(`${variable_name}`);
let name = "Nga";
console.log(`Toi la ${name}`);
console.log("Toi ten la" + name + "");
```
2. Object
- Là một trong những kiểu dữ liệu quan trọng nhất trong JS, dùng để lưu trữ dữ liệu key-value. trong đó:
    - <key>: giống quy tắc đặt tên biến
    - <value>: có kiểu giống biến, hoặc là 1 object khác
3. Logical operator
- &&: cả 2 vế của mệnh đề đều đúng
- ||: 1 trong 2 vế đúng
- !: đảo ngược lại giá trị của mệnh đề
4. Array
- Tạo mảng
    - Khai báo
    - Sử dụng
- Truy xuất mảng
    - Độ dài mảng: length
    - Lấy phần tử theo index: [0], [1], [2]
5. Function
- Function là hàm, là đoạn code được đặt tên và có thể tái sử dụng, thực hiện 1 nhiệm vụ hoặc 1 tính toán cụ thể.
