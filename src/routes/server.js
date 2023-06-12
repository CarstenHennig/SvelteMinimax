const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// const express = require("express");
// const app = express();

// app.use(express.static("public"));

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });