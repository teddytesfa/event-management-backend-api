const mongoose=require('mongoose');
const validator=require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const userSchema=mongoose.Schema({
    firstName:{
        type:String,
        maxLength:[30,"First name cannot exceed 30 characters"],
    },
    lastName:{
        type:String,
        maxLength:[30,"Last name cannot exceed 30 characters"],
    },
    userName:{
        type:String,
        required:[true,"Please enter your Username"],
        maxLength:[30,"Username cannot exceed 30 characters"],
        
    },
    phoneNumber:{
        type:Number,
        required:true  
    },
    email:{
        type:String,
        // required:[true,"Please enter your email"],
        // validator:[validator.isEmail,"Please enter a valid email address"], 
        // unique:true,
        // trim:true,
    
    },
    password:{
        type:String,
        minlength:[6,"your password must be longer than 6 characters"],
        select:false
    },
    image:{
        type:String,
            // required:true,
    },
    gender:{
        type:String,
    
    },
    profession:{
        type:String,
    
    },
    age:{
        type:Number,
    
    },
    createdAt:{
        type: Date,
            default: Date.now
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date
    })
 

    module.exports=mongoose.model('User',userSchema);