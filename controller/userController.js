const express = require("express");
const userRouter = express.Router();
const ProtectRouter=require('./authHelper');
const userModel = require('../models/userModels');
const { param } = require("../Router/userRouter");


//module.exports.getUsers=async function getUsers(req, res){
    // console.log(req.query);
    //let allUsers = await userModel.find();
  //   let allUsers = await userModel.findOne({name:'Abhishek'})
  //    res.json({
  //      message:'list of all users',
  //      data:allUsers
  //    });
   
  //  };
   
   
  //  module.exports.postUser = function postUser(req, res){
  //    console.log(req.body);
  //    users=req.body;
  //    res.json({
  //         message:"data received successfully",
  //         user:req.body
  //     });
  //  };
   
  //  module.exports.updateUser= async function updateUser(req, res){
  //    console.log('req.body->', req.body);
    // update data in users object
   
   
  //  let dataToBeUpdated = req.body;
  //  let user = await userModel.findOneAndUpdate({email:'rajeshrai0705@gmail.com'}, dataToBeUpdated);
   // for(key in" dataToBeUpdated){
    //   users[key] = dataToBeUpdated[key];
    // }
   
  //    res.json({
  //        message:"data updated successfully",
  //        data:user
  //    });
  //  }
   
  //  module.exports.deleteUser=async function deleteUser(req, res){
    //  users = {};
   
  //  let user = await userModel.findOneAndUpdate({email:'rajeshrai0705@gmail.com'});
  //    res.json({
  //       message:"data has been deleted",
  //       data:user
  //    })
  //  };
   
  //  module.exports.getUserById=function getUserById(req, res){
  //    console.log(req.params.id);
  //    res.send("user id recieved");
     
  //  }
   


// function setCookies(req, res){
    // res.setHeader('set-Cookies', 'isLoggedIn=true');  // rather then this used third party packege that is called 
     // cookies parser

//     res.cookie('isLoggedIn', true, {maxAge:1000*60*60*24, secure:true, httpOnly:true});
//     res.cookie('isPrimeMember', true);
//      res.send('cookies has been set');
// }


// function getCookies(req, res){
//     let cookies = req.cookies;
//     console.log(cookies);
//     res.send('cookies received');
// }



// ye project ka part hai


module.exports.getUser=async function getUser(req, res){
  // console.log(req.query);
  //let allUsers = await userModel.find();
  let id = req.params.id;
  let user = await userModel.findOne(id);
   if(user){
     return res.json(user);
   }
   
   else{
    return res.json({
      return:'user not found'
    });
   }
 }
 

module.exports.updateUser= async function updateUser(req, res){
  //console.log('req.body->', req.body);
// update data in users object
try{
let id = req.params.id;
let user = await userModel.findById(id);
let dataToBeUpdated = req.body;
if(user){
  const keys = [];
  for(let key in dataToBeUpdated){
        keys.push(key);
  }

  for(let i = 0; i<keys.length; i++){
      user[keys[i]] = dataToBeUpdated[keys[i]];
  }
  const updatedData = await user.save();
  res.json({
    message:"data updated successfully",
    data:user
});
}
else{
  
  res.json({
    message:"user not found"
  });
}

}
catch(err){
     
  res.json({
    message:err.message,
  });
}
}


module.exports.deleteUser = async function deleteUser(req, res){
  // users = {};
  try{
  let id = params.id;
  let user = await userModel.findByIdAndDelete(id);
  (id);
  if(!user){
       
    res.json({
      message:'user not found'
    })
  }
  res.json({
    message:"data has been deleted",
    data:user,
  });

}

catch(err){
   res.json({
    message:err.message
   });
}
}


module.exports.getAllUser = async function getAllUser(req, res){
    let users = await userModel.find();
    if(user){
      res.json({
        message:'users retrieved',
        data:users
      });
    }

    res.send("user id received");
};

