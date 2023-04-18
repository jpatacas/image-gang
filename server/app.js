const express = require('express');
const cors = require('cors');

const data = require('./data')

const app = express();
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`Welcome to Image Gang! There are ${data.length} questions available`);
})

app.get('/data/:id', (req, res) => {
    const idx = req.params.id;

    if (idx <= data.length) {
    
        res.send(data[idx-1]);
    } else {
        res.status(404).json({error: `id ${idx} not found`})
    }

})

module.exports = app;