const mongoose=require('mongoose')



const userSchema=mongoose.Schema({
    name:
    {
        type:String,
        min:6,
        max:32
    },
    username:
    {
        type:String,
        min:6,
        max:32,
        require:true
    },
    password:
    {
        type:String,
        min:6,
        max:32,
        require:true
    },
    email:
    {
        type:String,
        min:6,
        max:32,
        require:true
    },
    todos:
    [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"todo",
        require:true
    }],
    date:
    {
        type:Date,
        default:Date.now()
    },
})
  
module.exports=mongoose.model('user',userSchema)