const mongoose = require('mongoose');

const schem = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    hobby: {
        type: String,
        required: true
    }
});

const Person = mongoose.model('People1', schem)
module.exports = Person;