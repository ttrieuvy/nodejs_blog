# HTTPs

- tên đầy đủ Hyper text tranfor protocal là một giao thức truyền tải siêu văn bản, nó là nơi mà đọc và hiển thị ra những dòng code trên các trình duyệt cho người dùng

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

## Các bước để connect với 1 dự án đã có sẵn

```
git clone SSH_của dự án // clone dự án từ trên github về, lưu ý là đuôi link của github phải trùng với folder nơi bạn chứa code clone về
git add . // đẩy tất cả những thay đổi lên local, nơi chuẩn bị code để đẩy lên git
git commit -m "nội dung" // tạo ghi chú cho phần code mình đẩy lên
git push origin master // đẩy code thì local lên git
```

## Bắt đầu mới 1 dự án trên GIT

```
1. Khởi tạo dự án Git:
* Mở Terminal hoặc Command Prompt và điều hướng đến thư mục của dự án Laravel của bạn bằng lệnh cd đường_dẫn_đến_thư_mục_dự_án.
* Chạy lệnh git init để khởi tạo một kho lưu trữ Git trong thư mục dự án của bạn.

2. Thêm tất cả các tệp vào khu vực chứa (staging area):
* Chạy lệnh git add . để thêm tất cả các thay đổi vào khu vực chứa. Điều này sẽ chuẩn bị các tệp để được commit.

3. Tạo một commit:
* Sử dụng lệnh git commit -m "Commit message" để tạo một commit với thông điệp mô tả về các thay đổi bạn đã thực hiện. Ví dụ: git commit -m "Initial commit"

4. Liên kết với kho lưu trữ trên GitHub (hoặc nền tảng Git khác):
* Trước tiên, bạn cần tạo một kho lưu trữ trên GitHub hoặc nền tảng Git khác.
Sau đó, bạn cần liên kết kho lưu trữ Git của mình với kho lưu trữ trên GitHub bằng cách sử dụng lệnh git remote add origin đường_dẫn_kho_lưu_trữ_trên_github.

5. Đẩy các thay đổi lên kho lưu trữ từ xa:
* Chạy lệnh git push -u origin master để đẩy các thay đổi lên kho lưu trữ trên GitHub. Lưu ý rằng master có thể thay đổi thành tên nhánh bạn đang sử dụng nếu bạn không đang làm việc trên nhánh master.
```

## Các lệnh hay dùng trên git

1. Kiểm tra xem có commit nào trong kho lưu trữ của bạn không

```
git log
```

2. Kiểm tra xem bạn đang ở nhánh nào

```
git branch
```

3. Kiểm tra xem bạn đã liên kết kho lưu trữ từ xa đúng cách không

```
git remote -v
```

# morgan

- là 1 thư viện quan sát được những request mà client gửi lên server

```
npm i morgan --save-dev
```

# temple engines(handlebars)

- là một công cụ cho phép bạn tạo ra các mẫu HTML động bằng cách kết hợp dữ liệu từ nguồn khác nhau vào trong các template. Điều này giúp tạo ra các trang web động và linh hoạt hơn.

## cấu hình handlebars

```
const path = require("path"); //chèn thư viện path vô
const hbs = require("express-handlebars"); // cài thư viện
app.engine("handlebars", hbs.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  res.render("home");
});
```

- khi route home, mặc định nó vẫn sẽ lấy layout của layouts.main vào, đồng thời nó cũng sẽ lấy content từ views.home để include vào file layouts.main

## Cấu hình lại đuôi file handlebars

```
// templete engine

app.engine("hbs", hbs.engine({
    extname: ".hbs",
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
```

## partials layout

### Cú pháp nạp partials

- tại file views.partials

```
{{> tenFile.hbs}}
{{> tenFolder/tenFile.hbs}}
```

## sơ đồ thư mục

```
src
├── resources
    ├── scss
    └── views
      ├── layouts
        └── main.handlebars
      ├── partials
        ├── header.hbs
        └── footer.hbs
      └── home.handlebars
└── index.js
```

# Static files & SCSS

## Static files

- là các tệp tin như HTML, CSS, JavaScript, hình ảnh và các tài nguyên khác không thay đổi trong quá trình thực thi của ứng dụng web. Khi một trình duyệt web yêu cầu một trang web, các tệp tin static này được gửi từ máy chủ đến trình duyệt mà không có bất kỳ xử lý động nào. Chúng được dùng để hiển thị nội dung cho người dùng cuối mà không cần phải tạo ra nội dung động từ máy chủ.

```
  path.join(\_\_dirname,"")
```

- Đoạn mã path.join(**dirname, "resources/views") sử dụng path.join() để kết hợp đường dẫn của thư mục hiện tại (**dirname) với một đường dẫn tương đối (resources/views). Điều này thường được sử dụng trong Node.js để tạo ra một đường dẫn tuyệt đối đến một thư mục cụ thể trong ứng dụng.

- Ví dụ, nếu ứng dụng của bạn được triển khai trong thư mục /home/user/myapp, và bạn muốn có đường dẫn đến thư mục resources/views, thì path.join(\_\_dirname, "resources/views") sẽ tạo ra đường dẫn /home/user/myapp/resources/views.

```
  app.use(express.static(path.join(\_\_dirname, "public")));
```

- Đoạn mã trên được sử dụng trong một ứng dụng Express để cung cấp các tệp tin static cho trình duyệt web từ thư mục public. Điều này có nghĩa là khi một yêu cầu được gửi đến máy chủ Express, nếu trình duyệt yêu cầu một tệp tin từ máy chủ (ví dụ: CSS, JavaScript, hình ảnh), Express sẽ kiểm tra xem nó có tồn tại trong thư mục public không. Nếu có, nó sẽ gửi tệp tin đó về cho trình duyệt.

## SCSS

[Source document](https://www.npmjs.com/package/node-sass)

```
// command line
npm i node-sass --save-dev

// usage
node-sass [options] <input> [output]

//package.json

 "scripts": {
    ...
    "watch": "node-sass --watch src/resources/scss/app.scss src/public/css/app.css"
    ...
  }

// run at command line

npm run watch
```

- Khi đã cài scss rồi thì chỉ nên viết code css bên file app.scss thôi, bởi khi đã cấu hình rồi thì có cập nhật thay đổi gì bên file app.scss thì bên file app.css cũng sẽ được cập nhật theo
