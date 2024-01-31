var fs = require('fs');
exports.udfWrite=function(){
    fs.writeFile('demo.txt','This  is  Demmo File.',function(err){
        if(err) {
            throw err;
        }
        console.log('File Created SuccessFully.');
    })
};