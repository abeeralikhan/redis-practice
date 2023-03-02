const express = require("express");
const { createClient } = require("redis");

const client = createClient();
const app = express();
const PORT = 8080;

app.use(express.json());

app.post("/", async (req, res) => {
  const { key, value } = req.body;

  console.log(key, value);

  const response = await client.set(key, value);

  res.status(200).send(response);
});

app.get("/:key", async (req, res) => {
  const { key } = req.params;

  const value = await client.get(key);

  res.status(200).send(value);
});

async function runServer() {
  await client.connect();

  app.listen(PORT, () => {
    console.log(`Server is listening at ${PORT}`);
  });
}

runServer();
