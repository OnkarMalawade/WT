var http=require('http');
//var myUTFw=require('./userFileWrite');
//var myUTFr=require('./userFileRead');
var fs = require('fs');
fs.writeFile('demo.txt','This  is  Demmo File.',function(err){
    if(err) {
        throw err;
    }
    console.log('File Created SuccessFully.');
});
fs.readFile('demo.txt','utf8',function (err, data) {
    if(err) {
        throw err;
    }
    console.log('Read File!! ');
    console.log(data);
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    //res.write(myUTFw.udfWrite());
    //res.write(myUTFr.udfRead());
    res.write(data);
    res.end();
}).listen(8084)
});