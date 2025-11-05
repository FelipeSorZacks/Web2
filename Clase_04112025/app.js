const express = require('express');
const pagesRoutes = require('./routes/pages');

const app = express();
app.use('/', pagesRoutes);

const port = 2000;

const path = require('path');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.redirect('/page1');
});

app.listen(port, () => {
  console.log(`Servidor: http://localhost:${port}/`);
});




