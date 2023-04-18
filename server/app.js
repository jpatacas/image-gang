const express = require('express');
const cors = require('cors');

const data = require('./data')

const app = express();
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`Welcome to Image Gang! There are ${data.length} questions available`);
})

app.get("/data/:id", (req, res) => {
    const idx = req.params.id;
  
    res.send(data[idx - 1]);
  
    if (!data) {
      res.status(404).json({ message: `Data with id ${idx - 1} not found` });
    } else {
      res.send(data);
    }
  });














module.exports = app;