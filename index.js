const express = require("express");
require("dotenv").config();
const schema = require("./schema/schema");
const { graphqlHTTP } = require("express-graphql");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: (process.env.NODE_ENV = "development"),
  })
);
app.get("/", (req, res, next) => {
  res.send("This is the home page");
});

app.listen(5000, () => {
  console.log(`App listening on ${PORT}`);
});