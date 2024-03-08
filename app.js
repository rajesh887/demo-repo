
const express = require('express');
const app = express();


app.listen(3001);

 app.get('/', function(req, res){
     res.send('Hello World')
 });

// app.get('/about', function(req, res){
//      res.send(<h1>about</h1>);
// });


// app.get('/', (req, res)=>{
//     res.sendFile('D:\Backend\about.html');
// });


// app.get('/about', (req, res)=>{
//     res.sendFile('./about.html', 
//     {root:__dirname});

// });


// post-> to send data from frontend to backend






// const express = require("express");
// const app = express();

//middleware func-> post, front -> json   it is a middleware function which used
// for post request, jab bhi hmara data aa rhe hai na frontend se tu usee json me convert krdo
// post request use to send data from frontend to backend

// app.use(express.json());
// app.listen(3001);
// let users = [
//    {

//     'id':1,
//     'name':"Rajesh"
//    },
  
//    {
//     'id':2,
//     'name':"Shivam"
//    },
//    {

//     'id':3,
//     'name':"Sudhanshu"
//    }
   
// ];

//app.get('/user', (req, res)=>{
 //    res.send(users);
//})




//app.post('/user', (req, res)=>{
  //  console.log(req.body);
  //  users=req.body;
  //  res.json({
  //       message:"data received successfully",
  //       user:req.body
  //   });
//});


// class 2
// post ->  data hmesha request ki body me jata hai jo hmm fronted se backend me data bhejte hai ye yaad krn
//  tu vo request ki body ke ander hota hai postman me



// update -> patch
//app.patch('/user', (req, res)=>{
    //console.log('req.body->', req.body);
  // update data in users object
  //let dataToBeUpdated = req.body;
 // for(key in dataToBeUpdated){
   // users[key] = dataToBeUpdated[key];
  //}
    //res.json({
      //  message:"data updated successfully"
    //});
//});




// delete -> to delete a data

//app.delete('/user', (req, res)=>{
    //  users = {};
    //  res.json({
    //     message:"data has been deleted"
    //  })
//})

// app.get('/user/:id',(req, res)=>{
//     console.log(req.params.id);
//     res.send("user id recieved");
    
// })

// query trye your self


// app.get('/user', (req, res)=>{
//      console.log(req, query);
//      res.send(users);
// })



// mouting in express