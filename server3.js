
const express = require('express');
const app = express();
const port = process.env.port || 4000;

// vores basic route
app.get("/", (req, res) => {
   
});

// vi lytter på porten
app.listen(port, err => {
    if (err) {
        return console.log("ERROR", err);
    }
    console.log('listening on port ${port}');
});
