const express = require('express');
const morgan = require('morgan');
const db = require('./db.js');
const path = require('path');
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

app.use(express.static(path.join(__dirname, "client", "build")));
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const port = process.env.PORT || 8000;

// app.get('/', (req, res) => {
//     res.send('Server Running///////');
// })

app.listen(port, () => {
    console.log('listening on port 8080');
})