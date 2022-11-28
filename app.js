require('dotenv').config()
const express =require('express')
const { auth } = require('./middlewares/auth.middleware.js')
const { default: apiProtectedRoutes } = require('./routes/api')
require('./config/db').connection()

const apiRoutes =require('./routes/api')



const app=express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))




app.use('/api/v1',apiRoutes)

// app.use('/api/v1',auth,apiProtectedRoutes)





module.exports=app
