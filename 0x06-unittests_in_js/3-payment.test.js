const {describe, it} = require("mocha");
const sinon = require("sinon");
const Utils = require("./utils");
const assert = require("assert");
const sendPaymentRequestToApi = require("./3-payment");

describe("sendPaymentRequestToApi", function() {
    it("was Utils.calculateNumber called once", function() {
	const spy = sinon.spy(Utils, "calculateNumber");

	sendPaymentRequestToApi(20, 100);

	assert(spy.calledOnce);
	spy.restore();
    });
});
