const { describe, it } = require("mocha");
const sendPaymentRequestToApi = require("./5-payment");
const expect = require("chai").expect;
const sinon = require("sinon");

describe("sendPaymentRequestToApi", function () {
  beforeEach("Set up spy", function () {
    sinon.spy(console, "log");
  });
  afterEach("restore spy", function () {
    console.log.restore();
  });
  it("console.log is called with right arg", function () {
    sendPaymentRequestToApi(10, 10);

    expect(console.log.withArgs("The total is: 20").calledOnce).to.be.true;
  });
  it("console.log is called with right arg", function () {
    sendPaymentRequestToApi(100, 20);

    expect(console.log.withArgs("The total is: 120").calledOnce).to.be.true;
  });
});
