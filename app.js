// Import module http dari Node.js
const http = require('http');

// Menentukan port yang akan digunakan
const PORT = process.env.PORT || 3000;

// Membuat server HTTP
const server = http.createServer((req, res) => {
  // Mengirimkan response dengan teks "Hello, World!"
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, World!\n');
});

// Mendengarkan permintaan pada port yang ditentukan
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

