## Hash
1. mapping x sang y = hash(x)
    - Đầu vào có miền giá trị vô hạn, đầu ra miền giá trị hữu hạn
    - Thuật toán: **SHA-X** (SHA -256)
2. Đặc điểm:
    - biết hash,y nhưng không tìm được x
    - x1!=x2 nhưng có thể hash(x1) = hash(x2) (Colision)
3. Ứng dụng: 
    - Lưu trữ password
    - Xác thực tính toàn vẹn của dữ liệu (check file đã bị edit hay chưa... )

## Encode
1. mapping x sang y = encode(x)
    - Quan hệ song ánh
    - Thuật toán **Base64**, ASCII,....
2. Đặc điểm:
    - có thể truy ngược lại tìm x nếu biết y và loại encode.
    - Không bị va chạm
3. Ứng dụng:
    - Chuyển data từ dạng này sang dạng khác.

## Encrypt
1. Là kĩ thuật encode mà chỉ người có thấm quyền mới có thể decode được tập tin
    - Thuật toán:**RSA**(public key, private key)...
2. Đặc điểm: 
    - Có thể truy ngược lại tìm được input nếu biết output và loại mã hóa.
3. Ứng dụng:
    - truyền dữ liệu
    - Authentication(xác thực) và (sau đó) Authorization(phân quyền) **?**
