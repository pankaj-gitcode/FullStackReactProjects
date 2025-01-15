import jwt from 'jasonwebtoken'

const userAuth = async(req, res, next)=>{
    
    const {token} = req.headers;

    // check if headers is non-empty
    if(!token){return res.status(400).json({success:false, message:'Invalid Entry...'})}

    //if valid token then decode it
    const tokenDecode = jwt.verify(token, process.env.JWT_PASS);
    
    // if valid then extract ID and attach ID to req.body to be used further functions
    tokenDecode.id?
    req.body.userId = tokenDecode
    :
    res.status(404).json({success:false, message: 'Unauthorised Login!...'})

    next();

}