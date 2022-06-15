const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res, next) => {
  res.send("This is the home page");
});

app.listen(5000, () => {
  console.log(`App listening on ${PORT}`);
});
