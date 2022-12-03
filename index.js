const express = require("express");
const bodyParser = require("body-parser");
const BlockChain = require("./blockchain");
const PORT = 3000;
const app = express();
const blockchain = new BlockChain();
app.use(bodyParser.json());
app.get("/api/blocks", (req, res) => {
  res.json(blockchain.chain);
});
app.post("/api/mine", (req, res) => {
  const { data } = req.body;
  blockchain.addBlock({ data });
  res.redirect("/api/blocks");
});
app.listen(PORT, () => {
  console.log(`server is listening at localhost:${PORT}`);
});
