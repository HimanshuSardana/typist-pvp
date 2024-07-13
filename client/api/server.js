const express = require('express');
const cors = require('cors');
const http = require('http');
const fs = require('fs');

const words = JSON.parse(fs.readFileSync('./words.json'));

const shuffle = (array) => {
    let currentIndex = array.length;
    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
};

const app = express();

const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: ['Content-Type'],
    preflightContinue: false,
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

// Ensure preflight requests are handled
app.options('*', cors(corsOptions));

app.get("/generate/:length", (req, res) => {
    shuffle(words.words);
    const length = parseInt(req.params.length, 10);
    console.log(`${length} words requested`);
    res.send(words.words.slice(0, length).join(" "));
});

app.listen(3001, () => console.log("HTTP Server on 3001"));
