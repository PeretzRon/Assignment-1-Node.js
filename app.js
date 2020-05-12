const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req); // just for test the server
});

server.listen(3000);
