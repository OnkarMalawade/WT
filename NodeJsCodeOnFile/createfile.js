var fs = require('fs'); //  inbuilt module  fs(File System)

fs.writeFile('demo.txt','This  is  Demmo File.',function(err){
    if(err) {
        throw err;
    }
    console.log('File Created SuccessFully.');
})

fs.readFile('demo.txt','utf8',function (err, data) {
    if(err) {
        throw err;
    }
    console.log('Read File!! ');
    console.log(data);
})

fs.appendFile('demo.txt',' This Data is Appended to File',
function(err){
    if(err) {
        throw err;
    }
    console.log('Appened Data to the File!!');
})

fs.readFile('demo.txt','utf8',function (err, data) {
    if(err) {
        throw err;
    }
    console.log('Read File!! ');
    console.log(data);
})