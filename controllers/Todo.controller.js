const { validationResult } = require("express-validator");
const Todo = require("../models/todoModel.js");
const User = require("../models/userModel.js");
const { statusCode } = require("../utils/constants.js");
const { jsonGenerate } = require("../utils/helpers.js");

const createTodo= async  (req,res)=>
{
   // const {userId, username}=req.body
   // res.send(`${req.userId} ${req.username}`)     
   const error=validationResult(req);
   if(!error.isEmpty())
   {
      return res.status(statusCode.VALIDATION_ERROR).json(jsonGenerate("desc is required"))
   }
   try {
      const {desc}=req.body
      const todo= await Todo.create({
         userId:req.userId,
         desc:desc
      })

      console.log(todo);
     if(todo)
     {
       const user = await User.findOneAndUpdate({_id:req.userId},
         {
            $push:{todos:todo}
         })

         return res.status(statusCode.SUCCESS).json(jsonGenerate("Todo created successfully"))
     }

   } catch (error) {
      return res.status(statusCode.UNPROCESSABLE_ENTITY).json(jsonGenerate("Somethink went wrong"))
   }
}

module.exports=createTodo