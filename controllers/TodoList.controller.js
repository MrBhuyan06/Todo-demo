const Todo = require("../models/todoModel.js");
const User = require("../models/userModel.js");
const { statusCode } = require("../utils/constants.js");
const { jsonGenerate } = require("../utils/helpers.js");

exports.getAllTodo= async(req,res)=>
{
    try {
        const list=  await User.findById(req.userId).select("-password").populate("todos").exec();
        console.log(list);
        return res.status(statusCode.SUCCESS).json(jsonGenerate('successfukky get all todo',list))
    } 
    catch (error) {
        return res.status(statusCode.UNPROCESSABLE_ENTITY).json(jsonGenerate('error in getting the todo',error))
        console.log(error);
    }
}