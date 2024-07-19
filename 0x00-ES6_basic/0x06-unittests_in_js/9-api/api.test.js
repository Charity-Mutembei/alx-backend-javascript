const request = require("request");
// mocha 
const { describe, it } = require("mocha");
// chai 
const expect = require("chai").expect;

describe("Index page", function () {
  const options = {
    url: "http://localhost:7865/",
    method: "GET",
  };
  it("status code", function (done) {
    request(options, function (err, res, body) {
      if (err) {
        console.error(err);
        done(err);
        return;
      }
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it("correct content", function (done) {
    request(options, function (err, res, body) {
      if (err) {
        console.error(err);
        done(err);
        return;
      }

      expect(body).to.equal("Welcome to the payment system");
      done();
    });
  });
});

describe("Cart page", function () {
  it("code for correct url", function (done) {
    request.get("http://localhost:7865/cart/12", function (err, res, body) {
      if (err) {
        console.error(err);
        done(err);
        return;
      }

      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it("correct url content", function (done) {
    request.get("http://localhost:7865/cart/12", function (err, res, body) {
      if (err) {
        console.error(err);
        done(err);
        return;
      }

      expect(body).to.contain("Payment methods for cart 12");
      done();
    });
  });

  it("status for incorrect url", function (done) {
    request.get("http://localhost:7865/cart/k", function (err, res, body) {
      if (err) {
        console.error(err);
        done(err);
        return;
      }

      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
