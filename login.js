const users = [
    { username: "hungdev123", password: "typescriptx123" } // Thay 'yourPassword' bằng mật khẩu thực tế
];

function updateUserDisplay() {
    const currentUser = localStorage.getItem('currentUser');
    const userDisplay = document.getElementById('userDisplay');
    const loginButton = document.getElementById('loginButton');
    const registerButton = document.getElementById('registerButton');
    const logoutButton = document.getElementById('logoutButton');

    if (currentUser) {
        userDisplay.textContent = `Xin chào, ${currentUser}!`;
        loginButton.style.display = 'none';
        registerButton.style.display = 'none';
        logoutButton.style.display = 'inline';
    } else {
        userDisplay.textContent = '';
        loginButton.style.display = 'inline';
        registerButton.style.display = 'inline';
        logoutButton.style.display = 'none';
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    updateUserDisplay();
    alert("Bạn đã đăng xuất thành công!");
}

function loginUser() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    const user = users.find(user => user.username === usernameInput && user.password === passwordInput);

    if (user) {
        localStorage.setItem('currentUser', user.username);
        updateUserDisplay();
        window.location.href = 'index.html'; // Chuyển hướng về trang chính
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
}

window.onload = updateUserDisplay;
