import jwt from 'jsonwebtoken'

const userAuth = async(req, res, next)=>{
    
    try{
        const {token} = req.headers;

    // check if headers is non-empty
    if(!token){return res.status(400).json({success:false, message:'Invalid Entry...'})}

    //if valid token then decode it
    const tokenDecode = jwt.verify(token, process.env.JWT_PASS);
    
   
    if(tokenDecode.id){ req.body.userId = tokenDecode.id }
    else{return res.status(404).json({success:false, message: 'Invalid user token!'})}

    next();
    }
    catch(err){
        res.status(404).json({
            success: false,
            message: `Error! ${err.message}`
        })
    }
}

export default userAuth;