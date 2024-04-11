/* eslint-disable class-methods-use-this */
export default class Currency {
  constructor(code, name) {
    this._code = this._validateString(code, 'code');
    this._name = this._validateString(name, 'name');
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = this._validateString(value, 'code');
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = this._validateString(value, 'name');
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  _validateString(value, property) {
    if (typeof value !== 'string') {
      throw new TypeError(`${property} must be a string`);
    }
    return value;
  }
}
