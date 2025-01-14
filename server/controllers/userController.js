import userModel from "../models/userModel";
import bcrypt from 'bcrypt'
import jwt  from "jsonwebtoken";
import validator from 'validator'

// ------------------ REGISTRATION -----------
// function to register/signUp & authenticate using Token
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
   const token = jwt.sign({id:user._id}, process.env.JWT_PASS);
   res.status(200).json({
    success:true,
    message: 'Token generated...',
    TOKEN: token
   })
    }
    catch(err){
        res.status(500).json({
            message: `ERROR in user Controller...: ${err.message}`
        })
    }
}

// ------------------ LOGIN -----------
const loginUser = async(req,res)=>{
    const {email,password} = req.body;

    // check the validity of email
    if(!validator.isEmail(email)){res.status(400).json({success:false, message: 'Invlaid Login Email'})};

    // check then email & password already in DB
    const user = await userModel.findOne({email})
    if(!user){res.status(400).json('Invalid user/entry')}

    // check the password hash matched
    const isMatched = await bcrypt.compare(password, user.password)
    if(!isMatched){
        res.status(404).json({
            success: false,
            message: 'Incorrect Password!...'
        })
    }

    // else create Token post validation of email & pass
    const token = jwt.sign({id: user._id}, process.env.JWT_PASS);
    res.status(200).json({
        success: true,
        token,
        user: user.name
    })


}
