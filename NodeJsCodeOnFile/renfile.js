var fs = require('fs');

fs.rename('demo.txt','newname.txt',function(err){
    if(err){
        throw err;
    }
    console.log('File Renamed!!!!');
})