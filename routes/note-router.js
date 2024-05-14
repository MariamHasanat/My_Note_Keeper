const controlCollection = require('../controller/control-collection');
const express = require('express');
const router = express.Router();
const cors = require('cors')

router.use(express.json());
router.use(cors());

router.get('/?', async (req, res) => {
    try {
        const page = req.query.page ? Number(req.query.page) : 0;
        const limit = req.query.limit ? Number(req.query.limit) : 4;
        const from = page * limit;
        const to = from + limit;
        const notes = await controlCollection.getNotes({ from, to });
        res.status(200).send(notes).end();
    } catch (error) {
        res.status(501).send('failed to retrieve data ').end();
    }
});
router.get(`/search?`, async (req, res) => {
    try {
        const query = req.query.query;
        const notes = await controlCollection.searchNotes(query);
        res.status(200).send(notes).end();
    } catch (error) {
        res.status(501).send('failed to retrieve data ').end();
    }
});
router.post('/', async (req, res) => {
    try {
        const createdNote = await controlCollection.postNote(req.body);
        res.status(200).send(createdNote).end();
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
        await controlCollection.putNote(req.params.id, req.body);
        res.status(200).send("updated successfully").end();
    } catch (error) {
        res.status(501).send('failed to update data ').end();
    }
})



module.exports = router;