# ngày dd/MM/yyyyy 
1. Tạo project nextjs
- Sử dụng câu lệnh 'npx create-next-app@latest' để cài đặt phiên bản nextjs mới nhất
- Sử dụng AppRouter trong nextjs
- Câu lệnh chạy ứng dụng ở chế độ phát triển (development): "npm run dev"
- Câu lệnh chạy ứng dụng trong chế độ production: "npm run build"
2. Sử dụng Tailwindcss,mui,shadcn để css cho giao diện.
3. Các gói thư viện cài đặt thêm
- Redux/Redux Toolkit: dùng để quản lý state của ứng dụng
- Thư viện icon: sử dụng react-icon để lấy những icon 
4. Chức năng của các folders
- (): các folder trong ngoặc đơn là khi chuyển trang trên url thì không phải chứa tên thư mục đó.
+ ví dụ: (page),(client),home -> url: localhost:3000/home.
- (page) và trong page có thư mục (client) -> viết các component ở phía client
- (page) và trong page có thư mục admin -> viết các component ở phía admin
- component -> viết các logic của component
- api -> viết các hàm để fe call api
- hooks -> viết các custom hooks
- interface -> viết các interface của dữ liệu
- util -> viết các phần khác vào đây