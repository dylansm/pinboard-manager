var expect = require("chai").expect
var app = require("../lib/pinboard_manager.js")

describe("PinboardManager", function() {
  describe("#setupAPIToken", function() {
    it("exits if no API key found", function() {
      expect(PinboardManager.api_key).to.equal("test-api-key")
    })
  })
})
