# ngày 19/10/2024
Tasks cha: code UI màn hình trang chủ (trang đầu tiên khi vừa vào web https://www.upwork.com/)

* Note 1: không yêu cầu giao diện UI phải giống y hệt 100% trang web, cứ thoải mái sáng tạo.
Thậm chí nếu cảm thấy thông tin/nội dung nào không cần thiết, có thể thoải mái bỏ luôn không làm !
--> đừng sợ làm xấu nhé, mình đang học mà, có ai super FE đâu, các ae khác sẽ phụ.
--> phần nào bó tay, cứ thoải mái hỏi. Anh cũng vậy, cái nào a ko biết làm sẽ hỏi các bạn.
--> bận quá ko làm được, ko làm kịp, gặp sự cố,... ==> cứ nhắn lên vs mọi người
--> deadline ko phải là cố định, có thể dời thêm nếu cần. 

* Note 2: trong giai đoạn này, chưa cần đặt nặng responsive cho mobile, làm được thì tốt, không thì thôi.
Chỉ quan tâm responsive cho các kích thước màn hình sau:
a. > 1440px
b. Từ 768px - 1440px
c. Ipad mini, tức đúng 768px
d. Chưa cần quan tâm cho mobile (làm được thì tốt, còn không thì thôi)

* Note 3: khi code, phải format code cho đẹp. Đặt tên biến có thể xấu xí, thậm chí sai tiếng Anh,
nhưng tuyệt đối phải rõ ràng, ko đặt kiểu a1, finalResult,...Trước khi push + merge vào phải chạy 
"npm run lint", xem xem nó hiển thị ra những chỗ nào chưa đẹp, chưa đúng --> khắc phục

* Note 4: làm thì xảy ra conflict là cái chắc, lúc này hãy sửa chữa conflict như sau:
chọn "Accept both ..." chứ đừng chỉ giữ lại phần riêng mình. Việc sửa conflict thực tế không khó,
chỉ là đừng xóa đi thôi. "Code có thể thừa, thậm chí chạy lỗi, nhưng tuyệt đối ko thể xóa thiếu mất" 

* Note 5: làm cái gì thì nhớ ghi vào file trong folder Task theo đúng cấu trúc mẫu:
Ví dụ: hôm nay ngày dd/MM/yyy, bạn X làm chức năng A và bạn Y làm chức năng B
X sẽ ghi vào file riêng của X trong tuần ấy, Y ghi vào file riêng của Y

của X:
```
# ngày dd/MM/yyyy
Code phần A, cài thêm thư viện...,
đang bó tay phần...
```

* Các phần cần làm:  

1. Header 
1.1 nav trên 
--> 
1.2 nav - secondary menu (tức nav dưới)
--> 

(BỎ KHÔNG LÀM) khi scroll, xuất hiện "Ask AI for any thing..." với "Top talents, open job

2. visitor-page-container (main - body cũng là nó)
Chú ý: khi code, các em mặc dù có thể hard code mock data dữ liệu giả vào,
nhưng anh đề xuất nên code vào server (nextjs hỗ trợ BE) để mốt thay api nhanh hơn.
    - 2.1 "We connect people to bring projects to life..."
    - 2.2 "Explore top talent..."
    - 2.3 "Up your work game, it’s easy" 
    - 2.4 "Browse talent by category" 
    - 2.5 "Recently posted jobs" 
    - 2.6 "This is how good companies find good company."
    - 2.7 Find talent your way
    - 2.8 (BỎ KHÔNG LÀM) phần "Why businesses turn to Upwork"
    - 2.9 Find great work
    - 2.10 Trusted by leading brands and startups
    - 2.11 (BỎ KHÔNG LÀM) phần "We support Ukraine..." (cái này dính tới chính trị, nên bỏ qua)
    - 2.12 Top skills Trending skills Top skills in US Project CatalogTM

3. Footer : không nhất thiết hiển thị ra full 100% y hệt nó nhé