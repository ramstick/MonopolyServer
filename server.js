const express = require('express'); // using express 
const socketIO = require('socket.io');
const https = require('https');
const port = 5231; // setting the port  
let app = express();
let server = https.createServer(app);
let io = socketIO(server);

server.listen(port);

// make a connection with the user from server side
io.on('connection', (socket) => {
    console.log('New user connected');
});