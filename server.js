const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.json());
app.use(express.static('.')); // Để phục vụ file HTML và JS từ thư mục gốc

// Đăng ký người dùng
app.post('/register', (req, res) => {
    const newUser = req.body;

    fs.readFile('users.json', (err, data) => {
        if (err) return res.status(500).send(err);

        const users = JSON.parse(data);
        users.push(newUser);

        fs.writeFile('users.json', JSON.stringify(users), (err) => {
            if (err) return res.status(500).send(err);
            res.status(201).send('User registered successfully!');
        });
    });
});

// Đăng nhập người dùng
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    fs.readFile('users.json', (err, data) => {
        if (err) return res.status(500).send(err);

        const users = JSON.parse(data);
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            res.status(200).send('Login successful!');
        } else {
            res.status(401).send('Invalid username or password.');
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
