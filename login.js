// Hàm để xác minh thông tin đăng nhập
function loginUser(username, password) {
    fetch('users.json') // Đảm bảo đây là đường dẫn chính xác đến file JSON của bạn
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
                localStorage.setItem('currentUser', username);
                updateUserDisplay();
                window.location.href = "index.html"; 
            } else {
                alert('Tên tài khoản hoặc mật khẩu không chính xác!');
            }
        })
        .catch(error => console.error('Lỗi:', error));
}
