const crypto = require("crypto");
const cryptoHash = (...inputs) => {
  //create hash object and return it
  const hash = crypto.createHash("sha256");
  hash.update(inputs.sort().join(" "));
  return hash.digest("hex");
};

module.exports = cryptoHash;
