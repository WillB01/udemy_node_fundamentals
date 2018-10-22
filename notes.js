const fs = require('fs');

const fetchNotes = () => {
    try {
        const notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
    let notes = fetchNotes();
    let note = {
        title,
        body
    };
    const duplicateNotes = notes.filter((note) => note.title === title); 

    if (!duplicateNotes.length) {
        notes.push(note);
        saveNotes(notes);
        return note;
    };
};

const getAll = () => {
    let notes = fetchNotes();
    return notes;
};

const getNote = (title) => {
   let notes = fetchNotes();
   const singleNote = notes.filter(note => note.title === title);
   return singleNote[0];
};

const removeNote = (title) => {
   let notes = fetchNotes();
   const filteredNotes = notes.filter(note => note.title !== title);
   saveNotes(filteredNotes);
   return notes.length !== filteredNotes.length;
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}



