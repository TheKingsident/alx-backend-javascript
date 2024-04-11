/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this._validateString(name, 'name');
    this._length = this._validateNum(length, 'length');
    this._students = this._validateArray(students, 'students');
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(value) {
    this._name = this._validateString(value, 'name');
  }

  set length(value) {
    this._length = this._validateNum(value, 'length');
  }

  set students(value) {
    this._students = this._validateArray(value, 'students');
  }

  _validateString(value, property) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    return value;
  }

  _validateNum(value, property) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    return value;
  }

  _validateArray(value, property) {
    if (!Array.isArray(value) || !value.every((item) => typeof item === 'string')) {
      throw new TypeError('Students mmust be ab array');
    }
    return value;
  }
}
