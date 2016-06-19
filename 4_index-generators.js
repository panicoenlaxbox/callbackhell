var fs = require('fs');
var co = require('co')
var thunkify = require('thunkify');
var open = thunkify(fs.open);
var write = thunkify(fs.write);
var close = thunkify(fs.close);

co(function*() {
    var fd = yield open('sergio.txt', 'a');
    yield write(fd, 'sergio\n');
    yield close(fd);
});