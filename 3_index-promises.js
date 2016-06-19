var fs = require('fs');
var q = require('q');

var openQ = q.denodeify(fs.open);
var writeQ = q.denodeify(fs.write);
var closeQ = q.denodeify(fs.close);

openQ('sergio.txt', 'a')
    .then(function(fd) {
        return writeQ(fd, 'sergio\n')
            .then(function() {
                return closeQ(fd);
            });
    })
    .then(function() {
        return console.log('file written');
    })
    .catch(function(err) {
        console.error('error ' + err);
    });