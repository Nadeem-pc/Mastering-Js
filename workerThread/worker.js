const {parentPort} = require('worker_threads')

parentPort.on('message', (num) => {
    const result = num * 2
    parentPort.postMessage(result)
});