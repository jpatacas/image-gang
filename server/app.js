const express = require('express');
const cors = require('cors');

const data = require('./data')
const facts = require('./facts')

const app = express();
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`Welcome to Image Gang! There are ${data.length} questions available`);
})

//get all questions

app.get('/data', (req, res) => {
    res.json(data);
})

//get specific question by id
app.get('/data/:id', (req, res) => {
    const idx = req.params.id;

    if (idx <= data.length) {
    
        res.send(data[idx-1]);
    } else {
        res.status(404).json({error: `id ${idx} not found`})
    }

})

//get a random fact by id
app.get('/scorepage', (req, res) => {
    const randIdx = Math.floor(Math.random () * facts.length)
    res.send(res.send(facts[randIdx]));
})



module.exports = app;
