var fs = require('fs');

fs.unlink('newname.txt',function(err){
    if(err){
        throw err;
    }
    console.log('File Deleted!!!');
})