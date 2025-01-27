# ngày dd/MM/yyyy

## 1. Cấu hình cài đặt .eslint :

ESLint là một công cụ phân tích mã nguồn tĩnh được sử dụng để xác định và báo cáo các mẫu lỗi trong mã JavaScript, giúp mã của bạn nhất quán hơn và tránh lỗi, ví dụ như phát hiện lỗi cú pháp: ESLint giúp phát hiện các lỗi cú pháp trong mã JavaScript, giúp bạn sửa lỗi trước khi chạy ứng dụng.

1.

```
npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier
```

2.

```
npx eslint --init
```

3. Trong file .eslintrc.json (chưa có thì tạo) thêm vào các rule cấu hình (tham khao file)
4. Tạo file .prettierrc.json với các cấu hình (tham khao file)
5. Thêm vào package.json 2 dòng:

```
"lint": "next lint",
"lint:fix": "eslint src/**/*.{js,jsx,ts,tsx} --fix"
```

6. Test thử: chạy npm run lint, nếu có báo lỗi --> phải fix, không thì thôi

## 2. Cấu hình cài đặt Unit Test với Jest:

--> Đi làm thực tế, nhất là out source, người ta sẽ bắt Unit Test + report lại kết quả

Unit test với Jest trong ReactJS/NextJS là quá trình kiểm tra từng thành phần nhỏ (unit) của ứng dụng để đảm bảo chúng hoạt động đúng như mong đợi. Jest là một framework testing phổ biến được sử dụng rộng rãi trong cộng đồng ReactJS.

- Kiểm tra từng thành phần: Unit test giúp kiểm tra từng thành phần nhỏ của ứng dụng, chẳng hạn như các component React, để đảm bảo chúng hoạt động đúng cách.
- Snapshot testing: Jest hỗ trợ snapshot testing, cho phép bạn lưu lại trạng thái của một component tại một thời điểm cụ thể và so sánh với trạng thái hiện tại để phát hiện sự thay đổi không mong muốn.
- Mocking: Jest cung cấp các công cụ để mock các module và hàm, giúp bạn kiểm tra các thành phần một cách độc lập mà không cần phụ thuộc vào các thành phần khác

\*Cách cài đặt:

1.

```
npm install jest @testing-library/react  @testing-library/jest-dom babel-jest
npm install jest-environment-jsdom
npm install @testing-library/user-event @testing-library/dom @types/jest eslint-plugin-jest
```

2. Cài extension VSCode: Jest Runner

3. Tạo file cấu hình cho JEST với tên file là jest.config.js, tiếp theo cấu hình cho jest

4. Vào file .eslintrc.json, thêm "jest" vào plugins

5. Thêm vào package.json:

```
"test": "jest --coverage"
```

6. Trong src, tạo (thử nghiệm) 1 folder là manage, có 2 file .tsx
   Chú ý: nhìn trong file index.test.tsx, sẽ thấy nhờ có Jest Runner extension mà có mấy chỗ bấm Run,...

7. Chạy lệnh 'npm run test' sau đó sẽ hiện kết quả test trên màn hình cmd hoặc terminal

8. Ngoài ra có thể xem file report ở đường dẫn /coverage/Icov-report/index.html
   (có 1 folder là coverage phát sinh á)
