const express=require("express");

const {home}=require('../controllers/controller.home')

const {register}=require('../controllers/controller.register.js')



const login=require('../controllers/login.controller.js')

const createTodo=require('../controllers/Todo.controller.js')

const {RegisterSchema}=require("../validationSchema/RegisterSchema.js")
const {LoginSchema}=require("../validationSchema/LoginSchema.js");
const { auth } = require("../middlewares/auth.middleware.js");


 const apiRoutes=express.Router();
 const apiProtectedRoutes=express.Router();

apiRoutes.get("/",home)
apiRoutes.post("/resgister",RegisterSchema,register)
apiRoutes.post("/login",LoginSchema,login)
apiRoutes.post("/createTodo", auth, createTodo)

module.exports= apiRoutes

// module.exports= apiProtectedRoutes