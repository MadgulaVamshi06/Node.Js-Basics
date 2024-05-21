const fs = require('fs');
const path = require('path');

// Get command line arguments
const operation = process.argv[2];
const target = process.argv[3] || '.'; // Default to current directory if target is not provided
const content = process.argv[4];

switch (operation) {
    case 'read':
        readFile(target);
        break;
    case 'delete':
        deleteFile(target);
        break;
    case 'create':
        createFile(target);
        break;
    case 'append':
        appendToFile(target, content);
        break;
    case 'rename':
        renameFile(target, content);
        break;
    case 'list':
        listDirectory(target);
        break;
    default:
        console.log(`Invalid operation '${operation}'`);
}

function readFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading file '${filePath}':`, err.message);
            return;
        }
        console.log(data);
    });
}

function deleteFile(filePath) {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.error(`Error deleting file '${filePath}':`, err.message);
            return;
        }
        console.log(`File '${filePath}' deleted`);
    });
}

function createFile(filePath) {
    fs.writeFile(filePath, '', (err) => {
        if (err) {
            console.error(`Error creating file '${filePath}':`, err.message);
            return;
        }
        console.log(`File '${filePath}' created`);
    });
}

function appendToFile(filePath, content) {
    fs.appendFile(filePath, content + '\n', (err) => {
        if (err) {
            console.error(`Error appending to file '${filePath}':`, err.message);
            return;
        }
        console.log(`Content appended to the file '${filePath}'`);
    });
}

function renameFile(oldPath, newPath) {
    if (!newPath) {
        console.error(`Error: new file name must be specified for renaming.`);
        return;
    }
    fs.rename(oldPath, newPath, (err) => {
        if (err) {
            console.error(`Error renaming file from '${oldPath}' to '${newPath}':`, err.message);
            return;
        }
        console.log(`File '${oldPath}' renamed to '${newPath}'`);
    });
}

function listDirectory(dirPath) {
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            console.error(`Error listing directory '${dirPath}':`, err.message);
            return;
        }
        files.forEach(file => {
            console.log(file);
        });
    });
}
