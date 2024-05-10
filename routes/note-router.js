const controlCollection = require('../controller/control-collection');
const express = require('express');
const mongoose = require('mongoose')
const router = express.Router();
const cors = require('cors')

router.use(express.json());
router.use(cors());

router.get('/', async (req, res) => {
    try {
        const notes = await controlCollection.readNotes();
        res.status(200).send(notes).end();
    } catch (error) {
        res.status(501).send('failed to retrieve data ').end();
    }
});

// router.get(`/search?title=${req.query.title}&&content=${req.query.content}`, async (req, res) => {
router.get(`/search?`, async (req, res) => {
    try {
        const title = req.query.title;
        const content = req.query.content;
        console.log('title', title, '\n', 'content', content);
        const notes = await controlCollection.searchNotes({title, content});
        res.status(200).send(notes).end();
    } catch (error) {
        res.status(501).send('failed to retrieve data ').end();
    }
});


router.post('/', async (req, res) => {
    try {
        await controlCollection.createNote(req.body);
        res.status(200).send("created successfully").end();
    } catch (error) {
        res.status(501).send('failed to save data ').end();
    }
})
router.delete('/:id', async (req, res) => {
    try {
        await controlCollection.deleteNote(req.params.id);
        res.status(200).send("deleted successfully").end();
    } catch (error) {
        res.status(501).send('failed to delete data ').end();
    }
})
router.put('/:id', async (req, res) => {
    try {
        await controlCollection.updateNote(req.params.id, req.body);
        res.status(200).send("updated successfully").end();
    } catch (error) {
        res.status(501).send('failed to update data ').end();
    }
})



module.exports = router;