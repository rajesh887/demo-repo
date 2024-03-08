const express = require("express");
//const { uniqueId } = require("lodash");
const app = express();
//const mangoose = require('mongoose');
//const { default: mongoose } = require("mongoose");
//const emailValidator=require('email-validator');
const cookieParser=require('cookie-parser');





app.use(express.json());
app.listen(3001);
app.use(cookieParser());
const userRouter=require('./Router/userRouter');
const authRouter = require('./Router/authRouter');

// let users = [
  
//   {

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

// mini app







// base route, route to use
app.use("/user", userRouter);
app.use("/auth", authRouter);








