var fs = require('fs');
fs.open('sergio.txt', 'a', function(err, fd) {
    if (err)
        return console.log('error opening file: ' + err);
    fs.write(fd, 'sergio\n', function(err) {
        if (err)
            return console.log('error writing file: ' + err);
        fs.close(fd, function(err) {
            if (err)
                return console.log('error closing file: ' + err);
            console.log('file written');
        });
    });
});