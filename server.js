// server creation
// 1. http module

const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res)=>{
    console.log("request has been made from browser to server");
    //console.log(req);
    //console.log(req.method);
    //console.log(req.url);
    // res.setHeader('content-type', 'test/plain');
    // res.write('Hello, pepecoding');
    // res.end();

    // lodash
    let num = _.random(0,20);
    console.log(num);


//    function greet(){
//         console.log('hello');
//     }

//     greet();
//     greet();
  
let greet = _.once(()=>{
    console.log('hello');
});

greet();
greet();
    
    let path='./';
    switch(req.url){
        case '/':
            path += '/index.html';
            res.statusCode = 200;
            break;
            
        case '/about':
            path += '/about.html';
            res.statusCode = 200;
            break;
        case '/about-me':
            res.statusCode=301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        
        default:
            path += '/404.html';
            res.statusCode = 404;
            break;
    }
    fs.readFile(path,(err, fileData)=>{
        if(err){
            console.log(err);
        }
        else{
         //   res.write(fileData);
            res.end(fileData);

        }
    } )

});


server.listen(3001, 'localhost', ()=>{
    console.log('server is listening on port 3001');
});


// implement 
// status code 200, 400 and redirect
