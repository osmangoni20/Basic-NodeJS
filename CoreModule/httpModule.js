const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hi Programers ');
        res.write('How Are You?');
        res.end();
    } else if (req.url === '/about') {
        res.write('It is about Page');
        res.end();
    } else {
        res.write('Not Found Anything');
        res.end();
    }
});

server.listen(3000);

console.log('Listener Port 3000');
