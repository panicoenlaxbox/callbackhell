var fs = require('fs');
var buffer = new Buffer('sergio\n');

// Se pierden los closures
// Hay que seguir la ejecución viendo el código función a función, de arriba a abajo

var fd;

function writeFile(err, _fd) {
    if (err)
        return console.log('error opening file: ' + err);
    fd = _fd;
    fs.write(fd, buffer, 0, buffer.length, null, closeFile);
};

function closeFile(err) {
    if (err)
        return console.log('error writing file: ' + err);
    fs.close(fd, finish);
};

function finish(err) {
    if (err)
        return console.log('error closing file: ' + err);
    console.log('file written');
};

fs.open('sergio.txt', 'a', writeFile);