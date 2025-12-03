const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) => {
    fs.readFile('index.html', (err, result) => {
        res.end(result);
    });
});

app.get("/about", (req, res) => {
    fs.readFile('about.html', (err, result) => {
        res.end(result);
    });
});

app.listen(8000, (err) => {
    if (err) {
        console.log("Server is not started..", err);
        return false;
    }

    console.log("Server is started...");
});