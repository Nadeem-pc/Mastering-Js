const fs = require('fs')
const readable = fs.createReadStream('read.txt')
const writable = fs.createWriteStream('write.txt')

readable.pipe(writable)