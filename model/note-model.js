const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        unique: true
    },
    content:{
        type: String,
        require: true
    },
    creationDate:{
        type: Date,
        require:true
    }
});

const Note = mongoose.model('Note', noteSchema);// this will create a collection in DataBase and return it with a set of methods to deal with this collection

export default Note;