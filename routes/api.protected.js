const express=require("express");
const { check } = require("express-validator");
const { markTodo } = require("../controllers/MarkTodoContoller.js");
const { removeTodo } = require("../controllers/Remove.contoller.js");
const createTodo=require('../controllers/Todo.controller.js');
const { getAllTodo } = require("../controllers/TodoList.controller.js");
const { TodoSchema } = require("../validationSchema/TodoSchema.js");




const apiProtectedRoutes=express.Router();
apiProtectedRoutes.post("/createTodo",TodoSchema, createTodo)
apiProtectedRoutes.get("/getAllTodo", getAllTodo)
apiProtectedRoutes.put("/markTodo",[check('todo_id, todo id is required').exists()], markTodo)
apiProtectedRoutes.delete("/removeTodo",[check('todo_id, todo id is required').exists()], removeTodo)


module.exports= apiProtectedRoutes