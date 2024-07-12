const express = require('express')
const cors = require('cors')
const http = require('http')
const fs = require('fs')

const words = JSON.parse(fs.readFileSync('./words.json'));

const shuffle = (array) => {
    let currentIndex = array.length;
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }


const app = express()
app.use(cors({ origin: '*'}))
const {Server} = require('socket.io')

const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: '*',
    }
})

app.get("/generate/:length", (req, res) => {
    shuffle(words.words)
    console.log(`${req.params.length} words requested`)
    res.send(words.words.slice(req.params.length).join(" "))
})

let users = []
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

server.listen(3000, () => console.log("Server listening on port 3000"))
