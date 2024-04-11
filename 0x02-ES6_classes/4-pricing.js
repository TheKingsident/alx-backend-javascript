/* eslint-disable class-methods-use-this */
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = this._validateNumber(amount, 'amount');
    this._currency = this._validateCurrency(currency, 'currency');
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = this._validateNumber(value, 'amount');
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = this._validateCurrency(value, 'currency');
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

  _validateNumber(value, property) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new TypeError(`${property} must be a number`);
    }
    return value;
  }

  _validateCurrency(value, property) {
    if (!(value instanceof Currency)) {
      throw new TypeError(`${property} must be a currency`);
    }
    return value;
  }
}
