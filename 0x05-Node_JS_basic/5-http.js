/* eslint-disable func-style */
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const countStudents = filePath => new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
                return;
            }

            const lines = data.trim().split('\n');
            if (lines.length <= 1) {
                resolve({
                    'total': 0,
                    'fields': {}
                });
                return;
            }

            const students = lines.slice(1).filter(line => line.trim() !== '');
            const fields = {};

            students.forEach(line => {
                const [firstname,,, field] = line.split(',');
                if (!fields[field]) {
                    fields[field] = [];
                }
                fields[field].push(firstname);
            });

            resolve({
                'total': students.length,
                fields
            });
        });
    });

const app = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const {query} = parsedUrl;
    const {pathname} = parsedUrl;

    if (pathname === '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello Holberton School!');
    } else if (pathname === '/students') {
        const filePath = query.filePath || path.resolve(__dirname, 'database.csv');
        countStudents(filePath).
            then(data => {
                let responseText = `This is the list of our students\nNumber of students: ${data.total}\n`;
                for (const field in data.fields) {
                    if (Object.prototype.hasOwnProperty.call(data.fields, field)) {
                        const list = data.fields[field];
                        responseText += `Number of students in ${field}: ${list.length}. List: ${list.join(', ')}\n`;
                    }
                }
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end(responseText);
            }).
            catch(err => {
                res.statusCode = 500;
                res.setHeader('Content-Type', 'text/plain');
                res.end(err.message);
            });
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Not Found');
    }
});

const PORT = 1245;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
