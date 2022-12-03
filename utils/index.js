const cryptoHash = require("./crypto-hash");

const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const verifySignature = ({ data, signature, publicKey }) => {
  const keyFromPublic = ec.keyFromPublic(publicKey, "hex");

  return keyFromPublic.verify(cryptoHash(data), signature);
};

module.exports = { ec, verifySignature };
