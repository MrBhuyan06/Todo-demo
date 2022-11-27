
const User=require('../models/userModel.js')
const {validationResult}=require('express-validator');
const { jsonGenerate } = require('../utils/helpers.js');
const {statusCode}=require('../utils/constants');
const bcrypt =require('bcrypt')
const JWT=require('jsonwebtoken')
const login =async (req,res)=>
{ 
    const errors=validationResult(req);
    console.log(errors);
   if(errors.isEmpty())
   {
      // collect
      const {username, password}=req.body
      const userExist= await User.findOne({username})
      if(!userExist)
      {
        return res.json(jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "username or password wrong", userExist))
      }
      // compare the pass
      const verified=await bcrypt.compare(password,userExist.password)
       if(!verified)
       {
        return res.json(jsonGenerate(statusCode.UNPROCESSABLE_ENTITY, "username or password wrong", ))
         // generate the token
        }
        const {MYSECRET_KEY}=process.env
        const token=JWT.sign({
           userId:userExist._id,username:userExist.username
        },MYSECRET_KEY,{
           expiresIn:'2h'
        })
        
       res.json(jsonGenerate(statusCode.SUCCESS,"login is successful",{userId:userExist._id,token:token}))

   }
   res.json(jsonGenerate(statusCode.VALIDATION_ERROR, "Validation error", errors.mapped()))
}

module.exports=login