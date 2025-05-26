const fs = require('fs')
const readable = fs.createReadStream('read.txt', {encoding: 'utf-8'})

readable.on('data', (chunk) => {
    console.log(chunk)
})

readable.on('end', () => {
    console.log('Finished reading file.');
});

readable.on('error', (err) => {
    console.error('Error reading file:', err);
});