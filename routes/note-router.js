import controlCollection from '../controller/control-collection';
const express = require('express');
const mongoose = require('mongoose')
const router = express.Router();
const cors = require('cors')

router.use(express.json());
router.use(cors());

router.get('/', async(req, res)=>{
    try {
        const notes = await controlCollection.readNotes()
        res.status(200).send(notes).end();
    } catch (error) {
        res.status(501).send('failed to retrieve data ').end();
    }
});
