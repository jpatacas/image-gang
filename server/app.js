const express = require('express');
const cors = require('cors');

const data = require('./data')

const app = express();
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`Welcome to Image Gang! There are ${data.length} questions available`);
})

module.exports = app;