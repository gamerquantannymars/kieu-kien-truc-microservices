# Kieu Kien Truc Microservices

## Giới thiệu
Dự án này nhằm xây dựng một ứng dụng quản lý sách trực tuyến sử dụng kiến trúc Microservices, cho phép triển khai và mở rộng các thành phần của ứng dụng một cách độc lập.

## Các thành phần
- **Service Quản Lý Sách**: Xử lý tất cả các thao tác liên quan đến sách như thêm, xóa, cập nhật thông tin sách.
- **Service Người Dùng**: Quản lý thông tin người dùng, bao gồm đăng ký, đăng nhập và truy cập quản lý sách.
- **Service Đánh Giá**: Cung cấp chức năng cho phép người dùng viết và xem đánh giá sách.

## Công nghệ sử dụng
- **Node.js** cho backend
- **MongoDB** cho cơ sở dữ liệu
- **Docker** để triển khai các service
- **Kubernetes** để quản lý container

## Cài đặt
1. Clone dự án này về máy.
2. Chạy `docker-compose up` để khởi động các service.
3. Truy cập vào trình duyệt tại `http://localhost:3000` để sử dụng ứng dụng.

## Đóng góp
Bạn có thể gửi pull request hoặc mở issue nếu bạn phát hiện lỗi hoặc có ý tưởng cải thiện ứng dụng.

## Liên hệ
Nếu bạn có câu hỏi hay ý kiến, hãy liên hệ với tôi qua email: example@example.com
