const fs = require('fs');

async function countStudents(file) {
  try {
    let students = await fs.promises.readFile(file, 'utf-8');
    students = students.split('\n').slice(1);
    students.pop();
    const firstName = [];
    const fields = [];
    const count = {};
    const sweStudents = [];
    const csStudents = [];
    for (const line of students) {
      const col = line.split(',');
      firstName.push(col[0]);
      fields.push(col[3]);
      if (col[3] === 'SWE') {
        sweStudents.push(col[0]);
      } else {
        csStudents.push(col[0]);
      }
    }
    for (const field of fields) {
      if (count[field]) {
        count[field] += 1;
      } else {
        count[field] = 1;
      }
    }
    console.log(`Number of students: ${students.length}`);
    console.log(`Number of students in CS: ${count.CS}. List: ${csStudents.join(', ')}`);
    console.log(`Number of students in SWE: ${count.SWE}. List: ${sweStudents.join(', ')}`);

    return { students, count, csStudents, sweStudents };
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;