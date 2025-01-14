import userModel from "../models/userModel";
import bcrypt from 'bcrypt'
import Jwt  from "jsonwebtoken";
import validator from 'validator'
import 



// function to register & authenticate using Token
const registerUser = async(req,res)=>{

    try{

        const {name, password, email } = req.body;

    //check if name||pass||email is missing
    if(!name || !password || !email){
        res.status(400).json({success:false, message: 'Missing Details'})
    }

    // validate the Email using validator
    if(!validator.isEmail(email)){
        res.status(400).json({success:false, message: 'Invalid Email!'});
    }

    //create salt using bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create user database
   const userData = {
    name,email,password: {hashedPassword}
   }
   const user = await userModel.create(userData);

   // create TOKEN
   const token = Jwt.sign({id:user._id}, process.env.JWT_PASS);
   res.status(200).json({
    success:true,
    message: 'Token generated...',
    TOKEN: token
   })
    }
    catch(err){
        res.status(500).json({
            message: 'ERROR in user Controller...'
        })
    }
}
