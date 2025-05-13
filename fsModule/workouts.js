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