const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Gracias por darme vida Felip');
});

const port = 2050;

app.listen(port, () => {
  console.log(`Servidor: http://localhost:${port}/`);
});