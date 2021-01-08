const fs = require('fs');

function deleteFile(fileName){
    fs.unlink(fileName, function (err) {
        try {
            console.log('File deleted!');
            return;

        } catch (error) {
            console.error(error.message)
        }
    });
}

module.exports = deleteFile;

