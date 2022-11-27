require('dotenv').config()
const express =require('express')
require('./config/db').connection()

const apiRoutes =require('./routes/api')

const app=express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))




app.use('/api/v1',apiRoutes)



module.exports=app
