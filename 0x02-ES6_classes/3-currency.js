export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  get givenCode() {
    return this._code;
  }

  set givenCode(code) {
    this._code = code;
  }

  get givenName() {
    return this._name;
  }

  set givenName(name) {
    this._name = name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
