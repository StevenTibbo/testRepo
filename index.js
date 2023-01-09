var http = require('http'),
    fileSystem = require('fs'),
    path = require('path');

const server = http.createServer(function(request, response) {
    response.writeHead(200, {
        'Content-Type': 'application/octet-stream',
        'Content-Length': stat.size
    });
    
    var readStream = fileSystem.createReadStream(filePath);
    readStream.pipe(response);
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log(`Server running at http://localhost:${port}`);
