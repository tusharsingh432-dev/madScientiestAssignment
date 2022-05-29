const express = require('express');
const morgan = require('morgan');
const db = require('./db.js');
const Report = require('./reportModel');
const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.post('/api/report', async (req, res) => {
    console.log(req.body);
    try {
        const cardId = req.body.cardId;
        const newReport = new Report({ cardId });
        const response = await newReport.save();
        res.status(201).json({
            status: 'success',
            data: {
                response
            }
        })
    } catch (err) {
        res.status(500).json({
            status: 'error',
            data: {
                err
            }
        })
    }
})

app.get('/', (req, res) => {
    res.send('Server Running///////');
})

app.listen(8000, () => {
    console.log('listening on port 8080');
})