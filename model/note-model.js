const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        unique: true
    },
    content: {
        type: String,
        require: true
    },
    creationDate: {
        type: Date, 
    }
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;