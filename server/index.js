const express = require('express')
const app = express()
const port = 3001;
const unirest = require("unirest");

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})