var fs = require('fs');
fs.open('sergio.txt', 'a', function writeFile(err, fd) {
    if (err)
        return console.log('error opening file: ' + err);
    fs.write(fd, 'sergio\n', function closeFile(err) {
        if (err)
            return console.log('error writing file: ' + err);
        fs.close(fd, function finish(err) {
            if (err)
                return console.log('error closing file: ' + err);
            console.log('file written');
        });
    });
});