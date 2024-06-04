const express = require('express');

const app = express();

app.get('/', (_, response) => {
  response.setHeader('Content-Type', 'text/plain');
  response.send('Hello Holberton School!');
}).listen(1245);

module.exports = app;
