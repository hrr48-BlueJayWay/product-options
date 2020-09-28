const express = require('express');
const db = require('../db/index.js')
const app = express();
const port = 3000;

app.use(express.json())

app.get('/products/find/:id', (req, res) => {
  db.find({id: req.params.id})
    .then((results) => {
      res.send(results);
    })
})

app.delete('/', (req, res) => {
  db.deleteMany({})
  .then((results) => {
    res.send(results);
  })
})

app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})