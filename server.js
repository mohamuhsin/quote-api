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
  const person = req.query.person;
  if (person) {
    const qouteByPerson = quotes.filter(
      (quote) => quote.person === req.query.person
    );
    res.send({ quote: qouteByPerson });
  } else {
    res.send({ quotes: quotes });
  }
});

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
