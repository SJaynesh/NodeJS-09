const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === "/favicon.ico") {
        return;
    }

    let fileName = "";

    switch (url) {
        case '/':
            fileName = "index.html";
            break;
        case '/about':
            fileName = "about.html";
            break;
        case '/contact':
            fileName = "contact.html";
            break;
        default:
            fileName = "404.html";
    }

    fs.readFile(fileName, (err, result) => {
        res.end(result);
    })
});

server.listen(8000, () => console.log("Server is stated..."));