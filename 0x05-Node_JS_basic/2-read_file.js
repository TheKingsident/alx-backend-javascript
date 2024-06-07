fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split the file content by new lines
    const lines = data.trim().split('\n');

    // Check if there are any lines other than the header
    if (lines.length <= 1) {
      console.log('Number of students: 0');
      return;
    }

    // Remove the header line and filter out empty lines
    const students = lines.slice(1).filter((line) => line.trim() !== '');

    // Log the total number of students
    console.log(`Number of students: ${students.length}`);

    // Initialize a map to store the students by field
    const fields = {};

    // Process each student
    students.forEach((line) => {
      const [firstname,,, field] = line.split(',');

      if (!fields[field]) {
        fields[field] = [];
      }

      fields[field].push(firstname);
    });

    // Log the number of students in each field and their names
    for (const field in fields) {
      if (Object.prototype.hasOwnProperty.call(fields, field)) {
        const list = fields[field];
        console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

// Export the function for use in other files
module.exports = countStudents;
