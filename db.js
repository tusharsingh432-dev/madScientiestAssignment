
const mongoose = require('mongoose');

const mongoUrl = 'mongodb+srv://tushar:admin@cluster0.toaxj.mongodb.net/madScientist';

console.log(Date.now());

mongoose.connect(mongoUrl, { useUnifiedTopology: true, useNewUrlParser: true })

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Database Linked...');
})

db.on('error', () => {
    console.log('Error!!!');
})

module.exports = mongoose;