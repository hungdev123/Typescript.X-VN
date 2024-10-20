// Hàm để xác minh thông tin đăng nhập
function loginUser(username, password) {
    fetch('users.json') // Thay đổi đường dẫn đến file JSON
        .then(response => {
            if (!response.ok) {
                throw new Error('Mã lỗi: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            const user = data.users.find(u => u.username === username);
            if (user && user.password === password) {
                alert('Đăng nhập thành công!');
                localStorage.setItem('currentUser', username); // Lưu tên người dùng vào localStorage
                updateUserDisplay(); // Cập nhật giao diện với tên người dùng
                window.location.href = "index.html"; // Chuyển đến trang chính
            } else {
                alert('Tên tài khoản hoặc mật khẩu không chính xác!');
            }
        })
        .catch(error => console.error('Lỗi:', error));
}

// Hàm để cập nhật giao diện với tên người dùng
function updateUserDisplay() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        const userDisplay = document.getElementById('userDisplay');
        userDisplay.textContent = `Xin chào, ${currentUser}!`; // Hiển thị tên người dùng
    }
}

// Gán sự kiện cho nút đăng nhập
document.getElementById('loginButton').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    loginUser(username, password);
});

// Cập nhật giao diện khi tải trang
window.onload = updateUserDisplay;
