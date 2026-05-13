const http = require('http');

const os = require('os');

const path = require('path');

const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('message', () => {

    console.log('Event Triggered Successfully');
});

const server = http.createServer((req, res) => {

    eventEmitter.emit('message');

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.write(`
        <h1>Custom Node.js Server</h1>

        <h2>OS Information</h2>

        <p>Platform:
        ${os.platform()}</p>

        <p>Architecture:
        ${os.arch()}</p>

        <h2>Path Module</h2>

        <p>File Name:
        ${path.basename(__filename)}</p>
    `);

    res.end();
});

server.listen(3000, () => {

    console.log('Server running at http://localhost:3000');
});