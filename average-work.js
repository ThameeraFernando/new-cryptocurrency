const BlockChain = require("./blockchain");
const blockchain = new BlockChain();
blockchain.addBlock({ data: "initial" });

let prevTimestamp, nextTimestamp, nextBlock, timeDiff, average;

const times = [];

for (let i = 0; i < 10000; i++) {
  //get the previous timestamp before adding a new block
  prevTimestamp = blockchain.chain[blockchain.chain.length - 1].timestamp;

  //add a new block
  blockchain.addBlock({ data: `block ${i}` });
  //   console.log(blockchain.chain[blockchain.chain.length - 1].hash);
  //get the next timestamp after adding a new block
  nextBlock = blockchain.chain[blockchain.chain.length - 1];
  nextTimestamp = nextBlock.timestamp;

  //get the time difference
  timeDiff = nextTimestamp - prevTimestamp;

  times.push(timeDiff);
  average = times.reduce((total, num) => total + num) / times.length;
  console.log(
    `Time to mine block:${timeDiff}ms. Difficulty: ${nextBlock.difficulty}. Average time: ${average}ms`
  );
}
