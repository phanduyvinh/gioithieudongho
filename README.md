# HƯỚNG DẪN CÀI ĐẶT PROJECT

### Project Giới Thiệu Đồng Hồ

Chú ý: project không bao gồm node_modules
Project có sử dụng thư viện axios và react-router-dom, nếu node_modules của bạn chưa có thư viện thì cài như dưới
### Cách cài: 
axios : npm install axios
react-router-dom : npm install react-router-dom
Yêu cầu : Cài môi trường React Developer Tool

### Thực hiện:
	B1: Tiến hành git clone project hoặc download về máy
	B2: Copy thư mục node modules từ máy của bạn vào project
	B3: Khởi chạy Json-server : Vào thư mục json-server-> product-api -> cmd nhập lệnh
			json-server --watch db.json
	*Lưu ý: Đừng tắt cửa sổ cmd trong quá trình chạy
	B4: Khởi chạy project : Vào ra ngoài cùng của project chạy cmd bằng lệnh :
			npm start
	*Lưu ý : Nếu cửa sổ yêu cầu đổi cổng vì đã có ứng dụng chạy trên cổng mặc định 3000 
		, hãy bấm Y để đổi cổng và đợi server khởi động
