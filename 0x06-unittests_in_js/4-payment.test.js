const { describe, it } = require("mocha");
const sinon = require("sinon");
const Utils = require("./utils");
const assert = require("assert");
const sendPaymentRequestToApi = require("./4-payment");

describe("sendPaymentRequestToApi", function () {
  it("Utils.calculateNumber is stubbed", function () {
    const stub = sinon.stub(Utils, "calculateNumber").returns(10);
    const spy = sinon.spy(console, "log");
    sendPaymentRequestToApi(100, 20);

    assert(stub.withArgs("SUM", 100, 20).calledOnce);
    assert(spy.withArgs("The total is: 10").calledOnce);
  });
});
