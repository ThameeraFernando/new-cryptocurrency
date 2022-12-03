const { STARTING_BALLANCE } = require("../config");
const { ec } = require("../utils");
const cryptoHash = require("../utils/crypto-hash");
class Wallet {
  constructor() {
    this.balance = STARTING_BALLANCE;

    this.keyPair = ec.genKeyPair();
    this.publicKey = this.keyPair.getPublic().encode("hex");
  }
  sign(data) {
    return this.keyPair.sign(cryptoHash(data));
  }
}

module.exports = Wallet;
