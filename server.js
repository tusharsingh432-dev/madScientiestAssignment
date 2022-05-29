const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Server Running///////');
})

app.listen(8080, () => {
    console.log('listening on port 8080');
})