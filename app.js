
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');
const titleOption = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

const bodyOption = {
describe: 'Body of note',
demand: true,
alias: 'b'
};

const argv = yargs.command('add', 'Add a new note', {
    title: titleOption,
    body: bodyOption
})
.command('list', 'List all notes')
.command('read', 'Read a note', {title: titleOption})
.command('remove', 'Remove a note' , {title: titleOption})
.help().argv;


const myCommands = ['add', 'list', 'read', 'remove']
const command = argv._[0];
const errorMsg = 'could not find note';

if (command === myCommands[0]) {
    let note = notes.addNote(argv.title, argv.body)
    let msg = note === undefined ?
        'Note title taken!' :
        `Note Added: 
    Title: ${note.title}
    Body: ${note.body}`;
    console.log(msg);
} else if (command === myCommands[1]) {
    let allNotes = notes.getAll();
    let msg = `Printing note(s): ${allNotes.length} \n`;
    allNotes.forEach(n => {
       msg += `Note: ${n.title} - ${n.body} \n`;
    });
    console.log(msg)
   
} else if (command === myCommands[2]) {
    let note = notes.getNote(argv.title);
    let msg = note ? `Note: ${note.title} ${note.body}` : errorMsg;
    console.log(msg);
} else if (command === myCommands[3]) {
    let isNoteRmoved = notes.removeNote(argv.title);
    let msg = isNoteRmoved ? `Note Removed!` : errorMsg;
    console.log(msg);
} else {
    console.log('Command not recognize');
}



