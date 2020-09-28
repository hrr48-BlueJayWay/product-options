const express = require('express');
const db = require('../db/index.js')
const app = express();
const port = 3000;

app.use(express.json())

app.get('/products/:id', (req, res) => {
  console.log(req.params);
  let id = req.params.id;
  console.log('this is id', id, typeof id)
  db.findOne({ id })
    .then((results) => {
      // console.log(typeof results[240].id)
      res.send(results);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
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