const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/users');

const db = mongoose.connection;

db.on('connected', ()=>{
    console.log('Success');
})

module.exports = db;