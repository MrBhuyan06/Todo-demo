const expressvalidator =require('express-validator')
// import { JsonWebTokenError } from "jsonwebtoken"
const bcrypt =require('bcrypt')
const JWT =require('jsonwebtoken')

const User=require('../models/userModel')
const {statusCode}=require('../utils/constants')
const {jsonGenerate}=require('../utils/helpers')

exports.register= async(req,res)=>
{
    
    const errors=expressvalidator.validationResult(req)
    

    if(errors.isEmpty())
    {
           const {name, username, password, email}=req.body
           const mybcryptpassword=await bcrypt.hash(password,10);
           
           const userExist=await User.findOne({
            $or :[
                {
                    email
                },
                {
                    username
                }
            ]
        })
        if(userExist)
        {
            return res.json(statusCode.UNPROCESSABLE_ENTITY,"User or Email Already exists")
        }
           // save  to Db

           try {
            const user= await User.create({
                name,
                email,
                username,
                password:mybcryptpassword
            }) 
            const {MYSECRET_KEY}=process.env
             const token=JWT.sign({
                id:user._id,
                user:user.username
             },MYSECRET_KEY,{
                expiresIn: "2h",
              })

            res.json(jsonGenerate(statusCode.SUCCESS,"Registration successfull",{userId:user._id,token:token}))


           } catch (error) {
            console.log(`${error} `);
           }
    }

    res.json(jsonGenerate(statusCode.VALIDATION_ERROR, "Validation error", errors.mapped()))

}