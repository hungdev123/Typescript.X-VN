const users = [
    {
        "username": "hungdev123",
        "password": "typescriptx123"
    },
    {
        "username": "anotherUser",
        "password": "anotherPassword"
    }
];

function loginUser(username, password) {
    const user = users.find(u => u.username === username);
    if (user && user.password === password) {
        alert('Đăng nhập thành công!');
        localStorage.setItem('currentUser', username);
        updateUserDisplay();
        window.location.href = "index.html";
    } else {
        alert('Tên tài khoản hoặc mật khẩu không chính xác!');
    }
}

function updateUserDisplay() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        const userDisplay = document.getElementById('userDisplay');
        userDisplay.textContent = `Xin chào, ${currentUser}!`;
    }
}

document.getElementById('loginButton').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    loginUser(username, password);
});

window.onload = updateUserDisplay;
