const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end("My CI/CD Pipeline is Working!");
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});