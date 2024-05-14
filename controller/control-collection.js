const Note = require('../model/note-model');

const createNote = (note) => {
    const newNote = new Note({
        title: note.title,
        content: note.content,
        creationDate: Date.now()
    })
    return newNote.save()
        .then(
            () => { return true }
        )
}

const readNotes = async (params) => {
    const {from, to} = params;
    const notes = await Note.find();
    const paginatedNotes = notes.slice(from, to);
    if (paginatedNotes) {
        return paginatedNotes;
    } else {
        return null;
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

const searchNotes = async (params) => {
    try {
        let query = {};
        if (params) {
            const queryRegex = new RegExp(params, 'i');
            query = { $or: [{ title: queryRegex }, { content: queryRegex }] }
        }
        return await Note.find(query, null, { sort: { '_id': -1 } })

    } catch (error) {
        console.log('error in query : ', error);
    }
}


module.exports = { createNote, readNotes, updateNote, deleteNote, searchNotes };