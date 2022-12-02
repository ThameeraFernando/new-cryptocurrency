const { GENESIS_DATA } = require("./config");
const cryptoHash = require("./crypto-hash");

//block class
class Block {
  //constructor
  constructor({ timestamp, lastHash, hash, data }) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }
  //return genesis block
  static genesis() {
    return new this(GENESIS_DATA);
  }
  //mined block function
  static minedBlock({ lastBlock, data }) {
    const timestamp = Date.now();
    const lastHash = lastBlock.hash;
    const hash = cryptoHash(timestamp, lastBlock.hash, data);
    return new this({
      timestamp,
      lastHash,
      data,
      hash,
    });
  }
}

module.exports = { Block };
