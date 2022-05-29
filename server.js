const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.post('/api/report', (req, res) => {
    console.log(req.body);

    res.send("Success");
})

app.get('/', (req, res) => {
    res.send('Server Running///////');
})

app.listen(8000, () => {
    console.log('listening on port 8080');
})