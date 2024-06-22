const expect = require("chai").expect;
const request = require("request");
const { describe, it } = require("mocha");

describe("Index page", function () {
  const options = {
    url: "http://localhost:7865/",
    method: "GET",
  };

  it("status code", function (done) {
    request(options, function (res) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("correct content", function (done) {
    request(options, function (body) {
      expect(body).to.contain("Welcome to the payment system");
      done();
    });
  });

  it("content length", function (done) {
    request(options, function (res) {
      expect(res.headers["content-length"]).to.equal("29");
      done();
    });
  });
});
