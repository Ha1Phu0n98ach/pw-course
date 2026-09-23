# Làm quen với Git và Playwright
# Lesson 01
---
## Cấu hình Git
```
// Config username (tên người dùng):
git config --global user.name "<tên ban>"

// Config email (địa chỉ email)
git config --global user.email "<email của bạn>"

// Config branch default (nhánh mặc định):
git config --global init.defaultBranch main
```

## Kết nối với GitHub
1. Tạo SSH key và thêm SSH Key vào GitHub
- Máy tính xác thực với GitHub thông qua cặp SSH key (private key id_rsa được lưu ở máy local, public key id_rsa.pub lưu trên GitHub)
- Khóa được lưu ở ~/.ssh
- Lệnh tại SSH Keys:
```
ssh-keygen -t rsa -b 4096 -C "địa chỉ email của bạn"
```

- Lấy nội dung ssh key: 
```
cat ~/.ssh/id_rsa.pub
```

- Truy cập: https://github.com/settings/ssh/new để thêm ssh key

## Cài đặt Playwright
1. Tạo thư mục
2. Mở thư mục bằng vscode
3. Mở terminal và chạy lệnh
```
npm init playwright@latest
```

## Đưa code lên Github
```
// Khởi tại repo local
git init

// Tạo repo GitHub và liên kết với repo local
git remote add origin <url>

// Thêm file vào staging
git add .

// Commit file 
git commit -m"<message>"

// Push code
git push origin main 
```
1. Tạo repo
- Truy cập: https://github.com/new
- Điền tên repo
- Chọn "Public"
2. Invite collaborators
- Truy cập repo settings: https://github.com/<username>/<repo_name>/settings/access
- Add collaboratorgit 