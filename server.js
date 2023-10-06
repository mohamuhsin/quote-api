const express = require("express");
const app = express();

const { quotes } = require("./data");
const { getRandomElement } = require("./utils");

const PORT = process.env.PORT || 4001;

app.use(express.static("public"));

app.get("/api/quotes/random", (req, res, next) => {
  const randomQuote = getRandomElement(quotes);
  res.json({ quote: randomQuote });
});

app.get("/api/quotes", (req, res, next) => {
  const person = req.params.person;
  if (!person) {
    res.send({ quotes: quotes });
  } else {
    res.send({ quotes: [] });
  }
});

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
