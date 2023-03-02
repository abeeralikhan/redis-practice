const express = require("express");
const redis = require("redis");
const util = require("util");

const redisClient = redis.createClient("redis://localhost:49153");
const app = express();
const PORT = 8080;

redisClient.get = util.promisify(redisClient.get);
redisClient.set = util.promisify(redisClient.set);

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});
