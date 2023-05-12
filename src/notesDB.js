const { join } = require("path");
const app = require("../public/electron");
const noteDirectory = join(app.getPath('userData'), 'enotebook-notes');
const { writeFile, readFile, unlink } = require("fs");

const extension = '.entb';

function save(ID, content) {
    const filePath = join(noteDirectory, `${ID}${extension}`);
    writeFile(filePath, content, (e) => {
        if (err)
            console.log(`Error writing to file ${ID}:\n${e}`);
        else
            console.log(`Saved new note: ${ID}`);
    })
}

function read(ID, callback) {
    const filePath = join(noteDirectory, `${ID}${extension}`);

    readFile(filePath, 'utf-8', (e, data) => {
        if (e) {
            console.log(`Error reading note ${ID}:\n${e}`);
            callback(null);
        } else
            callback(data);
    })
}

function remove(ID) {
    const filePath = join(noteDirectory, `${ID}${extension}`);

    unlink(filePath, (e) => {
        if (e)
            console.log(`Error removing file ${ID}:\n${e}`);
        else
            console.log(`Successfully removed note ${ID}`);
    })
}

function update(ID, newContent) {
    const filePath = join(noteDirectory, `${ID}${extension}`);

    writeFile(filePath, newContent, (e) => {
        if (e)
            console.log(`Error updating file ${ID}:\n${e}`);
        else
            console.log(`Successfully updated file ${ID}`);
    })
}


class eNotebook {
    constructor() {
        if (!existsSync(noteDirectory))
            mkdirSync(noteDirectory);
    }

    createNote(id ,content) {
        save(id, content);
    }

    readNote(id, callback) {
        read(id, callback);
    }

    updateNote(id, newContent) {
        update(id, newContent);
    }

    deleteNote(id) {
        remove(id);
    }
}

module.exports = eNotebook;