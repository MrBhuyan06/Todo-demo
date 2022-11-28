const createTodo= async  (req,res)=>{

   res.send(req.userId,req.username)     
}

module.exports=createTodo