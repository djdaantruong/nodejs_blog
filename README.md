# F8 NodeJS Course - Xây Dựng Web Với NodeJS & ExpressJS

## Kiến thức nền tảng

### Lời khuyên trước khoá học

- Miễn phí
- Kiến thức thực tế (những kiến thức đang sự dụng khi đi làm)
- Concept chung (backend của những công nghệ khác như PHP, Python,..)
- Hãy dành nhiều thời gian, công sức, hy sinh nhiều thời gian hơn, lớn hơn 6 tháng đến 2 năm (xem lại tới khi hiểu, thực hành tới khi nhớ/ hiểu, dành thời gian suy nghĩ lại những cái đang học)
- Nguyên tắc: cần trở thành một người có quy tắc, deadline, quy trình khá nặng, rất áp lực, dễ lấy lý do không phù hợp, nếu đáp ứng được thì cứ tiến tới
- Cảm ơn anh F8

### HTTP protocol

Phương thức HTTP là cách thức mà cái website được truyền tải qua internet

Hiểu đơn giản là các yêu cầu gửi từ trang web đều là http

Kiến thức quan trọng cần nắm kỹ, rảnh thì đọc tìm hiểu thêm

Một số request methid hay dùng:

- GET: lấy dữ liệu về từ server
- POST: gửi dữ liệu tới server, ví dụ làm các chức năng đăng nhập, dỏ hàng, gửi thông tin khách hàng, file tải lên,..

### SSR & CSR

Tìm hiểu 2 khái niệm:

Mã HTML/CSS render ra ở đâu, nếu render ra server thì gọi là server side rendering, còn nếu render ra phía client thì gọi là client side rendering.

Server side rendering: thường sử dụng ở các web CEO, web tin tức,..

Ưu điểm: tốt cho CEO, content chứa hết mã và chữ. Request đầu tiên luôn nhanh hơn. Nên chọn, thời gian phát triển ứng dụng nhanh hơn (tác vụ nhỏ, dài hạn thì thua client), code nhiều hơn

Client side rendering

Ưu điểm: tạo trải nghiệm người dùng tốt hơn, tải về trước bộ khung, cần gì thì tải thêm

### Install Node

Download tại trang chủ về máy như các phần mềm khác

Không biết cài như nào thì google, lập trình viên nên tự mày mò, tìm hiểu

### Install ExpressJS

Cài đặt ExpressJS Framework

Tạo project thực hành đầu tiên hello world

### Install Nodemon & inspector

Học cách sử dụng thư viện nodemon và cách debug nodejs

Nodemon: giúp restarting server khi có thay đổi file, tiện lợi khi phát triển app

Cài đặt và cách sử dụng

npm i nodemon —save—dev

Thay cript trong package_json: start: nodemon index.js

Thêm inspector vào cript để debug nodejs: start: nodemon —inspect index.js (khối lục giác node màu xanh lá)

### Add Git repo

git init

git add README.md

git commit -m"first commit"

git remote add origin

git push -u origin master

### Install Morgan

Đọc và cách sử dụng (mình biết dùng vì mình đọc doc sử dụng của thư viện, hãy học cách đọc doc thư viện hoặc các package npm)

Thư viện morgan: cho phép quan sát được các console.log request từ client lên node server

Thư viện nào không sử dụng trong dự án thật thì cài vào —dev cho các dev sử dụng trong quá trình phát triển ứng dụng

## Kiến thức cốt lõi

### Template engines (handlebars)

- Cài đặt: npm install express-handlebars
- Cách sử dụng: đọc document

Học được cách sử dụng một template engines mới

Học được cách chia layout, connect được các phần layout vào một trang, khi load trang chỉ có các container thay đổi, còn các phần tĩnh như header, footer không vẫn giữ nguyên

### Static file & SCSS
