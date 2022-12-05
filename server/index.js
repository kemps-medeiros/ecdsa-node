const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;

app.use(cors());
app.use(express.json());

const balances = {
  "04503ed8c28106d066e8446821545551f6bd87bb1fa2d7ab5730d6a8b77a0ea79489d0fe020f162a3ec69c195f4e2437fe868ba337f1d720a415f0e91d5ac934b2": 100,
  "04c462699a4a03897700fa46c06e9f50e025b41d35b68d47c7fb5a37e6314e7424f09b80be0d2343a71aeb205e5ad24f22c268e0d1bdf6760b6e79bddda42f486d": 50,
  "0442ed08ff93f3439d922025e0ce351010363ef2eb2dac5f7a9854eaea741f4330d15b8f709ac05a0dbb5fbaed0de43eaeb65b0f62f1c9efd11fa2ed75fff71f24": 75,
};

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  console.log(address)
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  const { sender, recipient, amount } = req.body;

  setInitialBalance(sender);
  setInitialBalance(recipient);

  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
