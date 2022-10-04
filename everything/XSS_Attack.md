## Cross-Site Scripting
Là tình huống mà khi trang web của bạn bị chèn 1 đoạn mã script không phải do bạn viết.
Ví dụ:      
Django    
```py
url của bạn: 
urlpatterns = [
    path("<path:path>", views.index, name="index")
]

views:
def index(request, path):
    return HttpResponse(f"Requested Path: {path}")

Người dùng bât browser lên gõ localhost/<script>alert("a")</script>
-> Lúc này sẽ hiện lên thông báo có nội dung là "a"

alert có vẻ vô hại, nhưng ít nhất 1 đoạn JS đã nhúng được vào trang html. Có thể sẽ có mã code làm việc với DOM, lấy thông tin từ session, localStorage..... Điều này rất nguy hiểm. 
```