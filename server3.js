const http = require('http');
const express = require('express');

const app = express();
app.use(express.json());

// default URL to API
app.use('/', function(req, res) {
    res.send('Succes');
});

const server = http.createServer(app);
const port = 3000;
server.listen(port);

console.debug('Server listening on port ' + port);
# Godkendelses3

var.test = test
// du skal have ændret i noget for at knytte en kommentar i din git