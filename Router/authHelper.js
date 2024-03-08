const { model } = require("mongoose");

//let flag = true;

const jwt = require('jsonwebtoken');
const Jwt_key='dsafjhfjk23434dfsskdjlkwebf';

function protectRoute(req, res, next){
    // if(req.cookies.isLoggedIn){
    //     next();
    // }

    if(req.cookies.login){
         console.log(req.cookies);
        let isVarified = jwt.verify(req.cookies.login, Jwt_key);
        if(isVarified){

            next();
        }

        else{

            return res.json({

                message:'user not varified'
            })
        }
    }
   
    // if(flag){
    //    next();
    // }

    else{

        return res.json({
            message:'operation not allowed'
        })
    }
}

module.exports=protectRoute;