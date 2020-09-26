const express = require('express');
const db = require('../db/index.js')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  db.find({})
    .then((results) => {
      res.send(results);

    })
})

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})