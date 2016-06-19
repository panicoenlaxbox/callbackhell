var fs = require('fs');
var buffer = new Buffer('sergio\n');
fs.open('sergio.txt', 'a', function writeFile(err, fd) {
    if (err)
        return console.log('error opening file: ' + err);
    fs.write(fd, buffer, 0, buffer.length, null, function closeFile(err) {
        if (err)
            return console.log('error writing file: ' + err);
        fs.close(fd, function finish(err) {
            if (err)
                return console.log('error closing file: ' + err);
            console.log('file written');
        });
    });
});