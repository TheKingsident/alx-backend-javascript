/* eslint-disable class-methods-use-this */
export default class Building {
  constructor(sqft) {
    this._sqft = this._validateSQFT(sqft, 'sqft');
  }

  get sqft() {
    return this._sqft;
  }

  _validateSQFT(value, property) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new TypeError(`${property} must be a number`);
    }
    return value;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
