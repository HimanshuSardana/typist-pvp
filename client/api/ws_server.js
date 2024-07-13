const express = require('express');
const cors = require('cors');
const http = require('http');
const fs = require('fs');
const { Server } = require('socket.io');


const app = express()
// Detailed CORS configuration


const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
    }
});



let users = [];
io.on('connection', (socket) => {
    console.log('A user connected');

    // Send the current list of users to the newly connected client
    socket.emit('recieve-user', { usersArr: users });

    socket.on('join-lobby', (message) => {
        const userName = message.name;
        socket.userName = userName; // Store the user name in the socket object
        users.push(userName);
        console.log(`${userName}(${message.index}) joined`);
        
        // Send the updated users list to all clients
        io.emit('recieve-user', { usersArr: users });
    });

    socket.on('disconnect', () => {
        const disconnectedUser = socket.userName;
        console.log(`${disconnectedUser} disconnected`);
        
        // Remove the disconnected user from the users array
        users = users.filter(user => user !== disconnectedUser);
        
        // Send the updated users list to all clients
        io.emit('recieve-user', { usersArr: users });
    });
});

server.listen(3000, () => console.log("Server listening on port 3000"));
