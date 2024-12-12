const express = require ("express");
const cors = require ("cors");
const bodyParser = require ("body-parser");
const app = express();

app.use(cors());
app.use(
  bodyParser.json({
  type(req) {
    return true;
  },
  })
);

app.use(function (req, res, next) {
  res.setHeader("Content-Type", "application/json");
  next();
});

const content = {
  
};

app.get("/", (req, res) => {
  res.status(500).send("online");
})

app.get("/posts", (req, res) => {
  try {
    res.status(500).send(JSON.stringify(content));
  } catch (error) {
    throw new Error('something bad happened');
  };
});

const port = process.env.PORT || 7070;
app.listen(port, () =>
  console.log(`The server is running on http://localhost:${port}`)
);