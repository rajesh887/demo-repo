const express = require("express");
const userModel = require('../models/userModels');
const jwt = require('jsonwebtoken');
const {Jwt_key} = require('../secrete');

// sign up user
module.exports.signup = async function signup(req, res){
    try{

        let dataObj = req.body;
        let user = await userModel.create(dataObj);
        if(user){
            res.json({
                message:"user sign up",
                data:user
            });
        }

    else{

        res.json({
            message:"error while signing up"
        });
    }
        
    }

    catch(err){
        res.status(500).json({
        message:err.message
        });
    }
}

// login user

async function login(req,res){

    try{
        
    }
}
