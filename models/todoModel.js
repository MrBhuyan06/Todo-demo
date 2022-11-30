const mongoose=require('mongoose')



const todoSchema=mongoose.Schema({
    userId:
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    
    },
    desc:
    {
        type:String,
        require:["true", "Desc  is  needed"]
    },
    isComplete:
    {
        type:String,
        default:false,
        require:true
    },
    
    date:
    {
        type:Date,
        default:Date.now()
    },
})
  
module.exports=mongoose.model('todo',todoSchema)