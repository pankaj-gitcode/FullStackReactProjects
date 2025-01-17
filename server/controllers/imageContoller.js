import userModel from "../models/userModel";

export const imageController= async(req,res)=>{
    const {userId, prompt} = req.body;

    // find userId in DB
    const user = await userModel.findById(userId);

    // if data missing
    if(!userId || !prompt){
        return res.status(400).json({success:false, message: 'Mssing Data...'});
    }

    // no credit
    if(user.creditBalance === 0 || userModel.createBalance < 0){
        return res.json(404).json({success: false, message:'No Credit...'})
    }
}