const http = require('http');
const fileSystem = require('fs');
const host = '127.0.0.1';
const port = 8080;
fileSystem.readFile('index.html',(err, html) => {
    if (err)
    {
        throw err;
    }
    const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.writeHeader(200, {"Content-Type": "text/html"});  
    res.write(html);
    res.end();
});

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}`);
});
});