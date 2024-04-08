export default function createIteratorObject(report) {
  const departments = Object.values(report.allEmployees);

  function* employeeGenerator() {
    for (const department of departments) {
      for (const employee of department) {
        yield employee;
      }
    }
  }

  return {
    [Symbol.iterator]: employeeGenerator,
  };
}
