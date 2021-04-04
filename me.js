const express = require('express');
const app = express();

var path = require('path');
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/me.html');
});

app.get('/generate', (req, res) => {
    res.sendFile(__dirname + '/html/generate.html');
});

app.get('/verify', (req, res) => {
    res.sendFile(__dirname + '/html/verify.html');
});

app.listen(3000, () => {
    console.log('Server is running on Port 3000');
});