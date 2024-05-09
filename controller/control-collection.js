const Note = require('../model/note-model');

const createNote = (note) => {
    const newNote = new Note({
        title: note.title,
        content: note.content,
        creationDate: Date.now()
    })
    console.log(newNote);
    return newNote.save()
        .then(
            () => { return true }
        )
}

const readNotes = async () => {
    const notes = await Note.find();
    if (notes) {
        return notes;
    } else {
        return null
    }
}

const updateNote = async (id, newData) => {
    try {
        const updatedNote = {
            title: newData.title,
            content: newData.content,
            creationDate: newData.creationDate
        }
        const updated = await Note.findByIdAndUpdate(id, updatedNote);
        if (!updated) {
            console.log('failed to update');
            return null
        } else {
            return updated
        }

    } catch (error) {
        console.log('failed to update : \n', error);
    }
}

const deleteNote = async (id) => {
    try {
        await Note.findByIdAndDelete(id);
    } catch (error) {
        console.log('error in delete ', error);
    }
}

module.exports = { createNote, readNotes, updateNote, deleteNote };