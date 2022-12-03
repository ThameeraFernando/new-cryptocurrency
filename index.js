const express = require("express");
const bodyParser = require("body-parser");

const PubSub = require("./pubsub");
const BlockChain = require("./blockchain");

const DEFAULT_PORT = 3000;
let PEER_PORT;

if (process.env.GENERATE_PEER_PORT === "true") {
  PEER_PORT = DEFAULT_PORT + Math.ceil(Math.random() * 1000);
}

const app = express();
app.use(bodyParser.json());

const blockchain = new BlockChain();
const pubsub = new PubSub({ blockchain });

setTimeout(() => {
  pubsub.broadcastChain();
}, 1000);

app.get("/api/blocks", (req, res) => {
  res.json(blockchain.chain);
});

app.post("/api/mine", (req, res) => {
  const { data } = req.body;
  blockchain.addBlock({ data });

  pubsub.broadcastChain();

  res.redirect("/api/blocks");
});

const PORT = PEER_PORT || DEFAULT_PORT;
app.listen(PORT, () => {
  console.log(`server is listening at localhost:${PORT}`);
});
