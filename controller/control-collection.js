const Note = require('../model/note-model');

const postNote = async (note) => {
    try {
        const newNote = new Note({
            title: note.title,
            content: note.content,
            creationDate: Date.now()
        })
        return await newNote.save();
    } catch (error) {
        throw Error("failed to create the note");
    }
}

const getNotes = async (params) => {
    try {
        const { from, to } = params;
        const notes = await Note.find();
        const paginatedNotes = notes.slice(from, to);
        if (paginatedNotes) {
            return paginatedNotes;
        } else {
            return null;
        }
    } catch (error) {
        throw Error(`${error}`);
    }
}

const putNote = async (id, newData) => {
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
        throw Error(error);
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


module.exports = { postNote, getNotes, putNote, deleteNote, searchNotes };