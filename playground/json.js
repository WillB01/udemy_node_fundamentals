const fs = require('fs');
const originalNote = {
    title: 'Some title',
    body: 'Some body'
};

const originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString, (err) => {
    console.log(err);
});

const noteString = fs.readFileSync('notes.json', (err) => {
    console.log(err);
});

const note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
