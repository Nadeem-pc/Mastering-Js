const fs = require('fs')

// For creating a new file
fs.writeFile('sample.txt', 'Content will be given here', (err) => {
    if(err) {
        console.log(err)
    }
    console.log('File created successfully...')
})

// For reading data from a file
fs.readFile('sample.txt', 'utf-8', (err, data) => {
    if(err){
        console.log('Cannot read file', err)
    }
    console.log('Data from File: ', data)
})

// Creating file using writeFileSync
try {
    fs.writeFileSync('async.txt', 'Hi my name is nadeem')
    console.log('File created successfully')
} catch (error) {
    console.log(error)
}

// readFileSync
try {
    const data = fs.readFileSync('async.txt', 'utf-8')
    console.log('Data: ',data)
} catch (error) {
    console.log(error)
}

// Adding data to an existing file
fs.appendFile('sample.txt', ' This data is appended after creation', (err) => {
    console.log('Data appended successfully')
})

// Deleting a folder
fs.rmdir('delete', (err) => {
    if (err) throw err;
    console.log('folder deleted successfully')
})

// Creating a new folder 
fs.mkdir('newFolder', (err) => {
    if (err) throw err;
    console.log('folder created successfully')
})

// Deleting a file
fs.unlink('delete.txt', (err) => {
    console.log('File deleted successfully')
})

// Write a file when a Promise resolves,
const fs = require('fs').promises;

function writeFile(content) {   // Function that returns a promise
    return new Promise((resolve, reject) => {
        const taskCompleted = true;

        if (taskCompleted) {
            resolve(content);
        } else {
            reject("Task failed.");
        }
    });
}

writeFile("Hello, this is the file content.")   // Use the promise and write to the file when resolved
    .then((content) => {
        return fs.writeFile("examplee.txt", content);
    })
    .then(() => {
        console.log("File written successfully!");
    })
    .catch((error) => {
        console.error("An error occurred:", error);
    });