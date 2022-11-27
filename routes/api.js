const express=require("express");

const {home}=require('../controllers/controller.home')

const {register}=require('../controllers/controller.register.js')

const login=require('../controllers/login.controller.js')


const {RegisterSchema}=require("../validationSchema/RegisterSchema.js")
const {LoginSchema}=require("../validationSchema/LoginSchema.js")

const apiRoutes=express.Router();

apiRoutes.get("/",home)
apiRoutes.post("/resgister",RegisterSchema,register)
apiRoutes.post("/login",LoginSchema,login)

module.exports= apiRoutes