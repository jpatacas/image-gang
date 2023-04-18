const express = require('express');
const cors = require('cors');

const data = require('./data')

const app = express();
app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send(`Welcome to Image Gang! There are ${data.length} questions available`);
})

<<<<<<< HEAD
module.exports = app;
=======
app.get('/data/:id', (req, res) => {
    const idx = req.params.id;

    if (idx < data.length) {
    
        res.send(data[idx]);
    } else {
        res.status(404).json({error: `id ${idx} not found`})
    }

})

module.exports = app;
>>>>>>> ea6472a2e1f86c157018c4a3f7e0a685deca15ef
