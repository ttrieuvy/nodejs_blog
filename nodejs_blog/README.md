# HTTPs

tên đầy đủ Hyper text tranfor protocal là một giao thức truyền tải siêu văn bản, nó là nơi mà đọc và hiển thị ra những dòng code trên các trình duyệt cho người dùng

# SSR (server side render) & CSR (client side rendering)

- giao diện trả về nằm luôn trong source thì đó được gọi là SSR, nó được ấy như vậy để tối ưu cho việc SEO và để hiện thị ra những nội dung không quá quan trọng việc bảo mật
- source code từ server gửi về rất ngắn, việc của client là đọc file script thì giao diện mới được render ra. Nếu như client tắt js thì giao diện sẽ bị lỗi (maybe). Code CSR sẽ tối ưu hóa về việc trải nghiệm người dùng, khi chuyển giữa các trang tác vụ dùng CSR thì chuyển rất nhanh

# nodemon

- lắng nghe sự thay đổi trên file của bạn, sau đó nó sẽ tự động chạy lại server để người viết không cần phải chạy lại server 1 cách thủ công

```
install về: npm i nodemon --save-dev
- trong đó --save-dev là chỉ tải thư viện này về trên môi trường dev, khi uploand lên môi trường thật thì nó sẽ không cài thư viện này về để (bởi nó không còn quan trọng)
```

- muốn chạy server bằng nodemon thì trước tiên phải tinh chỉnh 1 xíu trong file package.json
  ````
  "script":{
  "start": "nodemon tenFileMacDinhChayDuAn"
  }
  --> npm start```
  ````

# git

- .gitignore: là nơi cấu hình những file sẽ không được đẩy lên git

```
tenFile
node_modules/
```

```
    git clone SSH_của dự án // clone dự án từ trên github về, lưu ý là đuôi link của github phải trùng với folder nơi bạn chứa code clone về
    git add . // đẩy tất cả những thay đổi lên local, nơi chuẩn bị code để đẩy lên git
    git commit -m "nội dung" // tạo ghi chú cho phần code mình đẩy lên
    git push origin master // đẩy code thì local lên git
```

# morgan

- là 1 thư viện quan sát được những request mà client gửi lên server

```
npm i morgan --save-dev
```

# temple engines(handlebars)
