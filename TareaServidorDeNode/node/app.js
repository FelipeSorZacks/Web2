const http = require('http');

const port = 2050;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Gracias por darme vida Felip\n');
});

server.listen(port, () => {
  console.log(`Servidor: http://127.0.0.1:${port}/`);
});



