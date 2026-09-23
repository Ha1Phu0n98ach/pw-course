# Git and Javascript basic
---
# Git
### 3 vùng trong Git
1. Working directory
    - Nơi người dùng làm việc tại local máy mà chưa push lên github
2. Staging
    - Chứa những file được commit lên github
3. Repo
    - Chứa những file được push lên github 

### Một số câu lệnh thông dụng 
- Kiểm tra trạng thái git với câu lệnh
```
git status
```
Sử dụng để kiểm tra trạng thái những file đã và chưa được push lên git
- Kiểm tra danh sách đã commit lên git
```
git logs
```
Sử dụng khi muốn kiểm tra lịch sử các lần commit trên git
- Cấu hình git config
```
git config --global username
git config --global email 
```
Sử dụng khi muốn setup cho toàn bộ. Nếu muốn setup riêng cho từng project thì chỉ cần bỏ --global

### Git Convention
- Commit Git Convention
```
fix
chore
feat
```
fix: sử dụng khi sửa lỗi lớn
chore: sử dụng khi sửa lỗi nhỏ
feat: sử dụng khi có thêm feature mới 

---
# Javascript Basic
1. Biến và hằng
- Biến
```
let a;
let b;
```
- Hằng
```
const a;
const b;
```
Biến và hằng đều được sử dụng để gán biến. Điểm khác nhau giữa biến và hằng là **biến** có thể gán cho giá trị khác còn **hằng** thì không thể.

2. Comment 
- Khi muốn comment từng dòng code riêng lẻ thì sử dụng //
- Khi muốn comment nhiều dòng code thì bôi đen những dòng muốn comment và sử dụng ctrl + //

3. Kiểu dữ liệu
- Một số kiểu dữ liệu cơ bản là: string, number, boolean,...
- Muốn biết kiểu dữ liệu của một biến, sử dụng câu lệnh
```
console.log(typeof <tên biến>);
```

4. Toán tử so sánh
- Có một số dạng so sánh cơ bản như >, <, >==, ==<, ===, ==, >=, =<

5. Toán thử logic

| a | b | a and b | a or b |
|---|---|---------|--------|
| true | false | false | true|
| true | true | true | true|
| false | fasle | false | false |
| fasle | true | false | true |

6. Toán tử một ngôi
- prefix 
```
++x
--x
```
Thực hiện tăng/giảm trước rồi mới gán biến
- postfix
```
x++
x--
```
Thực hiện hành động trước rồi mới tăng giảm và gán biến

