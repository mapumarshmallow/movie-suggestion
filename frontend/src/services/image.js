const jimp = require("jimp");

exports.read = function (file) {
    return jimp.read(file);
}