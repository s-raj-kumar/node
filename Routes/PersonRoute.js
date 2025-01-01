const express = require('express');
const router = express();
const person = require('./../models/People');
const req = require('express/lib/request');

router.get('/', async (req, res) => {
	try {
		var data = await person.find();
		console.log('Data fetched');
		res.status(200).send(data);
	} catch (err) {
		res.status(500).send({error: 'Internal Error'});
		console.log(err);
	}
})

router.post('/', async (req, res) => {
	try {
		var data = req.body;
		var per = new person(data);
		var savPerson = await per.save();
		res.status(200).send(savPerson);
	} catch (err) {
		res.status(500).send({error: 'Internal Error'});
		console.log(err);
	}
})

router.get('/:nam', async (req, res) => {
	try {
		var nam = req.params.nam;
		var data = await person.find({name: nam});
		res.status(200).send(data);
	} catch (error) {
		console.log('Error');
		res.status(500).send({error: 'Internal Error'});
	}
})

router.put('/:id', async (req, res) => {
    try {
        var id = req.params.id;
        var updPerson = req.body;
        var respone = await person.findByIdAndUpdate(id, updPerson, {
            new: true,
            runValidators: true
        })
        if (!respone) {
            res.status(404).send({error: 'Person not found'});
        } else {
            res.status(200).send(respone);
        }
    } catch (err) {
        res.status(500).send({error: 'Internal Error'});
        console.log(err);
    }
})

router.delete('/:id', async (req, res) => {
    try {
        var id = req.params.id;
        var respone = await person.findByIdAndDelete(id);
        if (!respone) {
            res.status(404).send({error: 'Person not found'});
        } else {
            res.status(200).send(respone);
        }
    } catch (err) {
        res.status(500).send({error: 'Internal Error'});
        console.log(err);
    }
})


module.exports = router;