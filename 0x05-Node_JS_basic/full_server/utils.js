const fs = require('fs');

async function readDatabase(file) {
  let data;
  try {
    data = await fs.promises.readFile(file, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
  const students = data.split('\n')
    .map((row) => row.split(','))
    .filter((row) => row.length === 4 && row[0] !== 'firstname')
    .map((row) => ({
      firstName: row[0],
      lastName: row[1],
      age: row[2],
      field: row[3].replace('\r', ''),
    }));

  const compScienceStudents = students.filter((student) => student.field === 'CS')
    .map((student) => student.firstName);
  const softwareEngStudents = students.filter((student) => student.field === 'SWE')
    .map((student) => student.firstName);
  return { compScienceStudents, softwareEngStudents };
}

export default readDatabase;
