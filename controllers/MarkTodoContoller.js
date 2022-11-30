const { validationResult } = require("express-validator");
const todo = require("../models/todoModel.js");
const { statusCode } = require("../utils/constants.js");
const { jsonGenerate } = require('../utils/helpers.js');


exports.markTodo=async (req,res) =>
{
    const error=validationResult(res);
    if(!error.isEmpty())
    {
        return res.status(statusCode.VALIDATION_ERROR).json(jsonGenerate("validation error",error))
    }
    try {
        
      const todoMark= await todo.findByIdAndUpdate({
        _id:req.body.todo_id,
        userId:req.userId},[
            {
                $set:
                {
                    isComplete:
                    {
                        $eq:[false, "$isComplete"]
                    }
                }
            }
        ]);

        if(todoMark)
        {
            return res.status(statusCode.SUCCESS).json(jsonGenerate("upadted",todoMark))
        }

    } catch (error) {
        return res.status(statusCode.UNPROCESSABLE_ENTITY).json(jsonGenerate("error in updating the todo",null))
    }
}