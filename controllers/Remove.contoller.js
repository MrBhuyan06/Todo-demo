const { validationResult } = require("express-validator");
const todo = require("../models/todoModel.js");
const { statusCode } = require("../utils/constants.js");
const { jsonGenerate } = require('../utils/helpers.js');

exports.removeTodo=async(req,res)=>
{
    const error=validationResult(res);
    if(!error.isEmpty())
    {
        return res.status(statusCode.VALIDATION_ERROR).json(jsonGenerate("validation error",error))
    }
    try {
        
      const todoMark= await todo.findByIdAndDelete({
        _id:req.body.todo_id,
        userId:req.userId});

        if(todoMark)
        {
            return res.status(statusCode.SUCCESS).json(jsonGenerate("deleted",todoMark))
        }

    } catch (error) {
        return res.status(statusCode.UNPROCESSABLE_ENTITY).json(jsonGenerate("error in deleting the todo",null))
    }

}