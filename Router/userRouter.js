const express = require("express");

const userRouter = express.Router();
const protectRoute=require('./authHelper');
// const{getUsers,getUserById, updateUser, deleteUser,
//     postUser} = require('../controller/userController');

const{getUser, getAllUser, updateUser,
deleteUser} = require('../controller/userController');


// not user right only learning porpose
// userRouter
// .route('/')
// .get(protectRoute, getUsers)
// .post(postUser)
// .patch(updateUser)
// .delete(deleteUser)

// userRouter
// .route("/getCookies")
// .get(getCookies);


// userRouter
// .route("/setCookies")
// .get(setCookies);


// userRouter.route('/:id').get(getUserById);

// this code relate to project


// user ke option
userRouter.route('/:id')
.patch(updateUser)
.delete(deleteUser)

userRouter
.router('/signup')
.post(signup)



userRouter
.router('login')
.post(login)
// profile page 
app.use(protectRoute);
userRouter
.route('/userProfile')
.get(getUser)

// admin specific func
app.use(isAuthorised(['admin']));
userRouter
.route('')
.get(getAllUser)



module.exports=userRouter;

