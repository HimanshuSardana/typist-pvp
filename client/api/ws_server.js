const express = require('express');
const cors = require('cors');
const http = require('http');
const fs = require('fs');
const { Server } = require('socket.io');


const app = express()

const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		origin: '*',
	}
});

const lobbies = {}; 

io.on('connection', (socket) => {
    console.log('A user connected');

	socket.on('join-lobby', async (message) => {
		const { name, lobbyCode } = message;
		socket.userName = name;
		socket.lobbyCode = lobbyCode;

		// Ensure lobbies[lobbyCode] is initialized
		if (!lobbies[lobbyCode]) {
			// Initialize with default values
			lobbies[lobbyCode] = {
				users: [],
				text: "",
				results: []
			};

			// Fetch text asynchronously
			try {
				const response = await fetch("http://localhost:3001/generate/25");
				const respText = await response.text();
				lobbies[lobbyCode].text = respText;
			} catch (error) {
				console.error("Error fetching text:", error);
			}
		}

		lobbies[lobbyCode].users.push(name);
		socket.join(lobbyCode);
		console.log(`${name} joined lobby ${lobbyCode}`);
		io.to(lobbyCode).emit('recieve-user', { text: lobbies[lobbyCode].text, usersArr: lobbies[lobbyCode].users });
	});

	
	socket.on('disconnect', () => {
		const { userName, lobbyCode } = socket;
		if (lobbyCode && lobbies[lobbyCode]) {
			console.log(`${userName} disconnected from lobby ${lobbyCode}`);

        lobbies[lobbyCode].users = lobbies[lobbyCode].users.filter(user => user !== userName);
        io.to(lobbyCode).emit('recieve-user', { text: lobbies[lobbyCode].text, usersArr: lobbies[lobbyCode].users });
        if (lobbies[lobbyCode].users.length === 0) {
            delete lobbies[lobbyCode];
        }
    }
});
});

server.listen(3000, () => console.log("Server listening on port 3000"));
