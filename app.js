const express = require('express');
const app = express();
const puerto = 3000;

app.get('/', (req, res) => {
  res.send('¡Hola Itla!');
});

const servidor = app.listen(puerto, () => {
  console.log(`La aplicación está escuchando en http://localhost:${puerto}`);
});

module.exports = servidor;