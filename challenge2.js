const fs = require('fs');

// Ghi file
fs.writeFileSync('note.txt', 'Học Node.js thật thú vị!');

// Đọc file
const data = fs.readFileSync('note.txt', 'utf8');
console.log("Nội dung file:", data);

const path = require('path');
const os = require('os');

console.log("Tên file hiện tại:", path.basename(__filename));
console.log("Bộ nhớ trống:", os.freemem() / 1024 / 1024 / 1024, "GB");
console.log("Tên người dùng hệ thống:", os.userInfo().username);