const express = require("express");
const app = express();

app.use(express.static("public"));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
const express = require("express");
const app = express();
const { handleClick, resetGame } = require("./public/api.js");

app.use(express.static("public"));

app.post("/api/click/:index", (req, res) => {
  const index = req.params.index;
  handleClick(index);
  res.sendStatus(200);
});

app.post("/api/reset", (req, res) => {
  resetGame();
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
