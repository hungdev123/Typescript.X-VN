fetch('users.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Mã lỗi: ' + response.status);
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // Đây là nơi bạn sẽ thấy nội dung của file JSON
    })
    .catch(error => console.error('Lỗi:', error));
