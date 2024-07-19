const request = require("request");
const { describe, it } = require("mocha");
const expect = require("chai").expect;

describe("Index page", function () {
  const options = {
    url: "http://localhost:7865/",
    method: "GET",
    timeout: 5000, // 5 seconds
  };

  it("status code", function (done) {
    request(options, function (error, response, body) {
      if (error) {
        console.error(error);
        done(error);
        return;
      }

      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("correct content", function (done) {
    request(options, function (error, response, body) {
      if (error) {
        console.error(error);
        done(error);
        return;
      }

      expect(body).to.contain("Welcome to the payment system");
      done();
    });
  });

  it("content length", function (done) {
    request(options, function (error, response, body) {
      if (error) {
        console.error(error);
        done(error);
        return;
      }

      expect(response.headers["content-length"]).to.equal("29");
      done();
    });
  });
});
