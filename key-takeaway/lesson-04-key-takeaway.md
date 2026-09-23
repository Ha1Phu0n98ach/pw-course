# Javascript (continue)
# Lesson 4
---
## Phạm vi của biến

| | Block scope | Function scope | Toàn cục |
|-|-------------|----------------|----------|
| var | X | V | V |
| let | V | V | V |
| const | V | V | V |

## break và continue
1. **break** dùng để thoát hoàn toàn khỏi vòng lặp ngay lập tức
```
// Thoát khi tìm thấy giá trị
for (let i = 0; i < 10; i++) {
    if (i == 6) {
        break; // thoát khỏi vòng lặp khi i = 6
    }
    console.log(i);
}
// Output: 0, 1, 2, 3, 4, 5
```
2. **continue** dùng để bỏ qua phần còn lại của vòng lặp hiện tại và chuyển sang lần lặp tiếp theo
```
// Bỏ qua số chẵn
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // bỏ qua số chẵn
    }
    console.log(i);
}
// Output: 1, 3, 5, 7, 9
```

## Câu điều kiện nâng cao
1. Câu điều kiện **if...else**
- Thực thi code khác nhau cho trường hợp true và false
```
let a = 10;

if (a >= 6) {
    console.log("Bạn đã qua môn");
} else {
    console.log("Bạn đã trượt môn");
}
```

2. Câu điều kiện **if...else...if** 
- Kiểm tra nhiều điều kiện theo thứ tự:
```
let score = 85;

if (score >= 90) {
    console.log("Xuất sắc");
} else if (score >= 80) {
    console.log("Giỏi");
} else if (score >=70) {
    console.log ("Khá");
} else if (score >= 60) {
    console.log ("Trung bình);
} else {
    console.log("Yếu");
}
```
3. **Toán tử điều kiện**
```
let age = 19;
let status = (age >= 18) ? "Người lớn" : "Trẻ em";
console.log(status); // "Người lớn"
```

## Vòng lặp nâng cao
1. **for...in loop**
- Dùng để duyệt qua các thuộc tính (properties) của một object.

```
// Với object
const person = {
    name : "Phuong",
    age : 23,
    city : "Ha Noi"
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}
//Output:
// name: Phuong
// age: 23
// city: Ha Noi
```
2. **forEach method**
- Method của Array để thực thi một function cho mỗi phần tử. Không thể dùng **break** hoặc **continue**
```
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(value) {
    console.log(value);
});
```

## Utils function
- **Utils** = tiện ích
- **Utils function** là các **hàm có sẵn** của JS, giúp cho việc code trở nên **nhanh hơn, gọn hơn**
1. **String utils**

- Bỏ khoảng trắng
    - Dùng hàm trim
        - trim(): bỏ khoảng trắng 2 đầu
        - trimStart(): bỏ khoảng trắng bên trái
        - trimEnd(): bỏ khoảng trắng bên phải
- Chuyển đổi chữ hoa -> chữ thường và ngược lại
    - Chữ thường -> chữ hoa: toUpperCase
    - Chữ hoa -> chữ thường: toLowerCase
- Kiểm tra chuỗi có bao gồm chuỗi con không
    - Dùng hàm includes
- Tách chuỗi thành các phần
    - Dùng hàm split
- Thay thế ký tự trong chuỗi
    - Dùng hàm replace

**2. Array Utils**
- Thêm phần tử vào mảng (push, unshift, splice)
    - Thêm vào cuối: push(phần tử)
    - Thêm vào đầu: unshift(phần tử)
    - Thêm vào giũa: splice(vị trí, số phần tử cần xóa, số phần tử cần thêm vào)
- Xóa phần tử khỏi mảng (pop, shift, splice)
    - Xóa ở cuối: pop()
    - Xóa ở đầu: shilf()
    - Xóa ở vị trí bất kì: splice(vị trí, số phần tử cần xóa)
- Tìm kiếm (find, filter)
    - Trả về phần tử đầu tiên hợp lệ - find()
    - Trả về tất cả các phần tử hợp lệ - filter()
- Biển đổi mảng (map)
    - Tạo mảng mới bằng cách áp dụng một hàm lên từng phần tử của mảng gốc. Trả về mảng mới có cùng độ dài
- Sắp xếp mảng (sort)
    - sort((a, b) => a - b)
        - So sánh từng cặp phần tử a và b
        - Trả về số âm: a đứng trước b
        - Trả về số dương: b đứng trước a
        - Trả về 0: giữ nguyên thứ tự