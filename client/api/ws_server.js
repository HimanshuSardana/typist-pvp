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



const lobbies = {}; 

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('join-lobby', (message) => {
        const { name, lobbyCode } = message;
        socket.userName = name;
        socket.lobbyCode = lobbyCode;

        if (!lobbies[lobbyCode]) {
            lobbies[lobbyCode] = [];
        }

        lobbies[lobbyCode].push(name);
        socket.join(lobbyCode);
        console.log(`${name} joined lobby ${lobbyCode}`);
        io.to(lobbyCode).emit('recieve-user', { usersArr: lobbies[lobbyCode] });
    });

    socket.on('disconnect', () => {
        const { userName, lobbyCode } = socket;
        if (lobbyCode && lobbies[lobbyCode]) {
            console.log(`${userName} disconnected from lobby ${lobbyCode}`);
            lobbies[lobbyCode] = lobbies[lobbyCode].filter(user => user !== userName);
            io.to(lobbyCode).emit('recieve-user', { usersArr: lobbies[lobbyCode] });
        }
    });
});

server.listen(3000, () => console.log("Server listening on port 3000"));
