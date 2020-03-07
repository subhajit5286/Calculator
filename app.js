var express=require('express');
var http=require('http');
var fs = require('fs');
var PORT = process.env.PORT || 3000;
var server = http.createServer(function(req,resp){
    resp.writeHead(200,{'content-type':'text/html'});
    fs.readFile('./index.html',null,function(error,data){
        if(error){
            resp.writeHead(404);
            resp.write('File not Found');
        }
        else{
            resp.write(data);
        }
        resp.end();
    })
   
});


server.listen(PORT,function(){
    console.log('Server listening to port 3000');
});