const express = require('express');
const db = require('./db');
const personRoute = require('./Routes/PersonRoute')
const app = express();
require('dotenv').config();

const body = require('body-parser');
app.use(body.json())

app.get('/', (req, res) => {
	res.send('Success');
})

app.use('/people', personRoute);

app.listen(process.env.PORT);