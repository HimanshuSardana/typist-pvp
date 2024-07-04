
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
	cors: {
		origin: "http://localhost:8000", // Make sure to include the http protocol
		methods: ["GET", "POST"],
	},
});

// Apply the CORS middleware
app.use(cors({
	origin: 'http://localhost:8000', // Again, include the http protocol
	methods: ['GET', 'POST'],
}));

app.get("/", (req, resp) => resp.send("hello"));

io.on('connection', (sock) => {
	console.log(`New connection: ${sock.id}`);
	sock.on('disconnect', () => {
		console.log(`Disconnected: ${sock.id}`);
	});
});

const PORT = 3000;
server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
