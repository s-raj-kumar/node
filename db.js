const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URL);

const db = mongoose.connection;

db.on('connected', ()=>{
    console.log('Success');
})

module.exports = db;