// mongodb

const { default: mongoose } = require("mongoose");
const emailValidator=require('email-validator');
const bcrypt = require('bcrypt');


const db_links = "mongodb+srv://rajesh:h2WFIguaebnlMIW8@cluster0.cd6oifi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(db_links)
.then(function(db){

     //console.log(db);
    console.log('db connected');
})

.catch(function(err){
    console.log(err);
});


const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    
    email:{
        type:String,
        required:true,
        unique:true,
        validate:function(){
            return emailValidator.validate(this.email);
        }
    },


    password:{
        type:String,
        required:true,
        minLength:8
    },

    confirmPassword:{
          type:String,
          required:true,
          minLength:8,
          validate:function(){
            return this.confirmPassword==this.password
          }
    },
    role:{
        type:String,
        enum:['admin', 'user', 'restaurantowner', 'deliveryboy'],
        default:'user'
    }
    ,

    profileImage:{
        type:String,
        default:'img/users/default.jpeg'
    }

});

// pre post hooks
// after save event occour in db
// usereSchema.post('save', function(doc){
// console.log('after saving in db', doc);
//});


// before save event occurs in db
// userSchema.pre('save', function(){
// console.log('before saving in db', this);
//});

// remove = explore on own

userSchema.pre('save', function(){
    this.confirmPassword= undefined;
});

// model 
const userModel = mongoose.model('userModel', userSchema);
module.exports=userModel;


// userSchema.pre('save', async function(){
//   let salt = await bcrypt.genSalt();
//   let hashedString= await bcrypt.hash(this.password, salt);
  //console.log(hashedString);
//   this.password=hashedString;
// })

// (async function createUser(){
//    let user={

//     name:'Abhishek',
//     email:'abc@gmail.com',
//     password:'123456789',
//     confirmPassword:'123456789'
  
// }

// let data = await userModel.create(user);
// console.log(data);
// })();