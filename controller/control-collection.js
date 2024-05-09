import Note from '../model/note-model';

const createNote = (note) => {
    const newNote = new Note({
        title: note.title,
        content: note.content,
        creationDate: note.creationDate
    })
    return newNote.save()
        .then(
            () => { return true }
        )
}

const readNoteByID = async (id) => {
    const noteByID = await Note.findById(id);
    if (noteID) {
        const note = {
            title: noteID.title,
            content: noteID.content,
            creationDate: noteID.creationDate
        }
        return note
    } else {
        return null
    }
}

const updateNote = async (id, newData) => {
    try {
        const updatedNote = new Note({
            title: newData.title,
            content: newData.content,
            creationDate: newData.creationDate
        })
        const updated = await Note.findByIdAndUpdate(id, updatedNote);
        if (!updated) {
            console.log('failed to update');
            return null
        } else {
            console.log('updated successfully');
            return updated
        }

    } catch (error) {
        console.log('failed to update : \n', error);
    }
}

const deleteNote = async (id) => {
    try {
        await Note.findByIdAndDelete(id);
        console.log('deleted successfully');

    } catch (error) {
        console.log('error in delete ', error);
    }
}

export default { createNote, readNoteByID, updateNote, deleteNote }