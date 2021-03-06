const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const pathurl = url.parse(req.url, true);
    const filepath = path.join(__dirname, 'public', pathurl.pathname);

    fs.readFile(filepath, 'utf-8', (err, file ) => {
        if (err){
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.write('404 Not Found');
            res.end();
        }else{
            req.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.write(file);
            res.end();
        }
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
