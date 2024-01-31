var fs = require('fs');
exports.udfRead=function(){

    fs.readFile('demo.txt','utf8',function (err, data) {
        if(err) {
            throw err;
        }
        console.log('Read File!! ');
        console.log(data);
    })
};