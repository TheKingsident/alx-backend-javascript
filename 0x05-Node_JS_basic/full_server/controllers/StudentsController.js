import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(_, response) {
    try {
      const data = await readDatabase(process.argv[2]);
      const str1 = 'This is the list of our students\n';
      const str2 = `Number of students in CS: ${data.compScienceStudents.length}. List: ${data.compScienceStudents.join(', ')}\n`;
      const str3 = `Number of students in SWE: ${data.softwareEngStudents.length}. List: ${data.softwareEngStudents.join(', ')}`;
      response.send(str1 + str2 + str3);
    } catch (e) {
      response.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, response) {
    const { major } = req.params;

    if (!['CS', 'SWE'].includes(major)) {
      return response.status(500).send('Major parameter must be CS or SWE');
    }
    try {
      const data = await readDatabase(process.argv[2]);
      const list = major === 'CS' ? data.compScienceStudents.join(', ') : data.softwareEngStudents.join(', ');
      return response.status(200).send(`List: ${list}`);
    } catch (e) {
      return response.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
