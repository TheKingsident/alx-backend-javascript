const express = require('express');
const fs = require('fs');
const path = require('path');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const dbFile = process.argv[2];

  countStudents(dbFile)
    .then((data) => {
      let response = 'This is the list of our students\n';
      response += `Number of students: ${data.students.length}\n`;
      response += `Number of students in CS: ${data.count.CS}. List: ${data.csStudents.join(', ')}\n`;
      response += `Number of students in SWE: ${data.count.SWE}. List: ${data.sweStudents.join(', ')}`;
      res.send(response);
    })
    .catch((err) => {
      res.send('This is the list of our students\n' + err.message);
    });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = app;
