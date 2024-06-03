const fs = require('fs');

function countStudents(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
                return;
            }

            const lines = data.trim().split('\n');
            if (lines.length <= 1) {
                console.log('Number of students: 0');
                resolve();
                return;
            }

            const students = lines.slice(1).filter(line => line.trim() !== '');
            console.log(`Number of students: ${students.length}`);

            const fields = {};

            students.forEach(line => {
                const [firstname,,, field] = line.split(',');
                if (!fields[field]) {
                    fields[field] = [];
                }
                fields[field].push(firstname);
            });

            for (const field in fields) {
                if (Object.prototype.hasOwnProperty.call(fields, field)) {
                    const list = fields[field];
                    console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
                }
            }
            resolve();
        });
    });
}

// Export the function for use in other files
module.exports = countStudents;
