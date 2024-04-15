export default function getListStudentIds(arrayOfObjects) {
  if (arrayOfObjects instanceof Array) {
    return arrayOfObjects.map((student) => student.id);
  }
  return [];
}
