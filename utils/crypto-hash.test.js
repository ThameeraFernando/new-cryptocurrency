const cryptoHash = require("./crypto-hash");

describe("cryptoHash", () => {
  it("generates a SHA-256 hashed output", () => {
    expect(cryptoHash("fooo")).toEqual(
      "b2a629cfebe3f300e4a98ad24d8aa03285ecbd8a59f27196d343edf45d41e424"
    );
  });
  it("produces the same hash with the same input arguments in any order", () => {
    expect(cryptoHash("one", "two", "three")).toEqual(
      cryptoHash("three", "two", "one")
    );
  });
});
