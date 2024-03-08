const express = require("express");
const userModel = require('../models/userModels');
const jwt = require('jsonwebtoken');
//const Jwt_key='dsafjhfjk23434dfsskdjlkwebf';
const {Jwt_key} = require('Router/secrete');



const authRouter = express.Router();



authRouter
.route('/signup')
.get(middleware1, getSingUp, middleware2)
.post(postSignUp);


authRouter
.route('/login')  
.post(loginUser)


function middleware1(req, res, next){
    console.log('middleware1 encountered');
    next();
  }
  
  
  function middleware2(req, res, next){
    console.log('middleware2 encountered');
   // next();
  console.log("middleware 2 ended req/res cycle")
  res.sendFile('indexes.html',{root:__dirname});
  }
  
  
   function getSingUp(req, res, next){
  
     console.log('getSignUp called');
      next();
  // res.sendFile('indexes.html',{root:__dirname});
   }
  
  
  async function postSignUp(req, res){
    let dataObj = req.body;
    let user = await userModel.create(dataObj);
      //console.log('backend', user);
       res.json({
         message:"user signed up",
        // data:obj
        data:user
       });
  }





async function loginUser(req, res){
  try{
      
    let data  = req.body;
    if(data.email){
    let user = await userModel.findOne({email:data.email});

    if(user){

      // bcrypt bad me use 
      //karenge bde project ke time usme ek mathod
      // hota ha compare abhi simple chack krna hai
    
      if(user.password == data.password){
       //   old way -> jo achha nhi hota
        //     res.cookie('isLoggedIn', true,
       //     {httpOnly:true});
       //     res.cookie('isLoogedIn', true);
     

       // new way jo accha hai 
      let uid = user['_id']; // uid
      let token = jwt.sign({payload:uid}, Jwt_key);
      res.cookie('login', token,
      {httpOnly:true});
   
     

      

      return res.json({
              message:'User has logged in',
              userDetails:data
          });
      }
     else{

          return res.json({
              message:'wrong credentials'
          })
      }

  }
else{
   return res.json({
          message:'user not found'
    })

  }


  }

  else{
    return res.json({
        message:'Empty field found'
    });
  }

}

  catch(err){

    return res.status(500).json({

       message:err.message
    })
  }

}



  module.exports=authRouter;


