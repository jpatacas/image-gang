const express = require('express');
const cors = require('cors');

const data = require('./data')
const facts = require('./facts')
const score = require('./score')


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

// get all facts
app.get('/facts', (req, res) => {
  res.json(facts);
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
app.get('/facts', (req, res) => {
    //console.log('Facts', facts);
    res.send(facts);
    displayFacts(facts);
 }) 

app.get('/scorepage', (req, res) => {
    //console.log('Facts:', facts);
    const randIdx = Math.floor(Math.random () * facts.length)
    res.send(facts[randIdx]);
  })

app.get('/score', (req, res) => {
    //console.log(score)
    res.send(score)
})

//update the score
app.post('/score', (req, res) => {
    //score.score = req.body;
    score.score = req.body.score;

    console.log(score)

    res.json(score);
  });

module.exports = app;
