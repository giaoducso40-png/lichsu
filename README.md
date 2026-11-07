# Hải trình · Hành trình đến độc lập ở Đông Nam Á

Học liệu web tĩnh cho **Lịch sử 11, Bài 6 – Kết nối tri thức với cuộc sống**. Ba hình thức trong một trang:

1. **Trục thời gian tương tác:** ba giai đoạn theo đúng sơ đồ trong SGK.
2. **Bản đồ đối chiếu:** 11 quốc gia Đông Nam Á hiện nay, chọn quốc gia để xem mốc tiêu biểu.
3. **Thử thách nhanh:** sáu câu trắc nghiệm có giải thích, điểm số và nút làm lại.

Ngoài ra có chế độ trình chiếu cho lớp học và bản tóm tắt in bằng nút **In bản tóm tắt**.

## Sử dụng

Mở `index.html` để dùng offline. Toàn bộ ảnh, font, bản đồ, CSS và JavaScript đều nằm trong thư mục này. Không cần cài gói hay kết nối mạng; chỉ các liên kết nguồn tư liệu cần Internet.

## Đưa lên GitHub Pages

1. Tạo repository GitHub mới và tải **toàn bộ nội dung thư mục này** lên nhánh `main` ở thư mục gốc.
2. Vào **Settings → Pages → Build and deployment**, chọn **Deploy from a branch**, nhánh `main`, thư mục `/ (root)`, rồi lưu.
3. Khi GitHub Pages báo hoàn tất, mở đường dẫn do GitHub cung cấp. Các đường dẫn nội bộ đều là đường dẫn tương đối nên hoạt động cả khi repository có tên riêng.

## Phạm vi và lưu ý lịch sử

- Trọng tâm bám mục 2 và 3 của SGK, với ba chặng: cuối thế kỉ XIX–1920; 1920–1945; 1945–1975. Nội dung được viết lại ngắn gọn để học sinh trình bày, không sao chép nguyên văn SGK.
- **Miến Điện:** hiệp ước Anh–Miến kí năm 1947; ngày độc lập chính thức là **4/1/1948** theo *Burma Independence Act 1947*. Vì vậy hai năm không thể dùng thay thế nhau.
- **Bru-nây:** độc lập năm 1984, ngoài mốc kết thúc 1975 trong sơ đồ SGK.
- Bản đồ chỉ định vị **biên giới quốc gia hiện nay**. Không dùng nó như bản đồ thuộc địa hay bản đồ chiến dịch lịch sử.
- Tranh trang đầu và ba chặng do công cụ tạo ảnh GPT sinh ra để gợi không khí lịch sử; không phải ảnh chụp tư liệu, chân dung nhân vật hay chứng cứ về sự kiện.

## Nguồn đối chiếu

- [SGK Lịch sử 11, Bài 6, Kết nối tri thức – bản xem trực tuyến](https://www.sgkvn.com/lop-11-14/ket-noi-tri-thuc-voi-cuoc-song-3/chu-de-3-qua-trinh-gianh-doc-lap-dan-toc-cua-cac-quoc-gia-dong-nam-a-3331/bai-6-hanh-trinh-di-den-doc-lap-dan-toc-o-dong-nam-a-12340.html).
- [Bộ GD&ĐT – Hướng dẫn dạy học môn Lịch sử lớp 11, Bài 6](https://moet.gov.vn/content/vanban/Lists/VBDH/Attachments/3713/3mon-lich-su-lop-11-ban-chinh-thuc-chot-ngay-30-8-2024signed.pdf).
- [Burma Independence Act 1947](https://www.legislation.gov.uk/ukpga/Geo6/11-12/3/pdfs/ukpga_19470003_en.pdf).
- [Chính phủ Malaysia – Lịch sử và thành lập Malaysia](https://www.malaysia.gov.my/en/government/learn-about-malaysia).
- [Thư viện Quốc gia Singapore – độc lập năm 1965](https://www.nlb.gov.sg/main/article-detail?cmsuuid=efec06b8-45e1-439e-8c9f-cd6c00cc5149).
- [Natural Earth, Admin 0 Countries, 1:110m](https://www.naturalearthdata.com/downloads/110m-cultural-vectors/110m-admin-0-countries/), dữ liệu bản đồ phạm vi công cộng.

## Tài nguyên và thiết kế

- Minh họa: công cụ tạo ảnh GPT (built-in), xuất WebP để tải nhanh. Prompt trang đầu: “Cinematic editorial illustration of Southeast Asian independence, late 19th to mid-20th century; diverse people, printing press, compass motif, midnight navy, teal and gold; no text, no flags, no map.” Prompt ba chặng: “Three-panel painterly strip: reform and pamphlets; organized workers and press; hopeful dawn of self-rule; no text, flags or maps.”
- Font: Be Vietnam Pro, giấy phép SIL Open Font License tại `assets/OFL-BeVietnamPro.txt`.
- Biểu tượng, chi tiết giao diện, chuyển động ticker và bố cục được thiết kế riêng bằng CSS/SVG, không dùng thư viện ngoài.

## Kiểm tra đã thực hiện

- Trang chạy bằng máy chủ tĩnh; không có lỗi JavaScript trên trình duyệt kiểm tra.
- Kiểm tra giao diện trên màn hình hẹp và rộng, font tiếng Việt tải thành công, không tràn ngang.
- Đã thao tác đổi chặng, chọn quốc gia, làm đủ 6 câu đến kết quả và chuyển slide trình chiếu.
