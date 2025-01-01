const express = require('express');
const db = require('./db');
const personRoute = require('./Routes/PersonRoute')
const app = express();

const body = require('body-parser');
app.use(body.json())

app.get('/', (req, res) => {
	res.send('Success');
})

app.use('/people', personRoute);

app.listen(3000);